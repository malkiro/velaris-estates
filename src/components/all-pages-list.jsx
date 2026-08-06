/**
 * This component is intended to be used during the development stage only.
 * Will be displayed only if NEXT_PUBLIC_STAGE === "development"
 */

import React from "react";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import isProduction from "@/utils/is-production";

export default async function AllPagesList() {
  if (isProduction()) {
    return null;
  }
  const client = createClient();
  const pages = await client.getAllByType("page").catch(() => notFound());

  return (
    <div>
      <div className="container mx-auto max-w-[400px] py-12">
        {pages
          .sort((a, b) => {
            if (asText(a.data?.title) < asText(b.data?.title)) {
              return -1;
            }
            if (asText(a.data?.title) > asText(b.data?.title)) {
              return 1;
            }
            return 0;
          })
          .map((page) => {
            return (
              <div key={page.id}>
                <a
                  href={page.url}
                  target={"_blank"}
                  className={
                    "p-2 text-xl flex justify-between items-center hover:bg-gray-300"
                  }
                  rel="noreferrer"
                >
                  <span>{asText(page.data.title)}</span>
                  <img
                    width={18}
                    height={18}
                    className={"max-w-[18px] max-h-[18px] ms-2 me-auto"}
                    src="https://img.icons8.com/?size=100&id=43738&format=png&color=000000"
                    alt=""
                  />{" "}
                  <small className={"text-gray-400"}>/{page.uid}</small>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
