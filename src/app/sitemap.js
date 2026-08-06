import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";
import getFullUrl from "@/utils/get-full-url";

export default async function sitemap() {
  const client = createClient();

  const pages = await client.getAllByType("page", { fetch: "page.title" });
  const blogs = await client.getAllByType("blog", { fetch: "blog.title" });

  const urls = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (page.uid === "home") {
      const url = getFullUrl();
      urls.push({
        url,
        lastModified: new Date(page.last_publication_date).toISOString(),
        priority: 1,
      });
      continue;
    }

    const url = getFullUrl(asLink(page));
    urls.push({
      url,
      lastModified: new Date(page.last_publication_date).toISOString(),
      priority: 0.8,
    });
  }

  for (let i = 0; i < blogs.length; i++) {
    const page = blogs[i];
    const url = getFullUrl(asLink(page));
    urls.push({
      url,
      lastModified: new Date(page.last_publication_date).toISOString(),
      priority: 0.7,
    });
  }

  return urls;
}

export const revalidate = 8640000;
