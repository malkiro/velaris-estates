import StyledContainer from "@/components/StyledContainer";
import { PrismicNextImage } from "@prismicio/next";
import { ButtonContainer } from "../components";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice} className="xl:py-[84px]!">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[28px] md:gap-[32px] xl:gap-[40px] items-center">
        <div className="xl:max-w-[620px] mx-auto">
          <div className="hero-default-title-sec">
            <StyledSectionTitle
              slice={slice}
              wrapperClassName={"xl:text-left"}
              isHero={true}
              dark={true}
            />
          </div>

          <div className="mt-[20px] md:mt-[24px]">
            <ButtonContainer slice={slice} />
          </div>
        </div>
        <div className="xl:py-6">
          <PrismicNextImage
            field={slice.primary.hero_image}
            fallbackAlt=""
            className="rounded-t-[10px] md:rounded-t-[20px] xl:rounded-[20px]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Main;
