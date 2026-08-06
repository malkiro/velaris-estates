import StyledContainer from "@/components/StyledContainer";
import StyledPagination from "@/components/StyledPagination";
import Link from "next/link";
import { asLink, asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import projectConfig from "../../../project.config";

export default async function PaginatedItems({ slice, context }) {
  const { currentPage, firstPage } = context;

  const type = getType(slice.primary.type);

  if (!type) return null;

  const client = createClient();

  const items = await client.getByType(type, {
    page: currentPage,
    pageSize: slice?.primary?.number_of_items_per_page || 10,
    fetch: [`${type}.title`],
    orderings: {
      field: "my.blog.post_date",
      direction: "desc",
    },
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: asText(slice.primary.title) || "Blog Articles",
    url: `${projectConfig.productionUrl}${firstPage}`,
    blogPost: items?.results?.map((article) => ({
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": asLink(article),
      },
      headline: asText(article.data.title),
      description: article.data.summary || "",
      image: article.data.image?.url || "",
      datePublished: article.first_publication_date,
      dateModified: article.last_publication_date,
      url: asLink(article),
    })),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <StyledContainer slice={slice}>
        <ul className={"grid grid-cols-2 md:grid-cols-3 gap-8 py-10"}>
          {items?.results?.map((item) => {
            return (
              <li
                key={item.id}
                className="p-4 border-2 rounded-md bg-primary-offwhite"
              >
                <Link href={asLink(item)}>
                  <h2>{asText(item.data.title)}</h2>
                </Link>
              </li>
            );
          })}
        </ul>

        <StyledPagination
          totalPageCount={items.total_pages}
          currentPage={items.page}
          firstPage={firstPage}
        />
      </StyledContainer>
    </section>
  );
}

const getType = (type) => {
  switch (type) {
    case "blog":
      return "blog";
    default:
      return "";
  }
};
