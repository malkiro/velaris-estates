import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";
import Accordion from "../components/Accordion";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";

const Default = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="xl:flex xl:gap-10">
        <div className="mb-7 md:mb-8 xl:mb-0 xl:flex-none xl:w-[39.0625%] xl:h-full">
          <div className="text-center mb-7.5 max-w-220 mx-auto xl:text-left">
            <StyledPrismicRichTextSingle
              field={slice.primary?.subtitle}
              className="title-font text-title-base text-text-base tracking-[0.0125em] mb-1.5 md:mb-3"
            />
            <StyledPrismicRichTextSingle
              field={slice.primary?.title}
              className="title-font text-title-2x-large -tracking-tight text-text-heading"
            />
            <StyledPrismicRichText
              field={slice.primary?.description}
              className="text-body-medium text-text-base mt-3 md:mt-4"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-3.25 xl:justify-start">
            {slice.primary?.buttons.map((button) => (
              <StyledButton
                key={button.link.key}
                link={button.link}
                variant={button.variant}
                className="w-full! max-w-55 text-base! md:text-lg! justify-center"
              />
            ))}
          </div>
        </div>
        <Accordion faqs={slice.primary?.faqs} />
      </div>
    </StyledContainer>
  );
};

export default Default;
