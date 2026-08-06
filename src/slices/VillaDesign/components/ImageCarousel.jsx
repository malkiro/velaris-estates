"use client";

import dynamic from "next/dynamic";
import { PrismicNextImage } from "@prismicio/next";
import useCarousel from "../hook/useCarousel";
import { FiArrowRight as ArrowForward, FiArrowLeft as ArrowBack } from "react-icons/fi";
import { asText } from "@prismicio/client";
import clsx from "clsx";
import ScrollSnaps from "./ScrollSnaps";
import ScrollButtons from "./ScrollButtons";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

const LightBox = dynamic(() => import("./LightBox"), {
  ssr: false,
});

const ImageCarousel = ({ items, variant = null, resetCarousel = false }) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const isLightBox = variant === "lightbox";
  const [lightBox, toggleLightBox] = useState(false);
  const autoPlay = !lightBox && isInView;

  const {
    emblaApi,
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onButtonClick,
  } = useCarousel(autoPlay);

  useEffect(() => {
    if (!resetCarousel || !emblaApi) return;

    emblaApi.scrollTo(0, true);
  }, [resetCarousel, emblaApi]);

  useEffect(() => {
    document.body.style.overflow = isLightBox && lightBox ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightBox]);

  useEffect(() => {
    if (!lightBox) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleLightBox(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightBox]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={(node) => {
          emblaRef(node);
          containerRef.current = node;
        }}
        className="overflow-hidden relative rounded-md md:rounded-lg xl:rounded-xl w-full flex-none"
      >
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-full overflow-hidden first:rounded-l-md md:first:rounded-l-lg xl:first:rounded-l-xl last:rounded-r-md md:last:rounded-r-lg xl:last:rounded-r-xl"
            >
              <PrismicNextImage
                field={item.image}
                fallbackAlt=""
                width="auto"
                height="auto"
                className={clsx(
                  "h-full w-full object-cover cursor-grab aspect-343/300 md:aspect-540/472 2xl:h-161.25",
                  isLightBox &&
                    "transition-transform hover:scale-110 cursor-pointer",
                )}
                loading="lazy"
                onClick={isLightBox ? () => toggleLightBox(true) : undefined}
              />
            </div>
          ))}
        </div>
        {isLightBox ? (
          <div className="absolute bottom-5.25 left-3.75 right-3.75 flex items-center justify-between xl:left-10 xl:right-10 xl:bottom-[30.5px] pointer-events-none">
            <div className="title-font text-text-light text-title-medium font-medium">
              {asText(items[selectedIndex]?.name)}
            </div>
            <div className="flex gap-x-5 pointer-events-auto md:gap-x-6">
              <ScrollButtons
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                ariaLabel="previous image"
              >
                <ArrowBack className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]" />
              </ScrollButtons>
              <ScrollButtons
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                ariaLabel="next image"
              >
                <ArrowForward className="w-[18.38px] h-[18.38px] md:w-[27.57px] md:h-[27.57px]" />
              </ScrollButtons>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-6 left-0 right-0 flex gap-x-[4.71px] justify-center xl:gap-x-1.5">
            <ScrollSnaps
              buttons={scrollSnaps}
              onClick={onButtonClick}
              selectedButton={selectedIndex}
            />
          </div>
        )}
      </div>
      {isLightBox && lightBox && (
        <Modal>
          <LightBox
            items={items}
            selectedImage={selectedIndex}
            onClick={() => toggleLightBox(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default ImageCarousel;
