import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import React from "react";

const Category = ({ data }) => {
  if (!data) return null;

  const { title, icon, items } = data;

  return (
    <div className="w-full break-inside-avoid mb-7 xl:mb-[60px] md:max-w-[297px] xl:max-w-[382px]">
      <div className="flex items-center gap-5">
        {icon && (
          <Image
            src={icon.url}
            alt={icon.alt || ""}
            width={icon.width || 32}
            height={icon.height || 32}
            className="max-w-8 object-contain max-h-[32px]"
          />
        )}
        <p className="text-title-medium font-medium title-font">{title}</p>
      </div>

      {/* Items */}
      <div className="mt-6">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between md:items-center text-body-medium mb-4.5 last:mb-0 font-normal"
          >
            <p className="">{item.name}</p>
            <p className=" text-[#595959] md:whitespace-nowrap">{item.distance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
