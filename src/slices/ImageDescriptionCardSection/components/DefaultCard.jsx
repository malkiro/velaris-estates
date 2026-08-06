import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";

export default function DefaultCard({ item }) {
  return (
    <div
      className={`mb-[30px] last:mb-0 lg:mb-0 lg:last:pb-0 lg:py-[40px] max-w-[580px] md:max-w-[680px] lg:max-w-none mx-auto ${item.right_aligned_image ? "lg:flex-row" : "lg:flex-row-reverse"} lg:flex lg:flex-nowrap lg:items-center lg:gap-[40px]`}
    >
      <div className="mb-[14px]  lg:w-full">
        <div className="flex items-center gap-[10px] mb-[8px] lg:mb-[20px] lg:gap-[14px]">
          <PrismicNextImage field={item.icon} fallbackAlt="" className="" />
          {item.title && (
            <StyledPrismicRichTextSingle
              field={item.title}
              className={"text-title-large"}
            />
          )}
        </div>
        {item.description && (
          <StyledPrismicRichTextSingle
            field={item.description}
            className={"text-body-medium"}
          />
        )}
      </div>
      <PrismicNextImage
        field={item.image}
        fallbackAlt=""
        className="rounded-[8px] w-full object-cover lg:w-[40%] lg:max-w-[542px] xl:min-w-[542px]"
      />
    </div>
  );
}
