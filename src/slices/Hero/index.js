import Main from "./variants/main";
import Variant2 from "@/slices/Hero/variants/variant-2";
import Variant3 from "@/slices/Hero/variants/variant-3";
import Variant4 from "@/slices/Hero/variants/variant-4";
import Variant5 from "@/slices/Hero/variants/variant-5";
import Variant6 from "@/slices/Hero/variants/variant-6";

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? <Main slice={slice} /> : ""}
      {slice.variation === "variation2" ? <Variant2 slice={slice} /> : ""}
      {slice.variation === "variation3" ? <Variant3 slice={slice} /> : ""}
      {slice.variation === "variation4" ? <Variant4 slice={slice} /> : ""}
      {slice.variation === "variation5" ? <Variant5 slice={slice} /> : ""}
      {slice.variation === "variation6" ? <Variant6 slice={slice} /> : ""}
    </section>
  );
};

export default Hero;
