import clsx from "clsx";

export function sliceGaps(slice) {
  const top = slice?.primary?.top_gap === true;
  const bottom = slice?.primary?.bottom_gap === true;

  return clsx(
    top && "mt-[28px] md:mt-[48px] lg:mt-[40px]",
    bottom && "mb-[28px] md:mb-[48px] lg:mb-[40px]",
  );
}
