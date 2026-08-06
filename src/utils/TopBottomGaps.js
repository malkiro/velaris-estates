import clsx from "clsx";

export function TopBottomGaps(slice) {
  const top = slice?.primary?.top_gap === true;
  const bottom = slice?.primary?.bottom_gap === true;

  return clsx(
    top && "!pt-[28px] md:!pt-[32px] lg:!pt-[40px]",
    bottom && "!pb-[28px] md:!pb-[32px] lg:!pb-[40px]",
  );
}
