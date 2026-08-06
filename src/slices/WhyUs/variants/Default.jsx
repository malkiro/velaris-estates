import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { Fragment } from "react";
import clsx from "clsx";

const Default = ({ slice }) => {
  const isBackgroundColor = slice.primary.with_background_color;

  return (
    <StyledContainer slice={slice}>
      <div className="text-center max-w-220 mx-auto mb-7 md:mb-8 xl:mb-10">
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
      <div className="xl:flex">
        <ul
          className={clsx(
            "flex flex-col gap-y-6 mb-6 md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-9 md:mb-9 xl:mb-0 xl:w-full xl:gap-x-7.5 xl:gap-y-10 xl:p-10 @container",
            isBackgroundColor ? "xl:bg-primary-white" : "xl:bg-secondary-light",
          )}
        >
          {slice.primary?.features.map((feature, index) => (
            <Fragment key={index}>
              <li className="md:w-[46.435%] md:@[688px]:w-[46.513%] xl:w-[44.965%]! 2xl:@[767px]:w-87.5!">
                <PrismicNextImage
                  field={feature.image_icon}
                  fallbackAlt=""
                  className="w-10 aspect-1 mb-4 mx-auto md:mb-6 xl:mb-7.5"
                  loading="lazy"
                />
                <div className="text-center">
                  <StyledPrismicRichTextSingle
                    field={feature.title}
                    className="title-font font-medium text-title-medium text-text-secondary mb-3"
                  />
                  <StyledPrismicRichText
                    field={feature.description}
                    className="text-body-medium text-text-base"
                  />
                </div>
              </li>
              <span
                className="block bg-text-placeholder w-full h-px -mt-px last:hidden md:self-center md:w-px md:h-54.5 md:-ml-px md:nth-of-type-[2n]:w-full md:nth-of-type-[2n]:h-px md:mt-0 md:nth-of-type-[2n]:-mt-px xl:self-auto xl:h-auto"
                aria-hidden
              ></span>
            </Fragment>
          ))}
        </ul>
        <PrismicNextImage
          field={slice.primary?.image}
          fallbackAlt=""
          className="rounded-md md:rounded-lg xl:rounded-xl object-cover w-full aspect-343/212 md:aspect-688/426 xl:-order-1 xl:flex-none xl:w-[33.829%]"
          loading="lazy"
        />
      </div>
    </StyledContainer>
  );
};

export default Default;
