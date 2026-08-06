import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const TopLayout = ({ slice, variation }) => {
  return (
    <div className="flex gap-7 md:gap-8 flex-col lg:gap-10">
      <div
        className={`flex flex-col lg:flex-row w-full ${variation === "variation2" ? "gap-3 md:gap-3" : "gap-7 md:gap-10 "}`}
      >
        <div className="w-full">
          <StyledPrismicRichText
            field={slice.main_title}
            className={`text-title-2x-large title-font font-normal ${variation === "variation2" ? "mb-0" : " mb-6"}`}
          />
          <div className="flex flex-wrap gap-y-6.5 gap-x-10 xl:flex-wrap xl:max-w-150">
            {slice.key_features?.length > 0 &&
              slice.key_features.map((item, idx) => (
                <div className="flex gap-4.5 items-center" key={idx}>
                  <PrismicNextImage
                    field={item.icon}
                    className="max-w-6 md:max-w-10"
                    fallbackAlt=""
                  />
                  <p className="text-body-medium font-normal md:whitespace-nowrap">
                    {item?.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="lg:max-w-155 lg:w-full">
          <StyledPrismicRichText
            field={slice?.description}
            className={"text-body-medium font-normal lg:max-w-[555px]"}
          />
          <div className="mt-3">
            <ul className="list-disc pl-5">
              {slice.bullets_points.map((item, index) => (
                <li
                  className="text-body-medium font-normal mb-1.5 last:mb-0"
                  key={index}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        {slice?.location?.url && (
          <div>
            <iframe
              className="w-full h-[133px] md:h-[268px] lg:h-[500px] relative}"
              src={slice.location.url}
              allowFullScreen
              loading="lazy"
              title="map-section"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopLayout;
