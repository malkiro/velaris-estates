import { createClient } from "@/prismicio";
import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import ProjectCarousel from "../components/ProjectCarousel";

export default async function WithCards({ slice }) {
  const client = createClient();
  const projects = await client.getAllByType("villa_project", {
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "asc",
      },
    ],
  });

  return (
    <StyledContainer
      slice={slice}
      paddingX={false}
      parentClass="!max-w-[1440px]"
    >
      <div className="common-space px-[16px] md:px-[40px] xl:px-[80px]">
        <StyledSectionTitle slice={slice} isHero={false} />
      </div>

      <ProjectCarousel projects={projects} />
    </StyledContainer>
  );
}
