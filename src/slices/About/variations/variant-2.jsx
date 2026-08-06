import React from "react";
import TopLayout from "../components/toplayout/TopLayout";
import StyledContainer from "@/components/StyledContainer";

const Variant2 = ({ slice, variation }) => {
  return (
    <div className="bg-secondary-light">
      <StyledContainer slice={slice} className="">
        <TopLayout slice={slice?.primary} variation={variation} />
      </StyledContainer>
    </div>
  );
};

export default Variant2;
