import SliceWrapper from "@/slices/slice-wrapper";
import dynamic from "next/dynamic";

const Default = dynamic(() => import("./variants/Default"));

const Cta = ({ slice }) => {
  return (
    <SliceWrapper slice_type={slice.slice_type} variation={slice.variation}>
      {slice.variation === "default" && <Default slice={slice} />}
    </SliceWrapper>
  );
};

export default Cta;
