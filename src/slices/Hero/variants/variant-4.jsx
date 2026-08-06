import StyledContainer from "@/components/StyledContainer";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";
import StyledSectionTitle from "@/components/StyledSectionTitle";

const Variant4 = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1  gap-y-[24px] md:gap-y-[30px] xl:gap-y-[50px]  items-center justify-center ">
        <div>
          <StyledSectionTitle slice={slice} isHero={true} />
          <div className="mt-[20px] md:mt-[24px]">
            <ButtonContainer slice={slice} contentCenter={true} />
          </div>
        </div>
        <div className="flex w-fit gap-x-[20px] items-center mx-auto ">
          {slice.primary.hero_images.map((item, idx) => (
            <PrismicNextImage
              key={idx}
              field={item?.image}
              fallbackAlt=""
              className={`${idx === 1 ? "md:w-[375px] md:h-[240px] xl:w-[630px] xl:h-[365px]" : "hidden md:flex md:w-[142px] md:h-[200px]  xl:w-[305px] xl:h-[270px]"} rounded-[10px] md:rounded-[20px]  object-cover  `}
            />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Variant4;
