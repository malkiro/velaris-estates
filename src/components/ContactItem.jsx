"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PrismicNextLink } from "@prismicio/next";
import { loadIcon } from "@/utils/icon-mapper";

const ContactItem = ({ icon, text, link }) => {
  const Icon = loadIcon(icon);

  return (
    <div className="flex gap-2.5 ">
      <div>
        <Icon size={32} />
      </div>
      <PrismicNextLink
        field={link}
        className="w-fit relative text-body-medium font-normal
             after:absolute after:left-0 after:-bottom-0.5
             after:h-[1px] after:w-full after:origin-left
             after:scale-x-0 after:bg-current
             after:transition-transform after:duration-300 after:ease-out
             hover:after:scale-x-100"
      >
        {text}
      </PrismicNextLink>
    </div>
  );
};

export default ContactItem;
