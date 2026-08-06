import StyledHeader from "@/components/StyledHeader";
import StyledFooter from "@/components/StyledFooter";
import React from "react";
import dynamicImport from "next/dynamic";
import { hasAlgoliaSearch } from "@/utils/algolia-search";

const AlgoliaSearchOverlayWrapper = dynamicImport(
  () => import("@/components/algolia-search-modal/overlay-wrapper"),
);

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <>
      <StyledHeader />
      {children}
      {hasAlgoliaSearch && <AlgoliaSearchOverlayWrapper />}
      <StyledFooter />
    </>
  );
}
