"use client";

import React from "react";
import ContactItem from "@/components/ContactItem";

const ContactDetails = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 md:px-[66px] lg:px-0 max-w-[518px] md:max-w-none mx-auto xl:ml-0">
      {data?.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon_name}
          text={item.label?.[0]?.text}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ContactDetails;
