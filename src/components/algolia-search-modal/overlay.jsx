"use client";
import React, { useEffect, useState } from "react";
import AlgoliaSearch from "@/components/algolia-search";
import { IoClose } from "react-icons/io5";
import StyledContainer from "@/components/StyledContainer";
import {
  hasAlgoliaSearch,
  isAlgoliaSearchModalOpen,
  toggleAlgoliaSearchModal,
} from "@/utils/algolia-search";

import "instantsearch.css/themes/satellite.css";
import "./algolia.scss";

const AlgoliaSearchOverlayBlock = () => {
  if (!hasAlgoliaSearch) return null;

  return (
    <div
      className={
        "bg-[rgba(0,0,0,0.85)] max-h-screen min-h-screen w-full fixed z-99999 top-0 left-0 overflow-auto"
      }
    >
      <StyledContainer className={"text-right pt-2"}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleAlgoliaSearchModal();
          }}
          className={"text-primary-white"}
        >
          <IoClose size={32} />
        </button>
        <div className={"mt-3 lg:mt-8 text-left"}>
          <AlgoliaSearch callback={toggleAlgoliaSearchModal} />
        </div>
      </StyledContainer>
    </div>
  );
};

export default AlgoliaSearchOverlayBlock;
