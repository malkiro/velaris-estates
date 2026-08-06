import InvestmentPath from "./variants/Default";

/**
 * @typedef {import("@prismicio/client").Content.ChooseYourPathSlice} ChooseYourPathSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ChooseYourPathSlice>} ChooseYourPathProps
 * @type {import("react").FC<ChooseYourPathProps>}
 */
const ChooseYourPath = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? <InvestmentPath slice={slice} /> : null}
    </section>
  );
};

export default ChooseYourPath;
