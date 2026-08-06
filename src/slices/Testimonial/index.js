import dynamic from "next/dynamic";
import TestimonialWithImage from "./variant/testimonial-with-image";

const TestimonialDefault = dynamic(() => import("./variant/default"));
const TestimonialVariation2 = dynamic(() => import("./variant/variation-2"));
const GoogleReviews = dynamic(() => import("./variant/GoogleReviews"));

const Testimonial = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
    >
      {slice.variation === "default" && <TestimonialDefault slice={slice} />}
      {slice.variation === "variation2" && (
        <TestimonialVariation2 slice={slice} />
      )}
      {slice.variation === "googleReviews" && <GoogleReviews slice={slice} />}
      {slice.variation === "testimonialWithImage" && (
        <TestimonialWithImage slice={slice} />
      )}
    </section>
  );
};

export default Testimonial;
