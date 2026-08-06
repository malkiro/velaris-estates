"use client";

import ArrowIcon from "@/assets/images/Arrow.png";
import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const WhyChooseUsDefault = ({ slice }) => {
  const cards = slice.primary.cards || [];

  return (
    <StyledContainer slice={slice} parentClass="flex flex-col items-center">
      <StyledSectionTitle
        slice={slice}
        isHero={false}
        wrapperClassName="max-w-[1280px] common-space"
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[48px] md:gap-y-[72px] lg:gap-x-[182px] md:gap-x-[48px]">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center text-center lg:items-start lg:text-left

              /* ========== Desktop Vertical Lines  ========== */

              lg:[&:not(:nth-child(3n+1))]:before:content-['']
              lg:[&:not(:nth-child(3n+1))]:before:absolute
              lg:[&:not(:nth-child(3n+1))]:before:w-[1px]
              lg:[&:not(:nth-child(3n+1))]:before:bg-text-placeholder
              lg:[&:not(:nth-child(3n+1))]:before:top-0 lg:[&:not(:nth-child(3n+1))]:before:bottom-0
              lg:[&:not(:nth-child(3n+1))]:before:left-[-91px] /* - (182 / 2) */

              /* Tablet vertical lines */

              md:max-lg:[&:nth-child(2n)]:before:content-['']
              md:max-lg:[&:nth-child(2n)]:before:absolute
              md:max-lg:[&:nth-child(2n)]:before:w-[1px]
              md:max-lg:[&:nth-child(2n)]:before:bg-text-placeholder
              md:max-lg:[&:nth-child(2n)]:before:top-0 md:max-lg:[&:nth-child(2n)]:before:bottom-0
              md:max-lg:[&:nth-child(2n)]:before:left-[-24px]

              /* ========== Horizontal Lines ========== */
              after:content-[''] after:absolute after:h-[1px] after:bg-text-placeholder
              after:left-0

              /* 1. Mobile  */
              after:right-0 after:top-[-36px]
              [&:nth-child(1)]:after:hidden

              /* 2. Tablet  */
              md:max-lg:after:w-[calc(100%+48px)]
              md:max-lg:[&:nth-child(2n)]:after:w-full
              md:max-lg:[&:nth-child(-n+2)]:after:hidden

              /* 3. Desktop */
              lg:after:w-[calc(100%+182px)]
              lg:[&:nth-child(3n)]:after:w-full
              lg:[&:nth-child(-n+3)]:after:hidden

              after:top-[-36px]
            `}
          >
            {/* Icon */}
            {item.icon && (
              <div className="mb-[16px] md:mb-[24px] lg:md:mb-[30px]">
                <PrismicNextImage
                  field={item.icon}
                  className="w-[40px] h-[40px] object-contain"
                  fallbackAlt=""
                />
              </div>
            )}

            {/* Feature Title */}
            <StyledPrismicRichTextSingle
              field={item.name}
              className="title-font text-title-medium font-medium mb-[12px] text-text-secondary"
            />

            {/* Feature Description */}
            <div className="body-font text-body-medium text-text-base">
              <PrismicRichText field={item.description} />
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      {slice.primary.button_name && (
        <div className="mt-[28px] md:mt-[32px] lg:mt-[40px] md:mt-12 w-full flex justify-center md:px-0">
          <StyledButton
            link={slice.primary.button_link}
            variant="primary"
            className="!w-full md:!w-[220px] md:!h-[52px] flex items-center justify-center"
          >
            <span>{slice.primary.button_name}</span>
          </StyledButton>
        </div>
      )}
    </StyledContainer>
  );
};

export default WhyChooseUsDefault;
