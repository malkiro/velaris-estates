const ScrollButtons = ({
  onClick,
  disabled,
  children,
  ariaLabel,
  variant = null,
}) => {
  const variantStyle =
    variant === 2
      ? "bg-primary-dark hover:bg-secondary-dark text-text-light disabled:inset-ring-text-description disabled:text-text-heading"
      : "bg-primary-white hover:bg-primary-offwhite text-primary-dark disabled:inset-ring-primary-white disabled:text-primary-white";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-[10.815px] md:p-[16.22px]
        rounded-full
        cursor-pointer
        disabled:inset-ring
        disabled:bg-transparent
        disabled:cursor-auto
        transition-colors
        duration-300
        ${variantStyle}
      `}
      aria-label={ariaLabel}
    >
      <div className="[--s:18.38px] w-(--s) h-(--s) md:[--s:27.57px]">
        {children}
      </div>
    </button>
  );
};

export default ScrollButtons;
