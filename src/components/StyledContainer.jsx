import clsx from "clsx";

const StyledContainer = ({
  as: Comp = "div",
  className = "",
  children,
  slice = {},
  paddingX = true,
  parentClass = "",
}) => {
  const paddingXStyles = "px-[16px] md:px-[40px] xl:px-[80px]";

  const pt = slice.primary?.top_padding || "None";
  const pb = slice.primary?.bottom_padding || "None";
  return (
    <Comp
      className={clsx({
        "bg-secondary-light": slice?.primary?.with_background_color,
        "bg-primary-white": !slice?.primary?.with_background_color,
        [paddingXStyles]: paddingX,
        "pt-0": pt === "None",
        "pb-0": pb === "None",
        "pt-[30px] md:pt-[40px] xl:pt-[60px]": pt === "Half",
        "pb-[30px] md:pb-[40px] xl:pb-[60px]": pb === "Half",
        "pt-[60px] md:pt-[80px] xl:pt-[120px]": pt === "Full",
        "pb-[60px] md:pb-[80px] xl:pb-[120px]": pb === "Full",
        [className]: true,
      })}
    >
      <div
        className={clsx({
          "mx-auto w-full max-w-[1280px]": true,
          [parentClass]: true,
        })}
      >
        {children}
      </div>
    </Comp>
  );
};

export default StyledContainer;
