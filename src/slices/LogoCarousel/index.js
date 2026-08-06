"use client";

import { useMemo } from "react";
import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import AutoScroll from "embla-carousel-auto-scroll";
import EmblaCarousel from "./components/EmblaCarousel";

/**
 * @typedef {import("@prismicio/client").Content.BrandsSlice} BrandsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrandsSlice>} BrandsProps
 */
const LogoCarousel = ({ slice }) => {
  const logos = slice.primary.logos || [];

  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);
  // If no logos, don't render the container at all
  if (logos.length === 0) return null;

  return (
    <StyledContainer
      slice={slice}
      parentClass="flex flex-col gap-[28px] sm:gap-[32px] lg:gap-[40px]"
    >
      {/* Title */}
      <StyledPrismicRichTextSingle
        field={slice.primary.title}
        className="text-title-base title-font text-text-base text-center font-medium"
      />

      <EmblaCarousel
        options={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 0.3,
            startOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        {duplicatedLogos.map((item, index) => (
          <PrismicNextLink
            key={`${index}-${item.logo_icon?.url}`}
            field={item.logo_link}
            aria-label={item.logo_icon?.alt || "Partner Logo"}
            className="flex-shrink-0 mr-[12px] md:mr-[22px] lg:mr-[68px]"
          >
            <PrismicNextImage
              field={item.logo_icon}
              fallbackAlt=""
              priority={slice.primary.is_priority && index < 3}
              className="w-[99.5px] h-[49.3px] md:w-[154.7px] md:h-[76.7px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </PrismicNextLink>
        ))}
      </EmblaCarousel>
    </StyledContainer>
  );
};

export default LogoCarousel;
