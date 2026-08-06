"use client";
import React from "react";
import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicRichText } from "@prismicio/react";

const Variation3 = ({ slice }) => {
  const cards = slice.primary.cards || [];

  return (
    <StyledContainer slice={slice} parentClass="flex flex-col items-center">
      <StyledSectionTitle
        slice={slice}
        isHero={false}
        wrapperClassName="max-w-[1280px] common-space [&_.section-description]:mt-0"
      />

      <div
        className="flex flex-wrap justify-center 
                      md:gap-x-[48px] lg:gap-x-[182px]"
      >
        {cards.map((item, index) => {
          const showVerticalLineDesktop = index % 3 !== 0;

          const showVerticalLineTablet = index % 2 !== 0;

          return (
            <React.Fragment key={index}>
              <div
                className={`
          relative flex flex-col items-center text-center lg:items-start lg:text-left
          w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-121.33px)]

          /* ========== Vertical Lines (Separators) ========== */
          ${
            showVerticalLineDesktop
              ? `
            lg:before:content-['']
            lg:before:absolute
            lg:before:w-[1px]
            lg:before:bg-text-placeholder
            lg:before:top-0 
            lg:before:bottom-[20px]
            lg:before:left-[-91px]
          `
              : "lg:before:hidden"
          }

          ${
            showVerticalLineTablet
              ? `
            md:max-lg:before:content-['']
            md:max-lg:before:absolute
            md:max-lg:before:w-[1px]
            md:max-lg:before:bg-text-placeholder
            md:max-lg:before:top-0 
            md:max-lg:before:bottom-[22px]
            md:max-lg:before:left-[-24px]
          `
              : "md:max-lg:before:hidden"
          }
        `}
              >
                <div className="mb-[12px] md:mb-[16px] lg:mb-[30px]">
                  <span className="title-font text-title-x-large font-medium text-secondary-light-2 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <StyledPrismicRichTextSingle
                  field={item.name}
                  className="title-font text-title-medium font-medium mb-[12px] text-text-secondary"
                />

                <div className="body-font text-body-medium text-text-base">
                  <PrismicRichText field={item.description} />
                </div>
              </div>

              {index === 2 && (
                <div className="hidden lg:block w-full h-[1px] bg-text-placeholder my-[36px]" />
              )}

              {(index + 1) % 2 === 0 && index !== cards.length - 1 && (
                <div className="hidden md:max-lg:block w-full h-[1px] bg-text-placeholder my-[36px]" />
              )}

              {index !== cards.length - 1 && (
                <div className="block md:hidden w-full h-[1px] bg-text-placeholder my-[24px]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </StyledContainer>
  );
};

export default Variation3;
