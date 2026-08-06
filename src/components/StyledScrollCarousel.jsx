"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function StyledScrollCarousel({ children, max_width }) {
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDraggingContainer, setIsDraggingContainer] = useState(false);
  const [thumbLeft, setThumbLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the thumb width based on container's width
      const container = containerRef.current;
      const thumb = thumbRef.current;
      const containerWidth = container.clientWidth;
      const contentWidth = container.scrollWidth;
      thumb.style.width = `${(containerWidth / contentWidth) * 100}%`;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setThumbLeft(thumbRef.current.offsetLeft);
  };

  const startDraggingContainer = (e) => {
    setIsDraggingContainer(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setThumbLeft(thumbRef.current.offsetLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
    setIsDraggingContainer(false);
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;

    const thumbWidth = thumb.clientWidth;
    const trackWidth = track.clientWidth;

    if (isDragging) {
      e.preventDefault();
      const maxLeft = trackWidth - thumbWidth;

      let newLeft = thumbLeft + (e.pageX - startX);
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      const scrollPercentage = newLeft / maxLeft;
      thumb.style.left = `${newLeft}px`;
      container.scrollLeft =
        scrollPercentage * (container.scrollWidth - container.clientWidth);
    }

    if (isDraggingContainer) {
      e.preventDefault();
      const walk = (e.pageX - startX) * 1; // Adjust the multiplier to control the scroll speed

      const percentage =
        container.scrollLeft / (container.scrollWidth - container.clientWidth);

      thumb.style.left = `${(trackWidth - thumbWidth) * percentage}px`;

      container.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    if (isDragging || isDraggingContainer) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging, isDraggingContainer]);

  return (
    <div className={`${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
      <div
        ref={containerRef}
        onMouseDown={startDraggingContainer}
        className={clsx({
          "hide-scrollbar flex gap-[28px] flex-nowrap overflow-x-auto pb-[20px]": true,
          "select-none": true,
          "cursor-grabbing": isDraggingContainer,
        })}
      >
        {children}
      </div>

      <div className={`w-full px-[16px] md:px-[40px] my-[20px] ${max_width}`}>
        <div
          ref={trackRef}
          className="h-[6px] relative bg-[#DADAF6] w-full rounded-[6px]"
        >
          <div
            ref={thumbRef}
            onMouseDown={startDragging}
            className={clsx({
              "h-[10px] absolute left-0 rounded-[6px] cursor-grab": true,
              "top-[50%] -translate-y-[50%]": true,
              "bg-primary-light hover:bg-primary-light": true,
              "cursor-grabbing": isDragging,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
}
