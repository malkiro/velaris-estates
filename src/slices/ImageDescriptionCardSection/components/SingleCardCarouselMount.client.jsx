"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SingleCardCarousel = dynamic(
  () => import("./SingleCardCarousel.client"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function SingleCardCarouselMount({ images }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(() => setReady(true))
        : window.setTimeout(() => setReady(true), 800);

    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  return ready ? <SingleCardCarousel images={images} /> : null;
}
