"use client";

import useCarousel from "../hook/useCarousel";
import ImageCarousel from "./ImageCarousel";
import { PrismicNextImage } from "@prismicio/next";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import ScrollButtons from "./ScrollButtons";
import { FiArrowRight as ArrowForward, FiArrowLeft as ArrowBack } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const VillaTypeCarousel = ({ items, slice }) => {
  const [currentSlide, setCurrentSide] = useState(1);

  const autoPlay = false;
  const drag = false;
  const fade = true;

  const carouselA = useCarousel(autoPlay, drag, fade);
  const carouselB = useCarousel(autoPlay, drag, fade);

  const villaImageCollections = items.map((item) => item.image_collection);

  const handleNextSlide = () => {
    carouselA.onNextButtonClick();
    carouselB.onNextButtonClick();
    setCurrentSide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    carouselA.onPrevButtonClick();
    carouselB.onPrevButtonClick();
    setCurrentSide((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-y-7 md:gap-y-8 xl:flex-row xl:gap-6 xl:items-center">
      <div className="max-w-135 mx-auto xl:w-[57.657%] xl:max-w-none">
        <div
          ref={carouselA.emblaRef}
          className="overflow-hidden rounded-md md:rounded-lg xl:rounded-xl"
        >
          <div className="flex">
            {villaImageCollections.map((collection, index) => (
              <ImageCarousel
                key={index}
                items={collection}
                resetCarousel={index + 1 === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-220 mx-auto xl:-order-1 xl:w-[40.469%]">
        <div className="hidden xl:block xl:mb-15.5">
          <SectionTitle
            subtitle={slice.primary?.subtitle}
            title={slice.primary?.title}
            description={slice.primary?.description}
          />
        </div>
        <div ref={carouselB.emblaRef} className="overflow-hidden">
          <div className="flex">
            {items.map((villaType, index) => (
              <div key={index} className="flex-none w-full">
                <div className="text-center mb-7.5 xl:text-left xl:max-w-113">
                  <StyledPrismicRichTextSingle
                    field={villaType.title}
                    className="title-font text-title-large font-medium text-text-heading"
                  />
                  <StyledPrismicRichText
                    field={villaType.description}
                    className="text-body-medium text-text-base mt-4 xl:max-w-104.25"
                  />
                </div>
                <ul className="flex flex-wrap justify-center gap-y-5.5 gap-x-7.25 xl:justify-start xl:max-w-113">
                  {villaType.feature_list.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                      <PrismicNextImage
                        field={feature.icon}
                        fallbackAlt=""
                        quality={60}
                        className="w-6 h-6"
                      />
                      <StyledPrismicRichTextSingle
                        field={feature.name}
                        className="text-body-base font-normal text-text-secondary"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-x-5 justify-center pt-7 mt-7 shadow-[0_-1px_0_0_var(--color-text-description)] md:gap-x-6 md:pt-8 md:mt-8 xl:max-w-113 xl:justify-start xl:pt-7.5 xl:mt-7.5">
          <ScrollButtons
            onClick={handlePrevSlide}
            disabled={carouselA.prevBtnDisabled && carouselB.prevBtnDisabled}
            ariaLabel="previous type"
            variant={2}
          >
            <ArrowBack className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]" />
          </ScrollButtons>
          <ScrollButtons
            onClick={handleNextSlide}
            disabled={carouselA.nextBtnDisabled && carouselB.nextBtnDisabled}
            ariaLabel="next type"
            variant={2}
          >
            <ArrowForward className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]" />
          </ScrollButtons>
        </div>
      </div>
    </div>
  );
};

export default VillaTypeCarousel;
