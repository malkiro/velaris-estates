"use client";

import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import StyledContainer from "@/components/StyledContainer";
import StyledButton from "@/components/StyledButton";
import { sliceGaps } from "@/utils/sliceGaps";
import clsx from "clsx";

const InvestmentOpportunities = ({ slice }) => {
  return (
    <div className={sliceGaps(slice)}>
      <StyledContainer slice={slice}>
        <div className="flex flex-col lg:flex-row items-center justify-between py-[60px] md:py-[80px] lg:py-0 gap-x-[40px]">
          {/* --- Text Content Column --- */}
          <div
            className={clsx(
              "w-full lg:w-[630px] flex flex-col",
              "items-center text-center",
              "lg:items-start lg:text-left",
              "pb-[28px] md:pb-[32px] lg:pb-0 md:px-[29px] lg:px-0 lg:pt-[51px]",
            )}
          >
            <div className="title-font text-title-2x-large text-text-heading mb-[12px] md:mb-[16px] lg:mb-[16px]">
              <PrismicRichText field={slice.primary.title} />
            </div>

            {/* Description - Spacing before list matches figma */}
            <div className="body-font text-body-medium text-text-base mb-[30px]">
              <PrismicRichText field={slice.primary.description} />
            </div>

            <div
              className={clsx(
                "flex flex-col w-full",
                "pl-[24px] pr-[14px] md:pl-0 md:pr-0",
                "items-center lg:items-start",
              )}
            >
              {/* Feature List (flex) */}
              <div
                className={clsx(
                  "flex flex-wrap w-full max-w-[343px] md:max-w-none gap-x-[20px] gap-y-[16px]",
                  "justify-center md:justify-start lg:mx-0",
                )}
              >
                {slice.primary.list_items?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-10px)] flex justify-center md:justify-start"
                  >
                    <div className="flex items-start gap-[9.5px] w-[305px] lg:w-full">
                      {item.icon && (
                        <div className="flex-shrink-0 w-[20px] h-[22.5px] mt-[2px]">
                          <PrismicNextImage field={item.icon} fallbackAlt="" />
                        </div>
                      )}

                      <div className="min-w-0 body-font text-body-medium text-text-base text-left">
                        <PrismicRichText
                          field={item.icon_name}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="m-0 p-0 text-left line-clamp-2">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {slice.primary.button_link && (
              <StyledButton
                link={slice.primary.button_link}
                variant="primary"
                className="w-full !w-[220px] !h-[52px] flex items-center justify-center mt-[30px]"
              >
                <span className="text-[16px] md:text-[18px] leading-[18px] font-medium">
                  {slice.primary.button_name || "View more"}
                </span>
              </StyledButton>
            )}
          </div>

          <div className="w-full lg:w-[610px] flex justify-center lg:justify-end lg:my-[113px]">
            <div className="relative w-full aspect-square max-w-[343px] md:max-w-[688px] lg:max-w-[610px]">
              <PrismicNextImage
                field={slice.primary.image}
                fill
                className="object-contain"
                fallbackAlt=""
              />
            </div>
          </div>
        </div>
      </StyledContainer>
    </div>
  );
};

export default InvestmentOpportunities;
