const axios = require("axios");

const formErrorsWebhook =
  "";

const formTestingWebhook =
  "";

// ----------------------------------------------
// Helpers
// ----------------------------------------------
const getTimestamp = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${year}-${month}-${day}  ${hours}:${minutes}${ampm}`;
};

const formatObjectAsList = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => `• ${key}: ${value || "(empty)"}`)
    .join("\n");

const sendSlack = async (webhookUrl, text) => {
  try {
    await axios.post(webhookUrl, { text }, { withCredentials: false });
  } catch {
    console.log("Failed to send the message to Slack");
  }
};

const getStageIcon = (stage) => {
  switch (stage) {
    case "development":
      return "🛠️ DEV";
    case "staging":
      return "🚧 STAGING";
    case "production":
      return "🔥 PRODUCTION";
    default:
      return "❓ UNKNOWN";
  }
};

// ----------------------------------------------
// ERROR MESSAGE FUNCTION
// ----------------------------------------------
export const slackFormError = async ({
  errorMessage,
  fields = {},
  formData = {},
  formName = "",
}) => {
  // if (!text || process.env.NEXT_PUBLIC_STAGE !== "production") return true;

  const timestamp = getTimestamp();

  const formattedFields = formatObjectAsList(fields);
  const formattedFormData = formatObjectAsList(formData);
  const stage = process.env.NEXT_PUBLIC_STAGE;
  const stageIcon = getStageIcon(stage);

  const text = `*${stageIcon} - Kalyara | ${formName}*
\n⏰ _${timestamp}_
\n❌ Email sending failed!
\n${errorMessage ? `*Error*: \`${errorMessage}\`` : ""}
\n\`\`\`
Recipient Details:
${formattedFields}

Form Data:
${formattedFormData}
\`\`\`
\u200B \u200B \u200B`;

  await sendSlack(formErrorsWebhook, text);
  return true;
};

// ----------------------------------------------
// SUCCESS MESSAGE FUNCTION
// ----------------------------------------------
export const slackFormSucess = async ({
  fields = {},
  formData = {},
  isAdminEmail = false,
  formName = "",
}) => {
  const timestamp = getTimestamp();
  const recipientName = isAdminEmail ? "Admin" : "Client";
  const stage = process.env.NEXT_PUBLIC_STAGE;
  const stageIcon = getStageIcon(stage);

  const hasFields = isAdminEmail && Object.keys(fields).length > 0;
  const hasFormData = Object.keys(formData).length > 0;

  const detailsSection =
    hasFields || hasFormData
      ? `✅ The email was sent to the ${recipientName} successfully with the following details.
\`\`\`
${hasFields ? `Recipient Details:\n${formatObjectAsList(fields)}\n\n` : ""}Form Data:
${hasFormData ? formatObjectAsList(formData) : "N/A"}
\`\`\``
      : "";

  // Compose Slack message
  const text = `*${stageIcon} - Kalyara | ${formName}* - ${recipientName} Notification
\n⏰ _${timestamp}_
${detailsSection}
\n\u200B\u200B\u200B`;

  await sendSlack(formTestingWebhook, text);
  return true;
};

// ----------------------------------------------
// TESTING FUNCTION
// ----------------------------------------------
export const slackFormTesting = async ({ message = "" }) => {
  // Compose Slack message
  const text = `📝 ${message}
  \n\u200B`;

  await sendSlack(formTestingWebhook, text);
  return true;
};
