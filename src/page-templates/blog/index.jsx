import React from "react";
import { createClient } from "@/prismicio";
import StyledContainer from "@/components/StyledContainer";
import Link from "next/link";
import { asLink, asText } from "@prismicio/client";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPagination from "@/components/StyledPagination";

export default async function BlogTemplate({
  page,
  settings,
  currentPage = 1,
}) {
  const client = createClient();
  const allBlogs = await client.getAllByType("blog");

  const blogs = [...allBlogs];

  const itemsPerPage = settings?.data?.number_of_items_per_page;

  const totalPages = Math.ceil(blogs?.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <div>
      <StyledContainer>
        <StyledPrismicRichText field={page.data.title} />
        <ul className={"grid grid-cols-2 md:grid-cols-3 gap-3"}>
          {blogs.slice(start, end).map((blog) => {
            return (
              <li key={blog.id}>
                <Link href={asLink(blog)}>
                  <h2>{asText(blog.data.title)}</h2>
                </Link>
              </li>
            );
          })}
        </ul>

        <StyledPagination
          totalPageCount={totalPages}
          currentPage={currentPage}
        />
      </StyledContainer>
    </div>
  );
}
