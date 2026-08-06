import React from "react";
import StyledContainer from "@/components/StyledContainer";
import TopLayout from "../components/toplayout/TopLayout";
import BottomLayout from "../components/bottomlayout/BottomLayout";
import { formatNearbySections } from "@/utils/formatNearbySections";

const Default = ({ slice }) => {
  const formattedData = formatNearbySections(slice?.primary?.items);
  
  return (
    <StyledContainer slice={slice} className="">
      <div className="flex flex-col gap-7 md:gap-8 lg:gap-15 ">
        <TopLayout slice={slice?.primary} />
        {formattedData?.length > 0 && (
          <BottomLayout slice={slice?.primary} formattedData={formattedData} />
        )}
      </div>
    </StyledContainer>
  );
};

export default Default;
