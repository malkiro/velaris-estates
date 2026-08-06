import clsx from "clsx";
import StyledPrismicRichTextSingle from "./StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "./StyledPrismicRichText";

const StyledSectionTitle = ({
  slice,
  wrapperClassName,
  isHero,
  contentLeft = false,
  dark = false,
}) => {
  return (
    <div
      className={clsx(
        contentLeft ? "text-center lg:text-left" : "text-center",
        wrapperClassName,
      )}
    >
      {isHero ? (
        <>
          <StyledPrismicRichTextSingle
            field={slice?.primary?.subtitle}
            className={`text-title-base text-primary-white title-font font-medium ${dark ? "text-text-heading" : "text-primary-white"}`}
          />
          <StyledPrismicRichTextSingle
            field={slice?.primary?.title}
            className={`text-title-3x-large title-font  font-medium mx-4 md:mx-0 mt-2 mb-[16px] md:mb-[18px] ${dark ? "text-text-heading mt-0" : "text-primary-white"}`}
          />

          <div
            className={`text-body-medium  body-font  xl:mx-0  font-normal common-sec-desc ${dark ? "text-text-heading md:mx-0" : "text-primary-white md:mx-[49px]"}`}
          >
            <StyledPrismicRichText
              field={slice?.primary?.description}
              components={{
                paragraph: ({ children }) => (
                  <p className=" mb-[18px] last:mb-0">{children}</p>
                ),
                list: ({ children }) => (
                  <ul className="pl-4 mb-7 last:mb-0 md:pl-6 text-left w-fit mx-auto xl:mx-0">
                    {children}
                  </ul>
                ),
                listItem: ({ children }) => (
                  <li className="pl-0 mb-[6px] list-disc last:mb-0 ">
                    {children}
                  </li>
                ),
              }}
            />
          </div>
        </>
      ) : (
        <>
          <StyledPrismicRichTextSingle
            field={slice?.primary?.subtitle}
            className="text-title-base title-font font-medium mb-[6px] md:mb-[12px] text-text-base"
          />
          <StyledPrismicRichTextSingle
            field={slice?.primary?.title}
            className="text-title-2x-large title-font text-text-heading"
          />

          {slice?.primary?.description && (
            <StyledPrismicRichText
              field={slice?.primary?.description}
              className="section-description font-normal text-body-medium body-font mt-[12px] md:mt-[16px] text-text-base"
              components={{
                list: ({ children }) => (
                  <ul className="pl-4 mb-[8px] last:mb-0 md:pl-6">
                    {children}
                  </ul>
                ),
                listItem: ({ children }) => (
                  <li className="pl-1 mb-1 list-disc last:mb-0 md:pl-2">
                    {children}
                  </li>
                ),
                paragraph: ({ children }) => (
                  <p className=" mb-[12px] last:mb-0">{children}</p>
                ),
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default StyledSectionTitle;
