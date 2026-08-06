"use client";

import { createPortal } from "react-dom";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import clsx from "clsx";
import ReviewCard from "./ReviewCard";
import "./embla.scss";
import dynamicImport from "next/dynamic";

const ReviewDetailsModal = dynamicImport(() => import("./ReviewDetailsModal"));

const options = { align: "start", loop: true };

const ReviewsCarousel = ({ reviews = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [review, setReview] = useState(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      {!!review &&
        typeof document !== "undefined" &&
        createPortal(
          <ReviewDetailsModal close={() => setReview(null)} review={review} />,
          document.body,
        )}
      <section className="embla-google-reviews pt-5 relative z-[1]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((item, index) => {
              return (
                <div className="embla__slide flex" key={index}>
                  <div className="w-full bg-[#f6f6f8] rounded-[8px] p-6">
                    <ReviewCard item={item} setReview={() => setReview(item)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {scrollSnaps?.length > 1 && (
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                aria-label={"Previous Reviews"}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                aria-label={"Next Reviews"}
              />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={clsx({
                    embla__dot: true,
                    "embla-dot-active embla-dot__1":
                      index === selectedIndex - 2,
                    "embla-dot-active embla-dot__2":
                      index === selectedIndex - 1,
                    "embla-dot-active embla-dot__3": index === selectedIndex,
                    "embla-dot-active embla-dot__4":
                      index === selectedIndex + 1,
                    "embla-dot-active embla-dot__5":
                      index === selectedIndex + 2,
                  })}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ReviewsCarousel;
