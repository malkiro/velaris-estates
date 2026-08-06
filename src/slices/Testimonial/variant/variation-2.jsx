import StyledContainer from "@/components/StyledContainer";
import StyledButton from "@/components/StyledButton";
import CarousalVariant2 from "../components/carousal-variant-2";
import axios from "axios";
import getFullUrl from "@/utils/get-full-url";
import StyledSectionTitle from "@/components/StyledSectionTitle";

export default async function TestimonialVariation2({ slice }) {
  // Fetch ratings from Google using slice data
  const url = getFullUrl("/api/fetch-reviews");

  const reviews = await axios
    .get(url, {
      params: { place_id: slice.primary.place_id },
    })
    .then((response) => {
      //  console.log("API Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      return [];
    });

  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-start">
          <StyledSectionTitle slice={slice} wrapperClassName={"md:text-left"} />
          <div className="flex justify-center items-center gap-x-[20px] mt-[20px] md:mt-0 md:justify-end">
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
        <div className="w-full h-full mt-[30px] md:mt-[40px] xl:mt-[60px] max-w-[1400px] mx-auto overflow-hidden">
          <CarousalVariant2 reviews={reviews?.data} />
        </div>
      </div>
    </StyledContainer>
  );
}
