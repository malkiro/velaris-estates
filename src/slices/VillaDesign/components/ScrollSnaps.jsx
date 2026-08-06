import clsx from "clsx";

const ScrollSnaps = ({ buttons, onClick, selectedButton }) => {
  return (
    <>
      {buttons.map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={clsx(
            "relative after:content-[''] after:absolute after:-inset-5",
            "h-[9.42px] rounded-full transition-[width] duration-300 xl:h-3",
            index === selectedButton
              ? "w-[28.26px] bg-secondary-light-2 xl:w-9"
              : "w-[9.42px] bg-primary-white cursor-pointer xl:w-3",
          )}
          aria-label={`${index + 1} slide`}
        ></button>
      ))}
    </>
  );
};

export default ScrollSnaps;
