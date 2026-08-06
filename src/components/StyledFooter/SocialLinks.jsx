import { FaTiktok as Tiktok, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from "react-icons/fa";

const SocialLinks = ({ links }) => {
  const formattedLinks = getSocialProfiles(links);

  if (!formattedLinks || !formattedLinks?.length) return null;

  return (
    <div
      className={"flex justify-center items-center md:justify-start gap-[30px]"}
    >
      {formattedLinks.map(
        ({ link, icon, variant }, index) =>
          link && (
            <a
              href={link}
              target={"_blank"}
              rel={"noreferrer"}
              aria-label={`Visit us on ${variant}`}
              key={index}
              // className={
              //   "m-1 bg-[#F0F0F0] p-[10px] rounded-[6px] text-[#00000073]"
              // }
            >
              <span aria-hidden="true">{icon}</span>
            </a>
          ),
      )}
    </div>
  );
};

const getSocialProfiles = (links) => {
  const socialLinks = [];
  const size = 24;

  for (let i = 0; i < links.length; i++) {
    const { variant, url } = links[i];

    switch (variant) {
      case "TikTok":
        socialLinks.push({
          variant,
          link: url,
          icon: <Tiktok size={size} />,
        });
        break;
      case "Facebook":
        socialLinks.push({
          variant,
          link: url,
          icon: <Facebook size={size} />,
        });
        break;
      case "X (Twitter)":
        socialLinks.push({
          variant,
          link: url,
          icon: <Twitter size={size} />,
        });
        break;
      case "Instagram":
        socialLinks.push({
          variant,
          link: url,
          icon: <Instagram size={size} />,
        });
        break;
      case "LinkedIn":
        socialLinks.push({
          variant,
          link: url,
          icon: <Linkedin size={size} />,
        });
        break;
      case "YouTube":
        socialLinks.push({
          variant,
          link: url,
          icon: <Youtube size={size} />,
        });
        break;
      default:
        break;
    }
  }
  return socialLinks;
};

export default SocialLinks;
