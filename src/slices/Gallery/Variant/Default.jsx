"use client";

import { useState } from "react";
import StyledContainer from "@/components/StyledContainer";
import { PrismicNextImage } from "@prismicio/next";
import { sliceGaps } from "@/utils/sliceGaps";

export default function Main({ slice }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryItems = slice.primary.gallery || [];

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1,
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-wrap justify-center gap-[9.97px] md:gap-[20px]">
        {galleryItems.map((item, index) => {
          const isLCP = index === 0; // adjust if a different tile is actually LCP
          return (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`
                relative overflow-hidden cursor-pointer group aspect-square shadow-sm !rounded-none
                flex-[0_0_calc(50%-5px)]
                md:flex-[0_0_calc(50%-10px)]
                lg:flex-[0_0_calc(33.333%-13.34px)]
              `}
            >
              <PrismicNextImage
                field={item.image}
                fallbackAlt=""
                fill
                priority={isLCP}
                loading={isLCP ? "eager" : "lazy"}
                fetchPriority={isLCP ? "high" : "auto"}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110 !rounded-none"
                style={{ borderRadius: "0px" }}
                imgixParams={{ q: 60, auto: "format,compress" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          );
        })}
      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-5xl hover:text-[#CBA135] z-[110]"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-6xl hover:text-[#CBA135] z-[110]"
          >
            &#8249;
          </button>

          <div
            className="w-full h-full flex items-center justify-center p-8 md:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <PrismicNextImage
              field={galleryItems[lightboxIndex].image}
              className="max-h-full max-w-full object-contain shadow-2xl"
              fallbackAlt=""
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-6xl hover:text-[#CBA135] z-[110]"
          >
            &#8250;
          </button>
        </div>
      )}
    </StyledContainer>
  );
}
