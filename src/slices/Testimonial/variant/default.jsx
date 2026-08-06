import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import CarousalDefault from "../components/carousalDefault";
import StyledSectionTitle from "@/components/StyledSectionTitle";

const TestimonialDefault = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col">
        <StyledSectionTitle
          slice={slice}
          wrapperClassName={"mx-auto w-full md:max-w-[629px]"}
        />
        <div className="flex flex-row justify-center gap-x-[20px] mt-[20px] md:mt-[30px]">
          {slice?.primary?.buttons?.map(
            ({ link, icon_name, icon_alignment, variant }, idx) => (
              <StyledButton
                key={idx}
                link={link}
                icon={icon_name}
                iconAlignment={icon_alignment}
                variant={variant?.toLowerCase()}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full mt-[30px] md:mt-[40px] xl:mt-[60px]">
        <CarousalDefault slice={slice} />
      </div>
    </StyledContainer>
  );
};

export default TestimonialDefault;
