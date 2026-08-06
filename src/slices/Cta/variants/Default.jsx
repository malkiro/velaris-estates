import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";
import clsx from "clsx";

const Default = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div
        className={clsx(
          "rounded-xl p-8 md:p-15 xl:px-25 xl:py-21 max-w-270 mx-auto",
          slice.primary?.with_background_color
            ? "bg-primary-white"
            : "bg-secondary-light"
        )}
      >
        <div className="text-center mb-6 max-w-220 mx-auto">
          <StyledPrismicRichTextSingle
            field={slice.primary?.title}
            className="title-font text-title-2x-large -tracking-tight mb-2 text-text-secondary"
          />
          <StyledPrismicRichTextSingle
            field={slice.primary?.description}
            className="text-body-medium text-text-base"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-3.25">
          {slice.primary?.buttons.map((button) => (
            <StyledButton
              key={button.link.key}
              link={button.link}
              variant={button.variant}
              className="w-full! max-w-85.75 md:max-w-55 text-base! md:text-lg! justify-center"
            />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Default;
