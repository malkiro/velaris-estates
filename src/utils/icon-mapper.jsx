import dynamic from "next/dynamic";

const iconNameMap = {
  ArrowForward: "FiArrowRight",
  ArrowBack: "FiArrowLeft",
  Close: "FaTimes",
  AddCircle: "FaPlusCircle",
  RemoveCircle: "FaMinusCircle",
  ChevronForward: "FaChevronRight",
  HomeFill: "FaHome",
  SearchFill: "FaSearch",
  Tiktok: "FaTiktok",
  Facebook: "FaFacebook",
  Twitter: "FaTwitter",
  Instagram: "FaInstagram",
  Linkedin: "FaLinkedin",
  Youtube: "FaYoutube",
};

export const loadIcon = (icon) => {
  if (!icon) return null;

  return dynamic(
    () => {
      const mappedName = iconNameMap[icon] || icon || `Fa${icon}`;
      
      if (mappedName.startsWith("Fi")) {
        return import("react-icons/fi")
          .then((mod) => mod[mappedName] || mod["FiCircle"])
          .catch(() => () => null);
      }

      return import("react-icons/fa")
        .then((mod) => mod[mappedName] || mod[icon] || mod["FaCircle"])
        .catch(() => () => null);
    },
    {
      ssr: true,
      loading: () => null,
    }
  );
};
