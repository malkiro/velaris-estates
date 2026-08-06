import React from "react";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";

const ContentContainer = ({ slice }) => {
  return (
    <div className="text-center mx-auto mb-[32px] md:mb-[40px] title-sec">
      <div className="mb-[16px]">
        <div className="text-body-base text-center  text-primary-light font-medium mb-[6px] md:mb-[12px]">
          <StyledPrismicRichTextSingle field={slice.primary.subtitle} />
        </div>
        <StyledPrismicRichTextSingle
          field={slice.primary.title}
          className="text-title-3x-large  text-[#1D1D1D] font-medium  mb-[6px] md:mb-[12px]"
        />
      </div>
      <div className="text-body-medium text-text-secondary max-w-[900px] mx-auto">
        <StyledPrismicRichText field={slice.primary.description} />
      </div>
    </div>
  );
};

export default ContentContainer;
