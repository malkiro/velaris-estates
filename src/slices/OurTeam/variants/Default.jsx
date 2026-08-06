"use client";

import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledContainer from "@/components/StyledContainer";
import useCarousel from "../hook/useCarousel";
import { FiArrowRight as ArrowForward, FiArrowLeft as ArrowBack } from "react-icons/fi";
import clsx from "clsx";

const TeamCarousel = ({ slice }) => {
  const teamMembers = slice?.primary?.team || [];

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarousel({ align: "start", containScroll: "trimSnaps" });

  return (
    <StyledContainer slice={slice}>
      <div className="relative">
        <div className="common-space [&_p]:!font-normal">
          <StyledSectionTitle slice={slice} isHero={false} />
        </div>

        {/* Carousel Wrapper */}
        <div className="flex items-center justify-center gap-[20px]">
          {/* Left Button */}
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
            className={clsx(
              "shrink-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full border border-slate-300 flex items-center justify-center transition-all bg-white cursor-pointer",
              "disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50",
            )}
          >
            <ArrowBack
              aria-hidden="true"
              className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]"
            />
          </button>

          {/* Embla Viewport */}
          <div
            className="overflow-hidden"
            ref={emblaRef}
            style={{
              maxWidth: "calc((360px * 3) + (20px * 2))",
            }}
          >
            <div className="flex gap-[20px]">
              {teamMembers.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "shrink-0 min-w-0",
                    "w-[223px]",
                    "md:w-[254px]",
                    "lg:w-[360px]",
                  )}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-[223px] md:max-w-[254px] lg:max-w-[360px] mb-[12px] md:mb-[31px]">
                      <PrismicNextImage
                        field={item.member_image}
                        fallbackAlt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta Data */}
                    <div className="text-[#1F2223] title-font text-title-large font-medium mb-[6px]">
                      <StyledPrismicRichText field={item.member_name} />
                    </div>
                    <div className="text-text-base body-font text-title-base">
                      <StyledPrismicRichText field={item.member_designation} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
            className={clsx(
              "shrink-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full bg-primary-dark text-white flex items-center justify-center transition-all cursor-pointer",
              "disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-90",
            )}
          >
            <ArrowForward
              aria-hidden="true"
              className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]"
            />
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default TeamCarousel;
