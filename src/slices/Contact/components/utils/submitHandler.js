import axios from "axios";
import { getAdminEmailTemplate } from "./templates/getAdminEmailTemplate";
import { getUserEmailTemplate } from "./templates/getUserEmailTemplate";

export const handleFormSubmit = async (
  values,
  resetForm,
  recipient,
  cc,
  bcc,
  setSuccess,
  setSubmitMessage,
  recaptchaToken,
  headerLogo,
  socialMedia,
  acknowledgementMessage,
) => {
  const adminEmails = recipient?.split(",").slice(0, 2).join(",");

  const userEmailContent = getUserEmailTemplate(
    values,
    headerLogo,
    socialMedia,
    acknowledgementMessage,
  );
  const adminEmailContent = getAdminEmailTemplate(
    values,
    headerLogo,
    socialMedia,
  );

  const allEmailData = [
    {
      recipient: values.email,
      replyTo: adminEmails,
      emailRequestFrom: values.email,
      subject: `Thank You — We’ve Received Your Enquiry`,
      content: userEmailContent,
      cc,
      bcc,
      isAdminEmail: false,
      formName: "Contact Form",
    },
    {
      recipient: adminEmails,
      replyTo: values.email,
      emailRequestFrom: values.email,
      subject: `${values.name} | New Contact Form Enquiry Received`,
      content: adminEmailContent,
      cc,
      bcc,
      isAdminEmail: true,
      formName: "Contact Form",
    },
  ];

  try {
    // Sending the emails
    const response = await axios.post("/api/send-mail", {
      values,
      emails: allEmailData,
      recaptchaToken,
    });

    if (response.data.success) {
      setSuccess(true);
      setSubmitMessage("Your form has been submitted successfully!");
      resetForm();
      // Reset the message after a timeout
      // setTimeout(() => setSubmitMessage(""), 5000);
    } else {
      // setSubmitMessage(response.data.message || "Failed to submit form. Please try again.");
      setSubmitMessage("Failed to submit form. Please try again.");
      setSuccess(false);
    }
  } catch (error) {
    // Network error or axios error
    console.error("Request error:", error);
    setSubmitMessage("Failed to submit form. Please try again.");
    // if (error.response) {
    //   // Server responded with error status
    //   console.error("Server response error:", error.response.data);
    //   setSubmitMessage(
    //       "Failed to submit form. Please try again."
    //   );
    // } else if (error.request) {
    //   // Request was made but no response
    //   console.error("No response received:", error.request);
    //   setSubmitMessage(
    //     "Network error. Please check your connection and try again."
    //   );
    // } else {
    //   // Something else happened
    //   console.error("Error:", error.message);
    //   setSubmitMessage("An unexpected error occurred. Please try again.");
    // }
    setSuccess(false);
  }
};
