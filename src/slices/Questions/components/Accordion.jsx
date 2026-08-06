import { asText } from "@prismicio/client";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { FaPlusCircle as AddCircle, FaMinusCircle as RemoveCircle } from "react-icons/fa";

const Accordion = ({ faqs }) => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="px-3 md:px-6 py-6.5 first:pt-3.5 first:[&>summary>.area]:-top-3.5 shadow-[inset_0_-1px_0_0_var(--color-text-description)] last:shadow-none details-content:[content-visibility:visible] group"
          open={index === 0}
        >
          <summary className="list-none flex gap-5 justify-between selection:bg-transparent cursor-pointer relative">
            <h3 className="text-text-heading text-title-medium title-font font-medium">
              {asText(faq.question)}
            </h3>
            <div
              className="flex-none flex items-center w-6 h-7.5 md:w-7.5 md:h-10"
              aria-hidden
            >
              <AddCircle className="group-open:hidden w-full" />
              <RemoveCircle className="hidden text-secondary-light-2 group-open:block w-full" />
            </div>
            <span
              className="area absolute -top-6.5 -bottom-6.5 -left-3 -right-3 md:-left-6 md:-right-6 group-open:-bottom-3"
              aria-hidden
            ></span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-open:grid-rows-[1fr]">
            <div className="text-body-medium text-text-secondary pr-11 md:pr-12.5 overflow-hidden">
              <StyledPrismicRichText field={faq.answer} className="mt-3" />
            </div>
          </div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
