"use client";

import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import useCarousel from "../hook/useCarousel";
import { FiArrowRight as ArrowForward, FiArrowLeft as ArrowBack } from "react-icons/fi";
import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledSectionTitle from "@/components/StyledSectionTitle";

const TestimonialWithImage = ({ slice }) => {
  const { testimonials } = slice.primary;

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarousel();

  const hasBg = slice?.primary.with_background_color;

  return (
    <StyledContainer slice={slice}>
      <div className="mb-7 md:mb-8 lg:mb-10 flex justify-center lg:justify-between">
        <StyledSectionTitle slice={slice} isHero={false} contentLeft={true} />
        {/* Arrow Navigation */}
        <div className="hidden lg:block">
          <div className="flex gap-5 md:gap-[32px] z-10">
            <button
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              aria-label="Previous testimonial"
              className="w-15 h-15 rounded-full border border-slate-300
              flex items-center justify-center
              disabled:opacity-30 disabled:cursor-default cursor-pointer
              hover:bg-slate-50 transition-colors"
            >
              <ArrowBack className="w-8 h-8" />
            </button>

            <button
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              aria-label="Next testimonial"
              className="w-15 h-15 rounded-full bg-primary-dark text-white
              flex items-center justify-center
              disabled:opacity-30 disabled:cursor-default cursor-pointer
              hover:bg-opacity-90 transition-colors"
            >
              <ArrowForward className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Viewport — pointer events disabled */}
        <div ref={emblaRef} className="overflow-hidden pointer-events-none">
          <div className="flex">
            {testimonials.map((item, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <div
                  key={index}
                  className="flex items-stretch h-full lg:h-[638px] w-full"
                >
                  <div className="h-full w-full lg:w-[calc(100%-55.139vw)] relative flex items-center">
                    <div
                      className={`${hasBg ? "bg-white" : "bg-secondary-light"} lg:min-w-[568px] lg:w-[44.445vw] lg:h-[545px] lg:absolute rounded-[12px] px-[16px] md:px-[67px] py-[40px] md:py-[80px] xl:py-[87px] max-w-[688px] mx-auto lg:max-w-none h-full`}
                    >
                      <blockquote className="space-y-4">
                        <div className="text-title-x-large text-center md:text-left title-font text-text-heading font-medium xl:pr-[49px]">
                          <StyledPrismicRichText field={item.quote_text} />
                        </div>

                        <div className="text-text-base text-body-medium text-center md:text-left text-center md:text-left">
                          <StyledPrismicRichText field={item.description} />
                        </div>

                        <div className="flex md:flex-row flex-col items-center gap-4 justify-center md:justify-start">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <PrismicNextImage
                              field={item.profile_image}
                              fallbackAlt=""
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="text-body-medium text-text-heading md:min-w-[125px]">
                              <StyledPrismicRichText field={item.name} />
                            </div>
                            <div className="bg-[#0E0E0E33] w-[28px] h-[1px] mx-3"></div>
                            <div className="text-body-medium text-text-heading">
                              <StyledPrismicRichText field={item.designation} />
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  <div className="h-full xl:w-[55.139vw] mr-0 rounded-[16px] overflow-hidden hidden lg:flex">
                    <PrismicNextImage
                      field={item.image}
                      fallbackAlt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative lg:hidden mt-[28px] md:mt-[32px]">
        {/* Arrow Navigation */}
        <div className="flex justify-center gap-5 md:gap-[32px] z-10">
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous testimonial"
            className="w-10 h-10 md:w-15 md:h-15 rounded-full border border-slate-300
              flex items-center justify-center
              disabled:opacity-30 disabled:cursor-default cursor-pointer
              hover:bg-slate-50 transition-colors"
          >
            <ArrowBack className="w-6 h-6" />
          </button>

          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next testimonial"
            className="w-10 h-10 md:w-15 md:h-15 rounded-full bg-primary-dark text-white
              flex items-center justify-center
              disabled:opacity-30 disabled:cursor-default cursor-pointer
              hover:bg-opacity-90 transition-colors"
          >
            <ArrowForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default TestimonialWithImage;
