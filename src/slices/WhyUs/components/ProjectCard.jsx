import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { FiArrowRight as ArrowForward } from "react-icons/fi";
const { asText } = require("@prismicio/client");

export default function ProjectCard({ project }) {
  const { data } = project;

  return (
    <Link href={project.url || "#"} className="group block h-full">
      <div className="bg-white rounded-[6px] md:rounded-[8px] lg:rounded-[12px] overflow-hidden flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-[225px] md:h-[256px] xl:h-[288px] w-full overflow-hidden">
          <PrismicNextImage
            field={data.card_image}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            fallbackAlt=""
          />
        </div>

        <div className="px-4 md:px-6 py-6 flex flex-col flex-grow">
          <div className="text-text-heading text-title-large mb-[6px] title-font font-medium">
            <h3>{asText(data.title)}</h3>
          </div>

          <p className="text-text-base text-body-medium">
            {data.card_description}
          </p>

          {/* Features */}
          <div className="space-y-[14px] mt-[28px]">
            {data.features?.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row justify-between items-start pb-[14px] border-b border-primary-light"
              >
                <span className="text-title-base title-font text-black font-medium md:min-w-[157px] 2xl:min-w-[202px] md:max-w-[157px] 2xl:max-w-[202px] mb-[2px] md:mb-0">
                  {feature.title}
                </span>
                <span className="text-body-medium text-black">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-7 md:pt-[62px] lg:pt-8 flex items-center text-primary-dark text-[16px] md:text-[18px] leading-[18px] font-medium transition-transform duration-300 group-hover:underline group-hover:font-bold">
            View villa design
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowForward size={24} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
