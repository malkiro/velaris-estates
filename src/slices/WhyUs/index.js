import SliceWrapper from "@/slices/slice-wrapper";
import dynamic from "next/dynamic";
import WithCards from "./variants/WithCards";

const Default = dynamic(() => import("./variants/Default"));

const WhyUs = ({ slice }) => {
  return (
    <SliceWrapper slice_type={slice.slice_type} variation={slice.variation}>
      {slice.variation === "default" && <Default slice={slice} />}
      {slice.variation === "withCards" && <WithCards slice={slice} />}
    </SliceWrapper>
  );
};

export default WhyUs;
