import StyledButton from "@/components/StyledButton";

const ButtonContainer = ({ slice, contentCenter = false }) => {
  return (
    <div
      className={`flex flex-wrap gap-[13px]   ${contentCenter ? "justify-center xl:justify-center" : "justify-center xl:justify-start"}`}
    >
      {slice.primary.buttons.map(
        ({ link, icon_name, icon_alignment, variant }, idx) => (
          <StyledButton
            key={idx}
            link={link}
            label={link?.text || "Button"}
            icon={icon_name}
            iconAlignment={icon_alignment}
            variant={variant?.toLowerCase()}
            className={`w-full md:min-w-[220px] min-w-[343px] w-full justify-center ${
              variant?.toLowerCase() === "secondary" ? "text-primary-dark border-primary-dark border" : ""
            }`}
          />
        ),
      )}
    </div>
  );
};

export default ButtonContainer;
