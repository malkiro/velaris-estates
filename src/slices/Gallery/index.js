import Main from "./Variant/Default";

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @type {import("react").FC<GalleryProps>}
 */
const Gallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? <Main slice={slice} /> : null}
    </section>
  );
};

export default Gallery;
