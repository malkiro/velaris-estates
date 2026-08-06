import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <>
      <StyledPrismicRichTextSingle
        field={subtitle}
        className="title-font text-title-base text-text-base tracking-[0.0125em] mb-1.5 md:mb-3"
      />
      <StyledPrismicRichTextSingle
        field={title}
        className="title-font text-title-2x-large -tracking-tight text-text-heading"
      />
      <StyledPrismicRichText
        field={description}
        className="text-body-medium text-text-base mt-3 md:mt-4"
      />
    </>
  );
};

export default SectionTitle;
