const header = (logoData) => {
  const imageSrc = logoData?.url ? `${logoData.url}&w=256` : "";
  const imageAlt = logoData?.alt || "Logo";
  return `
          <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
            <tr>
              <td align="left" style="padding: 32px;">
                <img
                src="${imageSrc}"
                  alt="${imageAlt}"
                  width="auto"
                  height="44"
                  style="display: block; border: 0; outline: none; text-decoration: none; max-width: 222px;"
                />
              </td>
            </tr>
          </table>
        `;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_STAGE === "production"
    ? "https://candoconveyancing.com.au"
    : "https://candoconveyancing.netlify.app";

const getSocialIconPath = (variant) => {
  const key = String(variant || "").toLowerCase();
  switch (key) {
    case "linkedin":
      return "https://candoconveyancing.netlify.app/images/linkedin.png";
    case "facebook":
      return "https://candoconveyancing.netlify.app/images/facebook.png";
    case "instagram":
      return "https://candoconveyancing.netlify.app/images/instagram.png";
    default:
      return "";
  }
};

const buildSocialLinksMarkup = (socialMedia) => {
  if (!Array.isArray(socialMedia) || socialMedia.length === 0) return "";
  const items = socialMedia
    .map((item) => {
      const href = item?.url || item?.href || "";
      const icon = getSocialIconPath(item?.variant);
      if (!href || !icon) return "";
      const alt = item?.variant || "social";
      return `
        <a href="${href}" target="_blank" rel="noopener" style="display:inline-block;margin-left:12px;">
          <img src="${icon}" alt="${alt}" width="20" height="20" style="display:block;border:0;outline:none;text-decoration:none;" />
        </a>
      `;
    })
    .filter(Boolean)
    .join("");
  return items;
};

const footer = (logoData, socialMedia) => {
  const imageSrc = logoData?.url ? `${logoData.url}&w=256` : "";
  const imageAlt = logoData?.alt || "Logo";
  const socialLinksMarkup = buildSocialLinksMarkup(socialMedia);
  return `
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 32px;" role="presentation">
            <tr>
              <td style="border-bottom: 1px solid #dddddd; padding-bottom: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                  <tr>
                    <td align="left" style="vertical-align: middle;">
                      <img
                       src="${imageSrc}"
                        alt="${imageAlt}"
                        width="auto"
                        height="24"
                        style="display: block; border: 0; outline: none; text-decoration: none; max-width: 120px;"
                      />
                    </td>
                    <td align="right" style="vertical-align: middle;">
                     ${socialLinksMarkup}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                  <tr>
                    <td align="left" style="font-size: 12px; color: #667085;">
                      © 2025 Kalyara. All rights reserved.
                    </td>
                    <td align="right" style="font-size: 12px;">
                      <a
                        href="${SITE_URL}/terms-and-conditions"
                        style="color: #667085; text-decoration: none; margin-left: 16px;"
                        target="_blank"
                        rel="noopener"
                      >
                        Terms
                      </a>
                      <a
                        href="${SITE_URL}/privacy-policy"
                        style="color: #667085; text-decoration: none; margin-left: 16px;"
                        target="_blank"
                        rel="noopener"
                      >
                        Privacy
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `;
};

export { header, footer };
