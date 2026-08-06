"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";

const CarousalDefault = ({ slice }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => {
        emblaApi.scrollNext();
      };

      const interval = setInterval(autoplay, 2500);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div
      ref={emblaRef}
      className="flex items-center justify-center w-full h-full overflow-hidden"
    >
      <div className="flex embla__container ">
        {slice?.primary?.testimonials?.map((item, index) => (
          <div
            key={index}
            className="embla__slide w-full mr-[28px] lex flex-col items-start bg-[#F8F8F8] max-w-[354px] px-[26px] py-[20px] md:py-[30px]  min-w-[calc(50%-10px)] lg:min-w-[calc(33.33%-12px)]"
          >
            <CardContent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarousalDefault;

const CardContent = ({ item }) => {
  return (
    <>
      <PrismicNextImage
        fallbackAlt=""
        field={item.image}
        className="max-w-[47px] max-h-[33px] mb-[30px] "
      />
      <StyledPrismicRichText field={item.description} />
      <div className="flex flex-col">
        <div className="text-body-large mb-[10px]">
          <StyledPrismicRichTextSingle field={item.name} />
        </div>
        <StyledPrismicRichText field={item.designation} />
      </div>
    </>
  );
};
