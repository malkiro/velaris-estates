import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import getFullUrl from "@/utils/get-full-url";

const client = createClient();

export const isHome = (uid) => uid === "home";

export const pageConfig = (params) => {
  const uid = params?.uid?.length
    ? params?.uid[params?.uid?.length - 1]
    : "home";

  const isPaginatedPage = params?.uid?.at(-2) === "page";
  const paginatedPageSlug = isPaginatedPage ? params?.uid?.[0] : null;
  const currentPageUid = paginatedPageSlug || uid;

  const currentPage = Number(params?.uid?.at(-1))
    ? Number(params?.uid.at(-1))
    : 1;

  return {
    uid,
    isPaginatedPage,
    paginatedPageSlug,
    currentPage,
    currentPageUid,
  };
};

/**
 *
 * @param repeating
 * @returns {Promise<*[]>}
 */
export const generateRepeatingPageSlugs = async (repeating) => {
  const repeatingPages = [];

  if (!Array.isArray(repeating)) return repeatingPages;

  for (let i = 0; i < repeating?.length; i++) {
    const { items_per_page, type, listing_page } = repeating[i];

    if (!type || !items_per_page || !listing_page?.url) continue;

    const res = await client.getByType(type, {
      page: 1,
      pageSize: items_per_page,
      fetch: [`${type}.title`],
    });

    let { total_pages } = res;

    const pages = Math.max(0, Number(total_pages) - 1);

    repeatingPages.push(
      ...[...Array(pages).keys()].map((i) => ({
        uid: [
          ...listing_page?.url.split("/").filter(Boolean),
          "page",
          `${i + 2}`,
        ],
      })),
    );
  }

  return repeatingPages;
};

export const createMetaTitle = (page = {}, settings = {}, params = {}) => {
  const { isPaginatedPage, currentPage } = pageConfig(params);

  const mainTitle =
    page?.data?.meta_title ||
    settings?.data?.meta_title ||
    asText(page.data.title);

  if (isPaginatedPage) {
    return mainTitle + ` | Page ${currentPage}`;
  }

  return mainTitle;
};

export const createMetaDescription = (page = {}, settings = {}) => {
  return page?.data?.meta_description || settings?.data?.meta_description;
};

export const createPageMetadata = (page = {}, settings = {}, params = {}) => {
  return {
    title: createMetaTitle(page, settings, params),
    description: createMetaDescription(page, settings),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://velaris-estates.netlify.app"}${page.url || ""}`,
    },
    openGraph: {
      title: page.data.og_title || createMetaTitle(page, settings, params),
      description:
        page.data.og_description || createMetaDescription(page, settings),
      url:
        page.data.og_url ||
        getFullUrl(
          typeof params?.uid === "object" ? params?.uid?.join("/") : page.url,
        ),
      images: [
        {
          url: page.data.og_image?.url,
        },
      ],
    },
  };
};

export const createBlogMetadata = (page = {}, params = {}) => {
  return {
    title: createMetaTitle(page, {}, params),
    description: createMetaDescription(page, {}),
    openGraph: {
      title: page.data.og_title || createMetaTitle(page, {}, params),
      description: page.data.og_description || createMetaDescription(page, {}),
      url:
        page.data.og_url ||
        getFullUrl(
          typeof params?.uid === "object" ? params?.uid?.join("/") : page.url,
        ),
      images: [
        {
          url: page.data.og_image?.url,
        },
      ],
    },
  };
};
