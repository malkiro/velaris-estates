import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import clsx from "clsx";

const StyledHeroSectionTitle = ({
  slice,
  wrapperClassName,
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
      {/* Subtitle */}
      <StyledPrismicRichTextSingle
        field={slice?.primary?.subtitle}
        className={clsx(
          "text-title-base title-font font-medium mb-[16px]",
          dark ? "text-text-heading" : "text-primary-white",
        )}
      />

      <StyledPrismicRichTextSingle
        field={slice?.primary?.title}
        className={clsx(
          "text-title-3x-large title-font font-medium mx-4 md:mx-0 !m-0 !mb-[16px]",
          dark ? "text-text-heading" : "text-primary-white",
        )}
      />

      <div
        className={clsx(
          "text-body-medium body-font font-normal",
          dark ? "text-text-heading md:mx-0" : "text-primary-white",
          contentLeft ? "xl:mx-0" : "max-w-[1024px] mx-auto",
        )}
      >
        <StyledPrismicRichText
          field={slice?.primary?.description}
          components={{
            paragraph: ({ children }) => (
              <p className="mb-[18px] last:mb-0">{children}</p>
            ),
            list: ({ children }) => (
              <ul className="pl-4 mb-7 last:mb-0 md:pl-6 text-left w-fit mx-auto xl:mx-0 list-disc">
                {children}
              </ul>
            ),
            listItem: ({ children }) => (
              <li className="pl-0 mb-[6px] last:mb-0">{children}</li>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default StyledHeroSectionTitle;
