"use client";

import ProjectCard from "../components/ProjectCard";
import useCarousel from "../hook/useCarousel";

export default function ProjectCarousel({ projects }) {
  const { emblaRef, scrollSnaps, selectedIndex, onDotButtonClick } =
    useCarousel();

  return (
    <div className="relative">
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden px-[16px] md:px-[40px] xl:px-[80px]"
      >
        <div className="flex gap-4 md:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shrink-0 w-[324px] md:w-[369px] xl:min-w-[369px] xl:w-[calc((100%-40px)/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-[6px] mt-7 md:mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-9 bg-secondary-light-2"
                  : "w-3 bg-primary-dark"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
