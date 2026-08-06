/**
 *
 * @param cc
 * @param bcc
 * @param recipient
 * @param emailRequestFrom
 * @returns {{cc, bcc, recipient: string}|{recipient: string}} after validating the environments
 */

import { slackFormTesting } from "@/utils/send-to-slack";

const determineRecipient = async ({
  cc = "",
  bcc = "",
  recipient = "",
  emailRequestFrom = "",
  isAdminEmail = false,
}) => {
  const isNotTestEmail = !isTestEmail(emailRequestFrom);

  if (process.env.NEXT_PUBLIC_STAGE !== "production") {
    return { recipient: "forms@atdigital.io" };
  }

  if (process.env.NEXT_PUBLIC_STAGE === "production" && isNotTestEmail) {
    return { recipient, cc, bcc };
  } else if (isClectiqTest(emailRequestFrom)) {
    if (isAdminEmail) {
      await slackFormTesting({
        message: "Form testing created for Clectiq in Kalyara",
      });
    }
    return { recipient: "forms@clectiq.com" };
  } else if (isAtdTest(emailRequestFrom)) {
    if (isAdminEmail) {
      await slackFormTesting({
        message: "Form testing created for ATD in Kalyara",
      });
    }
    return { recipient: "forms@atdigital.io" };
  } else {
    if (isAdminEmail) {
      await slackFormTesting({
        message: "Invalid Form Testing in Kalyara",
      });
    }
    return { recipient: "" };
  }
};

export default determineRecipient;

/**
 *
 * @param emailRequestFrom
 * @returns {boolean} - returns true if this is a test email from ATD or clectiq
 */
const isTestEmail = (emailRequestFrom) => {
  return (
    emailRequestFrom?.includes("@atdigital.") ||
    emailRequestFrom?.includes("@clectiq.")
  );
};

/**
 *
 * @param emailRequestFrom
 * @returns {boolean} - returns true if this is a test email from clectiq
 */
const isClectiqTest = (emailRequestFrom) => {
  return emailRequestFrom?.includes("@clectiq.");
};

/**
 *
 * @param emailRequestFrom
 * @returns {boolean} - returns true if this is a test email from ATD
 */
const isAtdTest = (emailRequestFrom) => {
  return emailRequestFrom?.includes("@atdigital.");
};
