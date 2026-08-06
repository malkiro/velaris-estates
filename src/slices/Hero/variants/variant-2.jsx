import StyledContainer from "@/components/StyledContainer";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";
import StyledSectionTitle from "@/components/StyledSectionTitle";

const Variant2 = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1  gap-y-[24px] md:gap-y-[30px] xl:gap-y-[50px] items-center text-center  justify-center mx-auto xl:max-w-[1064px]">
        <div>
          <StyledSectionTitle slice={slice} isHero={true} />
          <div className="mt-[20px] md:mt-[24px]">
            <ButtonContainer slice={slice} contentCenter={true} />
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

export default Variant2;
