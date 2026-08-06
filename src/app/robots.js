import getFullUrl from "@/utils/get-full-url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getFullUrl("/sitemap.xml"),
  };
}

export const revalidate = 8640000;
