import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { IoMail, IoCall } from "react-icons/io5";

export default function ContactLink({ type = "email", field }) {
  return (
    <PrismicNextLink
      className="text-body-small flex items-center gap-[6px] hover:text-primary-dark duration-300 transition-all"
      href={field.url}
    >
      {type == "email" ? (
        <IoMail size={20} />
      ) : type == "phone" ? (
        <IoCall size={20} />
      ) : null}
      <span>{field.text}</span>
    </PrismicNextLink>
  );
}
