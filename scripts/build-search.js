const sm = require("../slicemachine.config.json");
const { algoliasearch } = require("algoliasearch");
const { asText, asLink } = require("@prismicio/client");
const prismic = require("@prismicio/client");

require("dotenv").config();

(async function () {
  if (
    !process.env.NEXT_PUBLIC_ALGOLIA_ID ||
    !process.env.NEXT_PUBLIC_ALGOLIA_KEY
  ) {
    console.log("no algolia keys defined. skipping...");
    return true;
  }

  const customPageTypes = [
    { type: "page", typeLabel: "Page", url: (slug) => `/${slug}` },
    { type: "blog", typeLabel: "Blog", url: (slug) => `/blog/${slug}` },
  ];

  const client = prismic.createClient(sm.repositoryName);

  const allPages = [];
  const allRecords = [];

  for (let i = 0; i < customPageTypes?.length; i++) {
    const type = customPageTypes[i]?.type || null;
    if (type) {
      allPages.push(client.getAllByType(type));
    }
  }

  await Promise.all(allPages).then((res) => {
    for (let i = 0; i < res.length; i++) {
      const pages = res[i];
      const customType = customPageTypes?.find(
        (p) => p.type === pages?.[0]?.type,
      );

      const temp = pages.map((s) => {
        return {
          objectID: s.id,
          title: asText(s.data.title),
          summary: s.data.summary || s.data?.search_summary || "",
          url: customType?.url(s.uid),
          content:
            s?.data?.content
              ?.map((item) => `${asText(item.title)}`)
              .join(" ")
              .slice(0, 1000) || "",
          type: customType?.typeLabel,
        };
      });
      allRecords.push(...temp);
    }
  });

  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_KEY,
  );

  try {
    await algoliaClient.saveObjects({
      indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX,
      objects: allRecords,
      autoGenerateObjectIDIfNotExist: true,
    });
    console.log("uploaded to algolia");
  } catch (e) {
    console.log("failed to upload to algolia");
    console.log(e);
  }
})();
