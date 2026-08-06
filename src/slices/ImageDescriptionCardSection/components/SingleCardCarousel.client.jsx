"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

export default function SingleCardCarousel({ images }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="overflow-hidden absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] overflow-hidden cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <PrismicNextImage
                field={item.image}
                alt=""
                loading="lazy"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 738px"
                imgixParams={{
                  auto: ["format", "compress"],
                  fm: "webp",
                  q: 55,
                  fit: "max",
                  w: 900,
                }}
                className="w-full object-cover h-[299.7px] md:h-[601px] lg:h-[645px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-[28.5px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => embla?.scrollTo(i)}
            className={clsx(
              "rounded-full cursor-pointer",
              i === selectedIndex
                ? "w-[36px] h-[12px] bg-[#CBA135]"
                : "w-[12px] h-[12px] bg-white",
            )}
          />
        ))}
      </div>

      {/* Lightbox (client only) */}
      {lightboxIndex !== null && (
        <div
          className="fixed z-[100] bg-black/95 flex items-center justify-center inset-0"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white text-[32px] md:text-[40px] z-[110] p-2"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 text-white text-[40px] md:text-[60px] z-[110] p-2"
          >
            &#8249;
          </button>

          <div
            className="w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <PrismicNextImage
              field={images[lightboxIndex].image}
              alt=""
              sizes="100vw"
              imgixParams={{ fm: "webp", q: 70, fit: "max", w: 2400 }}
              className="max-h-full max-w-full object-contain shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 text-white text-[40px] md:text-[60px] z-[110] p-2"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
