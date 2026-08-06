"use client";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { header, footer } from "./layout";
import { renderToStaticMarkup } from "react-dom/server";

export const getUserEmailTemplate = (
  values,
  logoField,
  socialMedia,
  acknowledgementMessage,
) => {
  const renderedAcknowledgementMessage = renderToStaticMarkup(
    <StyledPrismicRichTextSingle field={acknowledgementMessage} />,
  );
  return `
          <html>
            <head>
              <meta charset="UTF-8" />
              <title>Contact Form Submission</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
              <div style="background-color: #FAF6EF; font-family: Arial, sans-serif;">
                <div style="max-width: 576px; margin: 0 auto; padding: 32px;">
                ${header(logoField)}
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="font-size: 16px; line-height: 26px; color: #333333; padding: 32px; background-color: white; border-radius: 14px; border: 1px solid #EAE8F2;">
                        <p style="margin: 0 0 12px;">Hi <strong>${values?.name || "N/A"}</strong>,</p>
                       ${renderedAcknowledgementMessage}
                       <p style="margin: 20px 0 10px; font-weight: bold;">Here’s a summary of your submission:</p>
                        <ul style="padding-left: 20px; margin: 0;">
                          <li style="margin-bottom: 6px;">Full Name: ${values?.name || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Email Address: ${values?.email || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Phone Number: ${values?.phone || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Message: ${values?.message || "N/A"}</li>
                        </ul>
                        <p>We look forward to assisting you with your property needs.</p>
                        <p style="margin: 20px 0 0;">
                          Warm regards,
                          <br />
                          <strong>Kalyara Team</strong>
                        </p>
                      </td>
                    </tr>
                    ${footer(logoField, socialMedia)}
                </div>
              </div>
            </body>
          </html>
       `;
};
