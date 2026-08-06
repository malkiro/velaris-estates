import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import { PrismicNextImage } from "@prismicio/next";
import ImageCarousel from "../components/ImageCarousel";
import clsx from "clsx";
import SectionTitle from "../components/SectionTitle";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";

const Variant_2 = ({ slice }) => {
  const isBackgroundColor = slice.primary.with_background_color;

  return (
    <StyledContainer slice={slice} className="relative isolate">
      <div className="text-center mb-7 md:mb-8 max-w-220 mx-auto xl:hidden">
        <SectionTitle
          subtitle={slice.primary?.subtitle}
          title={slice.primary?.title}
          description={slice.primary?.description}
        />
      </div>
      <div className="flex flex-col gap-y-7 md:gap-y-8 xl:flex-row xl:gap-6 xl:items-center">
        <div className="max-w-135 mx-auto xl:w-[57.657%] xl:max-w-none">
          <ImageCarousel
            items={slice.primary?.villa_types}
            variant="lightbox"
          />
        </div>
        <div className="max-w-220 mx-auto xl:-order-1 xl:w-[40.469%]">
          <div className="hidden xl:block xl:mb-10">
            <SectionTitle
              subtitle={slice.primary?.subtitle}
              title={slice.primary?.title}
              description={slice.primary?.description}
            />
          </div>
          <div className="text-center mb-7.5 xl:text-left xl:max-w-113">
            <StyledPrismicRichTextSingle
              field={slice.primary?.about_title}
              className="title-font text-title-large font-medium text-text-heading"
            />
            <StyledPrismicRichText
              field={slice.primary?.about_description}
              className="text-body-medium text-text-base mt-4 xl:max-w-104.25"
            />
          </div>
          <div className="mb-7 md:mb-8 xl:mb-7.5 xl:max-w-113">
            <StyledPrismicRichTextSingle
              field={slice.primary?.feature_title}
              className="title-font text-title-medium font-medium text-text-heading mb-4 text-center xl:mb-6 xl:text-left"
            />
            <ul className="flex flex-wrap justify-center gap-y-5.5 gap-x-7.25 xl:justify-start">
              {slice.primary?.feature_list.map((item, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <PrismicNextImage
                    field={item.icon}
                    fallbackAlt=""
                    className="w-6 h-6"
                  />
                  <StyledPrismicRichTextSingle
                    field={item.name}
                    className="text-body-base font-normal text-text-secondary"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-3.25 xl:justify-start">
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
      </div>
      <div
        className={clsx(
          "absolute hidden xl:block top-0 bottom-0 right-0 -z-1 w-[52.917%]",
          isBackgroundColor ? "bg-primary-white" : "bg-secondary-light",
        )}
        aria-hidden
      ></div>
    </StyledContainer>
  );
};

export default Variant_2;
