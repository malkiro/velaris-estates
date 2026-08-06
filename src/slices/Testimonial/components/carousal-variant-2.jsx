"use client";
import { MdStar, MdStarBorder } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const CarousalVariant2 = ({ reviews = [] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <>
      <div className="embla testimonial-v2-embla" ref={emblaRef}>
        <div className="embla__container">
          {reviews?.map(
            ({ author_name, profile_photo_url, rating, text }, idx) => (
              <div
                className="embla__slide border border-[#D9D9D9] bg-white rounded-[10px] p-[24px] md:max-w-[334px] xl:max-w-[410px]"
                key={idx}
              >
                <div className="flex flex-row items-stretch justify-between mb-[12px]">
                  <img
                    src={profile_photo_url}
                    alt={author_name}
                    width={400}
                    height={400}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < rating ? (
                        <MdStar key={i} className="w-6 h-6" />
                      ) : (
                        <MdStarBorder key={i} className="w-6 h-6" />
                      ),
                    )}
                  </div>
                </div>
                <div className="title-font text-title-base font-semibold">
                  {author_name}
                </div>
                <div className="text-text-base mt-[12px]">{text}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default CarousalVariant2;
