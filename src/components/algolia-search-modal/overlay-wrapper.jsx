"use client";
import { useEffect, useState } from "react";
import { hasAlgoliaSearch, isAlgoliaSearchModalOpen } from "@/utils/algolia-search";
import dynamic from "next/dynamic";

const SearchOverlay = dynamic(() => import("./overlay"), { ssr: false });

const AlgoliaSearchOverlayWrapper = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const listenStorageChange = () => {
      setShowSearch(isAlgoliaSearchModalOpen());
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  if (!hasAlgoliaSearch) return null;
  if (!showSearch) return null;

  return <SearchOverlay />;
};

export default AlgoliaSearchOverlayWrapper;
