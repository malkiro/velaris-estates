import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const CopyrightLinks = ({ links }) => {
  if (!links || !links?.length) return null;

  return (
    <ul className={"flex flex-col md:flex-row md:gap-x-[30px]"}>
      {links.map((link, index) => (
        <li key={index}>
          <PrismicNextLink
            field={link}
            className="hover:underline transition-all duration-300 ease-in-out"
          />
        </li>
      ))}
    </ul>
  );
};

export default CopyrightLinks;
