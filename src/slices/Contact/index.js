import dynamic from "next/dynamic";
import SliceWrapper from "@/slices/slice-wrapper";
import pick from "lodash/pick";

const Main = dynamic(() => import("./variations/default"));

const Contact = ({ slice, context }) => {
  return (
    <SliceWrapper
      {...pick(slice, "variation", "slice_type", "primary.section_id")}
    >
      {/* {slice.variation === "default" && ( */}
        <div id="contact-us">
          <Main slice={slice} settings={context?.settings} />
        </div>
      {/* )} */}
    </SliceWrapper>
  );
};

export default Contact;
