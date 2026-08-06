export const hasAlgoliaSearch =
  process.env.NEXT_PUBLIC_ALGOLIA_ID &&
  process.env.NEXT_PUBLIC_ALGOLIA_KEY &&
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX;

export const toggleAlgoliaSearchModal = () => {
  if (localStorage.getItem("showSearch")) {
    localStorage.removeItem("showSearch");
  } else {
    localStorage.setItem("showSearch", "1");
  }
  window.dispatchEvent(new Event("storage"));
};

export const isAlgoliaSearchModalOpen = () =>
  !!localStorage.getItem("showSearch");
