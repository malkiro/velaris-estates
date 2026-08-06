import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";
import StyledSectionTitle from "@/components/StyledSectionTitle";

const Variant3 = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1  gap-y-[24px] md:gap-y-[30px] xl:gap-y-[50px] items-center  justify-center xl:px-[88px]">
        <div className="grid grid-cols-1 items-center text-center xl:grid-cols-2 xl:text-start">
          <StyledSectionTitle
            slice={{ ...slice, primary: { ...slice.primary, description: "" } }}
            wrapperClassName={"xl:text-left"}
            isHero={true}
          />
          <div className="xl:ml-[54px]">
            <StyledPrismicRichTextSingle
              field={slice.primary.description}
              className={"text-body-base"}
            />
            <div className="mt-[20px] md:mt-[24px]">
              <ButtonContainer slice={slice} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <PrismicNextImage
            field={slice.primary.hero_image}
            fallbackAlt=""
            className="object-cover rounded-t-[10px]  max-w-[335px] max-h-[237px] md:max-w-[688px] md:max-h-[333px] md:rounded-t-[20px] xl:max-w-[1064px] xl:max-h-[474px] "
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Variant3;
