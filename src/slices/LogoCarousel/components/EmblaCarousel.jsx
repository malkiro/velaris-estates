"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * @param {Object} props
 * @param {React.ReactNode[]} props.children
 * @param {Object} props.options
 * @param {Array} props.plugins
 */
const EmblaCarousel = ({ children, options = {}, plugins = [] }) => {
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-center">{children}</div>
    </div>
  );
};
export default EmblaCarousel;
