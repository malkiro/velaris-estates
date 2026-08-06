import Default from "./variations/default";
import Variant2 from "./variations/variant-2";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @type {import("react").FC<AboutProps>}
 */
const About = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <Default slice={slice} />}
      {slice.variation === "variation2" && (
        <Variant2 slice={slice} variation={slice.variation} />
      )}
    </section>
  );
};

export default About;
