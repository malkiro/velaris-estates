import React from "react";
import { formatNearbySections } from "@/utils/formatNearbySections";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import Category from "./Category";

const BottomLayout = ({ slice, formattedData }) => {
  return (
    <div>
      <StyledPrismicRichText
        field={slice?.secondary_title}
        className={"text-title-x-large title-font mb-6 font-medium"}
      />
      <div className="mt-7 md:mt-10 w-full columns-1 sm:columns-2 md:max-w-176 lg:max-w-none lg:columns-3 gap-7 md:gap-x-[66px] md:gap-y-[60px]   ">
        {formattedData
          ?.filter(
            (section) =>
              section?.items &&
              section.items.some(
                (item) => item.name?.trim() || item.distance?.trim()
              )
          )
          .map((section, index) => (
            <Category key={index} data={section} />
          ))}
      </div>
    </div>
  );
};

export default BottomLayout;
