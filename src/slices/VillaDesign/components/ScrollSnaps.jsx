import clsx from "clsx";

const ScrollSnaps = ({ buttons, onClick, selectedButton }) => {
  return (
    <>
      {buttons.map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className="min-w-[24px] min-h-[24px] flex items-center justify-center cursor-pointer touch-manipulation"
          aria-label={`${index + 1} slide`}
        >
          <span
            className={clsx(
              "h-[9.42px] rounded-full transition-[width] duration-300 xl:h-3",
              index === selectedButton
                ? "w-[28.26px] bg-secondary-light-2 xl:w-9"
                : "w-[9.42px] bg-primary-white xl:w-3",
            )}
          ></span>
        </button>
      ))}
    </>
  );
};

export default ScrollSnaps;
