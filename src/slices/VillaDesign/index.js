import SliceWrapper from "@/slices/slice-wrapper";
import dynamic from "next/dynamic";

const Default = dynamic(() => import("./variants/Default"));
const Variant_2 = dynamic(() => import("./variants/Variant_2"));

const VillaDesign = ({ slice }) => {
  return (
    <SliceWrapper slice_type={slice.slice_type} variation={slice.variation}>
      {slice.variation === "default" && <Default slice={slice} />}
      {slice.variation === "variant2" && <Variant_2 slice={slice} />}
    </SliceWrapper>
  );
};

export default VillaDesign;
