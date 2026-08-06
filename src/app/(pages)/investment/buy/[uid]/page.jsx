import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { createPageMetadata } from "@/utils/page-utils";
import Breadcrumbs from "@/components/Breadcrumbs";

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export async function generateStaticParams() {
  const docs = await client.getAllByType("villa_project");
  return docs.map((doc) => ({ uid: doc.uid }));
}

export async function generateMetadata(props) {
  const params = await props.params; // ✅ Next 15: params can be a Promise

  const doc = await client
    .getByUID("villa_project", params.uid)
    .catch(() => null);

  if (!doc) return {};
  return createPageMetadata(doc, settings, params);
}

export default async function VillaProjectPage(props) {
  const params = await props.params; // ✅ Next 15: params can be a Promise

  const doc = await client
    .getByUID("villa_project", params.uid)
    .catch(() => null);

  if (!doc) notFound();

  return (
    <>
      <Breadcrumbs page={doc} />
      <SliceZone
        slices={doc.data.slices}
        components={components}
        context={{ page: doc, settings, currentPage: doc, firstPage: doc.url }}
      />
    </>
  );
}
