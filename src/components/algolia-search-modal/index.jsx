"use client";
import React from "react";
import { FaSearch as SearchFill } from "react-icons/fa";
import clsx from "clsx";
import {
  hasAlgoliaSearch,
  toggleAlgoliaSearchModal,
} from "@/utils/algolia-search";

const AlgoliaSearchModal = () => {
  if (!hasAlgoliaSearch) return null;

  return (
    <>
      <li className={clsx({})}>
        <button className={""} onClick={toggleAlgoliaSearchModal}>
          <SearchFill
            size={20}
            className={"inline-block mt-[-4px] me-3 xl:me-0"}
          />
          <span className={"xl:hidden"}>Search</span>
        </button>
      </li>
    </>
  );
};

export default AlgoliaSearchModal;
