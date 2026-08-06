import Mailgun from "mailgun.js";
import formData from "form-data";
import axios from "axios";
import determineRecipient from "./determineRecipient";
import { slackFormError, slackFormSucess } from "@/utils/send-to-slack";
import validationSchema from "@/slices/Contact/components/utils/validationSchema";

const domain = process.env.MAILGUN_DOMAIN;
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const sendEmail = async (emailData, url, formData) => {
  const { replyTo, subject, content, attachment, formName, isAdminEmail } =
    emailData;
  const { recipient, cc, bcc } = await determineRecipient({
    ...emailData,
    formData,
  });

  if (!recipient) {
    // Slack alert: Determined recipient email missing
    if (isAdminEmail) {
      await slackFormError({
        errorMessage: "Determined recipient email missing.",
        fields: {
          cc: emailData?.cc || "-",
          bcc: emailData?.bcc || "-",
          recipient: emailData?.recipient || "-",
          determinedRecipient: recipient || "-",
        },
        formData,
        formName: formName,
      });
    }

    return { success: false, message: "Determined recipient email missing" };
  }

  const config = {
    from: `Kalyara <web@${domain}>`,
    to: recipient,
    subject,
    html: content,
  };
  if (replyTo) config["h:Reply-To"] = replyTo;
  if (cc) config.cc = cc;
  if (bcc) config.bcc = bcc;

  if (attachment?.url) {
    const res = await axios.get(attachment.url, {
      responseEncoding: "base64",
    });
    config.attachment = {
      data: Buffer.from(res.data, "base64"),
      filename: attachment.name,
    };
  }

  try {
    await mg.messages.create(domain, config);

    // ✅ Notify Slack about success
    await slackFormSucess({
      fields: {
        cc: emailData?.cc || "-",
        bcc: emailData?.bcc || "-",
        recipient: emailData?.recipient || "-",
        determinedRecipient: recipient || "-",
      },
      formData,
      isAdminEmail,
      formName,
    });

    return { success: true };
  } catch (e) {
    console.error("Mailgun error:", e);
    // Call Slack for Mailgun error
    if (isAdminEmail) {
      const errorMessage = e?.message || e;
      const errorDetails = e?.details || "";

      await slackFormError({
        errorMessage: `${errorMessage}${errorDetails ? ` - ${errorDetails}` : ""}`,
        fields: {
          cc: emailData?.cc || "-",
          bcc: emailData?.bcc || "-",
          recipient: emailData?.recipient || "-",
          determinedRecipient: recipient || "-",
        },
        formData,
        formName,
      });
    }
    return { success: false };
  }

  // return await mg.messages
  //   .create(domain, config)
  //   .then(() => ({ success: true }))
  //   .catch(async (e) => {
  //     console.error("Mailgun error:", e);
  //     // await slackFormError(
  //     //   `Failed to send the email ${url}, ${JSON.stringify(config)}`
  //     // );
  //     return { success: false };
  //   });
};

const send = async ({ values, emails, recaptchaToken }, url) => {
  // Yup validation
  try {
    await validationSchema.validate(values, { abortEarly: false });
  } catch (validationError) {
    // Slack alert: Server-side validation failed
    if (emails?.[1]?.isAdminEmail) {
      await slackFormError({
        errorMessage: "Server validation failed",
        fields: {
          cc: emails?.[1]?.cc || "-",
          bcc: emails?.[1]?.bcc || "-",
          recipient: emails?.[1]?.recipient || "-",
        },
        formData: values,
        formName: emails?.[1]?.formName,
      });
    }

    return {
      success: false,
      message: "Validation failed",
      errors: validationError.errors,
    };
  }

  if (!recaptchaToken)
    return { success: false, message: "Recaptcha token missing" };

  try {
    await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.CLOUDFLARE_SECRET_KEY,
        response: recaptchaToken,
      }
    );
  } catch (error) {
    console.log(error);
    // Slack alert: Recaptcha verification failed
    if (emails?.[1]?.isAdminEmail) {
      await slackFormError({
        errorMessage: "Recaptcha verification failed",
        fields: {
          cc: emails?.[1]?.cc || "-",
          bcc: emails?.[1]?.bcc || "-",
          recipient: emails?.[1]?.recipient || "-",
        },
        formData: values,
        formName: emails?.[1]?.formName,
      });
    }
    return { success: false, message: "recaptchaToken verification error" };
  }

  // recipient email check
  if (!emails[1].recipient) {
    // Slack alert: Missing recipient email
    if (emails?.[1]?.isAdminEmail) {
      await slackFormError({
        errorMessage: "Recipient email is missing",
        fields: {
          cc: emails?.[1]?.cc || "-",
          bcc: emails?.[1]?.bcc || "-",
          recipient: emails?.[1]?.recipient || "-",
        },
        formData: values,
        formName: emails?.[1]?.formName,
      });
    }
    return;
  }

  try {
    const results = await Promise.all(
      emails.map((email) => sendEmail(email, url, values))
    );

    const allSuccess = results.every((res) => res.success);

    return {
      success: allSuccess,
      message: allSuccess
        ? "All emails sent successfully"
        : "Some emails were failed",
    };
  } catch (err) {
    console.error("Send function error:", err);
    // Slack alert: Email sending failed
    if (emails?.[1]?.isAdminEmail) {
      await slackFormError({
        errorMessage: "Unexpected error occurred while sending emails",
        fields: {
          cc: emails?.[1]?.cc || "-",
          bcc: emails?.[1]?.bcc || "-",
          recipient: emails?.[1]?.recipient || "-",
        },
        formData: values,
        formName: emails?.[1]?.[0]?.formName,
      });
    }
    return { success: false, message: "Unexpected error while sending emails" };
  }
};

export default send;
