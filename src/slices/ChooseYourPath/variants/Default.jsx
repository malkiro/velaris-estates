"use client";

import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledButton from "@/components/StyledButton";
import { TopBottomGaps } from "@/utils/TopBottomGaps";
import { isFilled } from "@prismicio/client";

export default function InvestmentPath({ slice }) {
  const isRightAligned = slice.primary.right_aligned_image;
  const hasBackgroundColor = slice?.primary?.with_background_color;

  const hasTitle = isFilled.richText(slice.primary.title);
  const hasSubtitle = isFilled.richText(slice.primary.subtitle);
  const hasSectionTitle = hasTitle || hasSubtitle;

  return (
    <div
      className={clsx(
        TopBottomGaps(slice),
        hasBackgroundColor ? "bg-secondary-light" : "bg-primary-white",
        "w-full relative z-10",
      )}
    >
      <StyledContainer
        slice={slice}
        className={
          hasBackgroundColor ? "bg-secondary-light" : "bg-primary-white"
        }
      >
        {/* Header section */}
        {hasSectionTitle && (
          <StyledSectionTitle
            slice={slice}
            isHero={false}
            wrapperClassName="max-w-[880px] mx-auto mb-[28px] md:mb-[32px] lg:mb-[40px] mx-[4px] "
          />
        )}

        <div
          className={clsx(
            "relative w-full overflow-visible lg:mb-[54px]",
            isRightAligned ? "flex justify-start" : "flex justify-end",
          )}
        >
          {/* 1. Main Image */}
          <div
            className={clsx(
              "hidden lg:block relative z-0 w-full max-w-[794px] aspect-[794/638]",
              isRightAligned ? "ml-auto" : "mr-auto",
            )}
          >
            <PrismicNextImage
              field={slice.primary.path_image}
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* 2. Floating Card */}
          <div
            className={clsx(
              "relative z-10 w-full md:max-w-[640px] mx-auto lg:mx-0",
              "lg:absolute lg:bottom-[-54px]",
              "bg-secondary-light shadow-sm",
              "pt-[24px] px-[24px] pb-[40px]",
              "md:px-[67px] md:py-[80px]",
              isRightAligned ? "lg:left-0" : "lg:right-0",
            )}
          >
            {/* Number Image */}
            <div className="absolute bottom-[12px] right-[12px] md:bottom-[24px] md:right-[40px] pointer-events-none select-none">
              <div className="relative w-[87px] md:w-[144px] aspect-[144/104]">
                <PrismicNextImage
                  field={slice.primary.number_image}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="relative z-20">
              <PrismicRichText
                field={slice.primary.path_name}
                components={{
                  paragraph: ({ children }) => (
                    <h3 className="text-title-x-large title-font font-medium text-text-heading mb-[10px]">
                      {children}
                    </h3>
                  ),
                }}
              />

              <div className="text-body-medium body-font text-text-base font-normal mb-[16px] max-w-[486px]">
                <PrismicRichText field={slice.primary.path_description} />
              </div>

              <ul className="space-y-[8px] mb-[24px]">
                {slice.primary.list?.map((item, index) => (
                  <li key={index} className="flex items-start gap-[10px]">
                    {item.icon && (
                      <div className="w-[11px] h-[11px] flex-shrink-0 mt-[10px]">
                        <PrismicNextImage
                          field={item.icon}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="text-body-medium body-font text-text-base">
                      <PrismicRichText field={item.icon_name} />
                    </div>
                  </li>
                ))}
              </ul>

              {slice.primary.button_link && (
                <StyledButton
                  link={slice.primary.button_link}
                  variant="primary"
                  className="!h-[52px] !w-[220px] flex items-center justify-center text-center"
                >
                  {slice.primary.button_name}
                </StyledButton>
              )}
            </div>
          </div>
        </div>
      </StyledContainer>
    </div>
  );
}
