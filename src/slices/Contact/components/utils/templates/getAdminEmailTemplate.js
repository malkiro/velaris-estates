import { header, footer } from "./layout";

export const getAdminEmailTemplate = (values, logoField, socialMedia) => {
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
                        <p style="margin: 0 0 12px;">Hello Team,</p>
                        <p style="margin: 0 0 12px;">
                          A new enquiry has been submitted through the Kalyara website.
                        </p>
                        <p style="margin: 20px 0 10px; font-weight: bold;">Please find the details below:</p>
                        <ul style="padding-left: 20px; margin: 0;">
                          <li style="margin-bottom: 6px;">Full Name: ${values?.name || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Email Address: ${values?.email || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Phone Number: ${values?.phone || "N/A"}</li>
                          <li style="margin-bottom: 6px;">Message: ${values?.message || "N/A"}</li>
                        </ul>
                        <p>Please review and respond at your earliest convenience.</p>
                        <p style="margin-top: 20px 0 0;">
                          Kind regards,
                          <br />
                          <strong>Kalyara Team</strong>
                        </p>
                      </td>
                    </tr>
                  </table>
                  ${footer(logoField, socialMedia)}
                </div>
              </div>
            </body>
          </html>
        `;
};
