"use client";

import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Variation2 = ({ slice }) => {
  const cards = slice.primary.cards || [];

  return (
    <StyledContainer slice={slice} parentClass="flex flex-col items-center">
      <StyledSectionTitle
        slice={slice}
        isHero={false}
        wrapperClassName="max-w-[1280px] common-space [&_.section-description]:mt-0"
      />

      {/* Cards Grid: */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[48px] md:gap-y-[72px] lg:gap-x-[40px] md:gap-x-[48px]">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center text-center 

              /* ========== Vertical Lines (Separators) ========== */
              /* Desktop: Separators between 4 columns (60px gap) */
              lg:[&:not(:nth-child(4n+1))]:before:content-['']
              lg:[&:not(:nth-child(4n+1))]:before:absolute
              lg:[&:not(:nth-child(4n+1))]:before:w-[1px]
              lg:[&:not(:nth-child(4n+1))]:before:bg-text-placeholder
              lg:[&:not(:nth-child(4n+1))]:before:top-0 lg:[&:not(:nth-child(4n+1))]:before:bottom-0
              lg:[&:not(:nth-child(4n+1))]:before:left-[-30px] /* (60px gap / 2) */

              /* Tablet: Separators between 2 columns (48px gap) */
              md:max-lg:[&:nth-child(2n)]:before:content-['']
              md:max-lg:[&:nth-child(2n)]:before:absolute
              md:max-lg:[&:nth-child(2n)]:before:w-[1px]
              md:max-lg:[&:nth-child(2n)]:before:bg-text-placeholder
              md:max-lg:[&:nth-child(2n)]:before:top-0 md:max-lg:[&:nth-child(2n)]:before:bottom-0
              md:max-lg:[&:nth-child(2n)]:before:left-[-24px] /* (48px gap / 2) */

              /* ========== Horizontal Lines (Row Dividers) ========== */
              after:content-[''] after:absolute after:h-[1px] after:bg-text-placeholder
              after:left-0 

              /* 1. Mobile: Show on all except first item */
              after:top-[-24px]
              after:right-0
              [&:nth-child(1)]:after:hidden

              /* 2. Tablet: Hide for the first row (items 1 & 2) */
              md:max-lg:after:top-[-36px]
              md:max-lg:after:w-[calc(100%+48px)]
              md:max-lg:[&:nth-child(2n)]:after:w-full
              md:max-lg:[&:nth-child(-n+2)]:after:hidden

              /* 3. Desktop: Hide entirely because there is only ONE row */
              lg:after:hidden
            `}
          >
            {/* Icon */}
            {item.icon && (
              <div className="mb-[16px] md:mb-[24px] lg:mb-[30px]">
                <PrismicNextImage
                  field={item.icon}
                  fallbackAlt=""
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>
            )}

            {/* Title */}
            <StyledPrismicRichTextSingle
              field={item.name}
              className="title-font text-title-medium font-medium mb-[12px] text-text-secondary max-w-[332px] md:max-w-none w-full mx-auto"
            />

            {/* Description */}
            <div className="body-font text-body-medium text-text-base">
              <PrismicRichText field={item.description} />
            </div>
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default Variation2;
