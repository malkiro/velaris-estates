import { hasAlgoliaSearch } from "@/utils/algolia-search";
import dynamic from "next/dynamic";

const AlgoliaSearchOverlayWrapper = async () => {
  if (!hasAlgoliaSearch) return null;

  const SearchOverlay = dynamic(() => import("./overlay"));

  return <SearchOverlay />;
};

export default AlgoliaSearchOverlayWrapper;
