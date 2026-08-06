import StyledContainer from "@/components/StyledContainer";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";
import StyledHeroSectionTitle from "../components/StyledHeroSectionTitle";
import { PrismicRichText } from "@prismicio/react";

const Variant6 = ({ slice }) => {
  const features = slice?.primary?.feature ?? [];
  const hasFeatures = Array.isArray(features) && features.length > 0;

  return (
    <section
      className="relative w-full overflow-visible"
      style={{
        paddingTop: slice.primary.top_padding || "0px",
        paddingBottom: slice.primary.bottom_padding || "0px",
      }}
    >
      {/* Hero Background Container */}
      <div className="relative w-full h-[60vh] md:h-screen min-h-[844px] md:max-h-[844px]">
        <PrismicNextImage
          field={slice.primary.hero_image}
          fallbackAlt=""
          fill
          className="object-cover z-0"
          loading="eager"
          priority
          fetchPriority="high"
          quality={100}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 130%)",
          }}
        />

        {/* Hero Content */}
        <StyledContainer className="relative z-20 h-full flex flex-col justify-center items-center !bg-transparent">
          <div
            className={[
              "absolute left-0 right-0 bottom-[48px]",
              hasFeatures
                ? "md:bottom-[168px] lg:bottom-[168px]"
                : "md:bottom-[80px] lg:bottom-[80px]",
            ].join(" ")}
          >
            <div className="w-full mx-auto text-center">
              <StyledHeroSectionTitle
                slice={slice}
                isHero={true}
                contentLeft={false}
              />
              <div
                className="mt-[28px] flex justify-center w-full 
                    [&_.btn]:!w-full md:[&_.btn]:w-auto 
                    [&_.btn]:border-2 [&_.btn]:!border-secondary-light [&_.btn]:rounded-lg"
              >
                <ButtonContainer slice={slice} contentLeft={false} />
              </div>
            </div>
          </div>
        </StyledContainer>
      </div>

      {/* Features Bar (Floating) */}
      {hasFeatures && (
        <div className="relative z-30 lg:-mt-24 ">
          <div className="max-w-[1280px] mx-auto bg-secondary-light p-[40px] px-[16px] md:px-[40px] ">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-y-[40px] md:gap-[40px] lg:gap-[53.75px]">
              {slice.primary.feature?.map((item, index) => (
                <div
                  key={index}
                  className={`
            relative flex flex-col

            /* ================= Tablet layout sizing (3 + 2) ================= */
            /* 6-col grid on tablet:
               Row 1: items 1-3 => 2+2+2
               Row 2: items 4-5 => 3+3 (full width split)
            */
            md:max-lg:[&:nth-child(1)]:col-span-2
            md:max-lg:[&:nth-child(2)]:col-span-2
            md:max-lg:[&:nth-child(3)]:col-span-2
            md:max-lg:[&:nth-child(4)]:col-span-3
            md:max-lg:[&:nth-child(5)]:col-span-3

            /* ================= Vertical separators in the MIDDLE of the GAP ================= */
            /* Desktop (5 cols): gap 53.75 => half 26.875 */
            lg:[&:not(:nth-child(5n+1))]:before:content-['']
            lg:[&:not(:nth-child(5n+1))]:before:absolute
            lg:[&:not(:nth-child(5n+1))]:before:top-0
            lg:[&:not(:nth-child(5n+1))]:before:bottom-0
            lg:[&:not(:nth-child(5n+1))]:before:w-px
            lg:[&:not(:nth-child(5n+1))]:before:bg-border-primary
            lg:[&:not(:nth-child(5n+1))]:before:left-[-26.875px]

            /* Tablet vertical dividers (gap 40 => half 20):
               - between item1|2 => before item2
               - between item2|3 => before item3
               - between item4|5 => before item5
            */
            md:max-lg:[&:nth-child(2)]:before:content-['']
            md:max-lg:[&:nth-child(2)]:before:absolute
            md:max-lg:[&:nth-child(2)]:before:top-0
            md:max-lg:[&:nth-child(2)]:before:bottom-0
            md:max-lg:[&:nth-child(2)]:before:w-px
            md:max-lg:[&:nth-child(2)]:before:bg-border-primary
            md:max-lg:[&:nth-child(2)]:before:left-[-20px]

            md:max-lg:[&:nth-child(3)]:before:content-['']
            md:max-lg:[&:nth-child(3)]:before:absolute
            md:max-lg:[&:nth-child(3)]:before:top-0
            md:max-lg:[&:nth-child(3)]:before:bottom-0
            md:max-lg:[&:nth-child(3)]:before:w-px
            md:max-lg:[&:nth-child(3)]:before:bg-border-primary
            md:max-lg:[&:nth-child(3)]:before:left-[-20px]

            md:max-lg:[&:nth-child(5)]:before:content-['']
            md:max-lg:[&:nth-child(5)]:before:absolute
            md:max-lg:[&:nth-child(5)]:before:top-0
            md:max-lg:[&:nth-child(5)]:before:bottom-0
            md:max-lg:[&:nth-child(5)]:before:w-px
            md:max-lg:[&:nth-child(5)]:before:bg-border-primary
            md:max-lg:[&:nth-child(5)]:before:left-[-20px]

            /* ================= Horizontal separators ================= */
            /* MOBILE ONLY: per-item separator (20 / line / 20) */
            after:content-['']
            after:absolute
            after:h-px
            after:bg-border-primary
            after:left-0
            after:right-0
            after:top-[-20px]
            [&:nth-child(1)]:after:hidden
            md:after:content-none

            /* TABLET ONLY: ONE continuous separator between row 1 and row 2 */
            md:max-lg:[&:nth-child(4)]:after:content-['']
            md:max-lg:[&:nth-child(4)]:after:absolute
            md:max-lg:[&:nth-child(4)]:after:left-0
            md:max-lg:[&:nth-child(4)]:after:top-[-20px]
            md:max-lg:[&:nth-child(4)]:after:h-px
            md:max-lg:[&:nth-child(4)]:after:bg-border-primary
            md:max-lg:[&:nth-child(4)]:after:w-[calc(200%+40px)]

            /* DESKTOP: no horizontal line */
            lg:after:content-none

          `}
                >
                  <div className="flex items-center gap-[12px] md:gap-0 md:block">
                    {/* Icon Wrapper */}
                    {item.icon?.url && (
                      <div className="h-[20px] w-[20px] shrink-0 md:mb-[8px] md:h-[24px] md:w-[24px]">
                        <PrismicNextImage
                          field={item.icon}
                          className="w-full h-full object-contain"
                          fallbackAlt=""
                        />
                      </div>
                    )}

                    {/* Text Wrapper: Inline on mobile, stacked on desktop */}
                    <div className="flex items-center gap-[12px] md:block">
                      <div className="text-black text-title-medium title-font font-medium whitespace-nowrap lg:mb-[5px]">
                        <PrismicRichText
                          field={item.label}
                          components={{
                            paragraph: ({ children }) => (
                              <span>{children}</span>
                            ),
                          }}
                        />
                        <span className="md:hidden">:</span>
                      </div>

                      {/* Mobile-only colon */}
                      <div className="text-black body-font text-body-medium whitespace-nowrap mt-[4px] md:mt-0">
                        <PrismicRichText field={item.description} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Variant6;
