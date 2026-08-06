import StyledContainer from "@/components/StyledContainer";
import SectionTitle from "../components/SectionTitle";
import { createClient } from "@/prismicio";
import clsx from "clsx";
import VillaTypeCarousel from "../components/VillaTypeCarousel";

const client = createClient();
const getAllVillaTypes = async () => {
  const result = await client.getAllByType("villa_type", {
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "asc",
      },
    ],
  });
  return result.map((item) => item.data);
};

const Default = async ({ slice }) => {
  const isBackgroundColor = slice.primary.with_background_color;
  const villaTypes = await getAllVillaTypes();

  return (
    <StyledContainer slice={slice} className="relative isolate">
      <div className="text-center mb-7 md:mb-8 max-w-220 mx-auto xl:hidden">
        <SectionTitle
          subtitle={slice.primary?.subtitle}
          title={slice.primary?.title}
          description={slice.primary?.description}
        />
      </div>
      <VillaTypeCarousel items={villaTypes} slice={slice} />
      <div
        className={clsx(
          "absolute hidden xl:block top-0 bottom-0 right-0 -z-1 w-[52.917%]",
          isBackgroundColor ? "bg-primary-white" : "bg-secondary-light",
        )}
        aria-hidden
      ></div>
    </StyledContainer>
  );
};

export default Default;
