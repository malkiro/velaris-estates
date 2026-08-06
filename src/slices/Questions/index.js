import { asText } from "@prismicio/client";
import SliceWrapper from "@/slices/slice-wrapper";
import dynamic from "next/dynamic";

const Default = dynamic(() => import("./variants/Default"));

const Questions = ({ slice }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: slice.primary.faqs.map((question) => ({
      "@type": "Question",
      name: asText(question.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: asText(question.answer),
      },
    })),
  };

  return (
    <SliceWrapper slice_type={slice.slice_type} variation={slice.variation}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {slice.variation === "default" && <Default slice={slice} />}
    </SliceWrapper>
  );
};

export default Questions;
