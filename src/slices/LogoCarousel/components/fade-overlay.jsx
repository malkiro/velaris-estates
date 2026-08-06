import clsx from "clsx";

const FadeOverlay = ({ enabled }) => {
  if (!enabled) return null;
  return (
    <>
      <Overlay className={"bg-linear-to-r left-[-2px]"} />
      <Overlay className={"bg-linear-to-l right-[-2px]"} />
      {/*<span*/}
      {/*  className={*/}
      {/*    "bg-linear-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] h-[calc(100%+4px)] absolute top-[-2-px] left-[-2px] w-[100px] select-none pointer-events-none z-2"*/}
      {/*  }*/}
      {/*/>*/}
      {/*<span*/}
      {/*  className={*/}
      {/*    "bg-linear-to-l from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] h-[calc(100%+4px)] absolute top-[-2px] right-[-2px] w-[100px] z-10"*/}
      {/*  }*/}
      {/*/>*/}
    </>
  );
};

export default FadeOverlay;

const Overlay = ({ className = "" }) => {
  return (
    <span
      className={clsx({
        "from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] h-[calc(100%+4px)] absolute top-[-2-px] w-[50px] md:w-[100px] lg:w-[150px] select-none pointer-events-none z-2": true,
        [className]: true,
      })}
    />
  );
};
