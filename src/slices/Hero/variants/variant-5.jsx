import StyledContainer from "@/components/StyledContainer";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";
import StyledHeroSectionTitle from "../components/StyledHeroSectionTitle";

const Variant5 = ({ slice }) => {
  return (
    <section className="relative w-full h-[844px] overflow-hidden bg-black">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          field={slice.primary.hero_image}
          fallbackAlt=""
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(210.37deg, rgba(0, 0, 0, 0) 37%, rgba(0, 0, 0, 0.7) 85%)",
          }}
        ></div>
      </div>

      {/* 2. Content Layer */}
      <StyledContainer
        slice={slice}
        className="relative z-10 !bg-transparent h-full flex flex-col justify-end pb-[16px]! md:pb-[40px]! xl:pb-[80px]!"
      >
        <div className="xl:max-w-[618px] w-full">
          <StyledHeroSectionTitle
            slice={slice}
            isHero={true}
            contentLeft={true}
            dark={false}
          />

          <div
            className="mt-[28px] flex justify-center lg:justify-start
             [&_.btn-primary]:!border-1
             [&_.btn-primary]:!border-secondary-light
             [&_.btn-primary]:rounded-lg"
          >
            <ButtonContainer slice={slice} contentLeft={true} />
          </div>
        </div>
      </StyledContainer>
    </section>
  );
};

export default Variant5;
