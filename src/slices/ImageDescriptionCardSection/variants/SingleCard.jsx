import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import StyledButton from "@/components/StyledButton";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { sliceGaps } from "@/utils/sliceGaps";
import clsx from "clsx";

import SingleCardCarouselMount from "../components/SingleCardCarouselMount.client";

export default function SingleCard({ slice }) {
  const images = slice.primary.image_gallery ?? [];
  const first = images[0]?.image;

  return (
    <div className={sliceGaps(slice)}>
      <StyledContainer slice={slice}>
        <StyledSectionTitle slice={slice} wrapperClassName="" isHero={false} />

        <div
          className={clsx(
            "flex flex-col lg:flex-row lg:gap-10 xl:gap-[60px] items-center lg:items-stretch mt-[28px] md:mt-[32px] xl:mt-[40px] xl:px-[3px]",
            {
              "lg:flex-row": slice.primary.right_aligned_image,
              "lg:flex-row-reverse": !slice.primary.right_aligned_image,
            },
          )}
        >
          {/* Content Column */}
          <div
            className={clsx(
              "flex-1 w-full order-2 lg:order-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left p-4 md:p-8 lg:p-0",
              "bg-white lg:bg-transparent",
              "lg:max-w-[476px]",
            )}
          >
            <PrismicRichText
              field={slice.primary.villa_name}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-medium title-font mb-[16px] text-[28px] leading-[30px] md:text-[36px] md:leading-[40px] xl:text-[48px] xl:leading-[62px]">
                    {children}
                  </p>
                ),
              }}
            />

            <div className="space-y-[8px] text-text-base text-body-medium leading-[32px] font-normal mb-[24px] md:mb-[20px] lg:mb-[50px]">
              <PrismicRichText field={slice.primary.villa_description} />
            </div>

            <div className="flex flex-wrap gap-x-[29px] gap-y-[22px] justify-center lg:justify-start">
              {slice.primary.amenities?.map((item, index) => (
                <div key={index} className="flex items-center gap-[12px]">
                  {item.icon && (
                    <div className="w-6 h-6 shrink-0 relative">
                      <PrismicNextImage
                        field={item.icon}
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <PrismicRichText
                    field={item.name}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-body-base m-0">{children}</p>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>

            {slice.primary.button_link && (
              <StyledButton
                link={slice.primary.button_link}
                variant="primary"
                className="!w-full md:!w-[200px] md:!h-[52px] flex items-center justify-center gap-[8px] mt-[24px] md:mt-[20px] lg:mt-[50px]"
              >
                <span>{slice.primary.button_name}</span>
              </StyledButton>
            )}
          </div>

          <div className="w-full lg:flex-1 lg:w-[738px] xl:max-w-[738px] relative order-1 lg:order-2">
            {first && (
              <PrismicNextImage
                field={first}
                alt=""
                priority
                fetchPriority="high"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 738px"
                imgixParams={{
                  fm: "webp",
                  q: 60,
                  fit: "max",
                  auto: ["format", "compress"],
                }}
                className="w-full object-cover h-[299.7px] md:h-[601px] lg:h-[645px]"
              />
            )}

            {/* Client-only carousel mounted after paint */}
            {images.length > 1 && <SingleCardCarouselMount images={images} />}
          </div>
        </div>
      </StyledContainer>
    </div>
  );
}
