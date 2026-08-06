import { GoArrowLeft } from "react-icons/go";
import { hasAlgoliaSearch } from "@/utils/algolia-search";
import Link from "next/link";
import StyledHeader from "@/components/StyledHeader";
import React from "react";
import StyledFooter from "@/components/StyledFooter";
import dynamicImport from "next/dynamic";

const AlgoliaSearchOverlayWrapper = dynamicImport(
  () => import("@/components/algolia-search-modal/overlay-wrapper"),
);
const AlgoliaSearch = dynamicImport(
  () => import("@/components/algolia-search"),
);

export default async function NotFound() {
  return (
    <>
      <StyledHeader />
      <div className={"flex flex-col overflow-hidden bg-white"}>
        <div
          className={
            "grow text-center flex-col flex items-center justify-center px-[20px] py-[60px] lg:py-[80px] max-w-[660px] mx-auto relative"
          }
        >
          <h1 className="font-futura leading-[100%] text-primary-dark mb-[18px] md:mb-[24px] text-[90px] md:text-[150px] z-10">
            404
          </h1>
          <p
            className={
              "pointer-events-none text-[180px] text-secondary-light md:text-[300px] absolute z-0 font-bold top-[20px]"
            }
          >
            404
          </p>
          <div className="z-10">
            <div className="text-title-2x-large font-semibold mb-[12px] md:mb-[20px] text-text-heading">
              Something’s missing.
            </div>
            <div className="text-body-base mb-[18px] md:mb-[24px] text-text-base">
              Something is wrong here. It seems like what you are looking for
              cannot be found.
            </div>
            <div className="hover:opacity-80">
              <Link
                href="/"
                className="text-primary-dark flex gap-[8px] items-center cursor-pointer justify-center"
              >
                <GoArrowLeft size={20} />
                <span>Back to home</span>
              </Link>
            </div>
          </div>

          {hasAlgoliaSearch && (
            <div className={"mt-5 w-full"}>
              <AlgoliaSearch />
            </div>
          )}
        </div>
      </div>
      {hasAlgoliaSearch && <AlgoliaSearchOverlayWrapper />}
      <StyledFooter />
    </>
  );
}

export const metadata = {
  title: "Page not found",
};
