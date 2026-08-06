import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import dynamicImport from "next/dynamic";
import isProduction from "@/utils/is-production";
import {
  createPageMetadata,
  generateRepeatingPageSlugs,
  isHome,
  pageConfig,
} from "@/utils/page-utils";
import StructuredData from "@/components/StructuredData";

const AllPagesList = dynamicImport(() => import("@/components/all-pages-list"));
const Breadcrumbs = dynamicImport(() => import("@/components/Breadcrumbs"));

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export async function generateStaticParams() {
  const pages = await client.getAllByType("page", {
    fetch: ["page.title", "page.parent"],
  });

  const repeatingPagesSlugList = await generateRepeatingPageSlugs(
    settings?.data?.repeatable_types,
  );

  const allPages = pages.map(({ url }) => {
    return { uid: url.split("/").filter(Boolean) };
  });

  return [...allPages, ...repeatingPagesSlugList];
}

export async function generateMetadata(props) {
  const params = await props.params;

  const { currentPageUid } = pageConfig(params);

  const page = await client.getByUID("page", currentPageUid).catch(() => null);

  return createPageMetadata(page, settings, params);
}

export default async function Page(props) {
  const params = await props.params;

  const { currentPage, currentPageUid } = pageConfig(params);

  const page = await client.getByUID("page", currentPageUid).catch(() => null);

  const structured_data = page?.data?.structured_data;

  if (!page) {
    return null;
  }

  return (
    <>
      {!isHome(currentPageUid) && <Breadcrumbs page={page} />}
      {isHome() && !isProduction() && <AllPagesList />}
      <StructuredData data={structured_data} />
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{
          page,
          settings,
          currentPage: currentPage,
          firstPage: page.url,
        }}
      />
    </>
  );
}
