import FeaturesDefault from "./variants/Default";
import Variation3 from "./variants/variant-3";
import Variation2 from "./variants/variant-2";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */
const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <FeaturesDefault slice={slice} />}
      {slice.variation === "variation2" && <Variation2 slice={slice} />}
      {slice.variation === "variation3" && <Variation3 slice={slice} />}
    </section>
  );
};

export default Features;
