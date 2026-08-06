import Link from "next/link";
import { FaChevronRight as ChevronForward, FaHome as HomeFill } from "react-icons/fa";
import StyledContainer from "@/components/StyledContainer";
import { asText } from "@prismicio/client";
import projectConfig from "../../../project.config";
import clsx from "clsx";

/**
 * @typedef {import("@prismicio/client").Content.BreadcrumbsSlice} BreadcrumbsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BreadcrumbsSlice>} BreadcrumbsProps
 * @param {BreadcrumbsProps}
 */
export default async function Breadcrumbs({ page }) {
  const { links, schema } = await generateLinks(page);

  if (!links || !links.length) return null;

  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      {schema}
      <StyledContainer>
        <ol className="flex items-center py-3">
          {links.map(({ link, label }, idx) => (
            <li key={idx} className="flex items-center">
              {!!idx && (
                <ChevronForward
                  size={31.57}
                  className="mx-[2.63px] md:mx-[7.89px] lg:mx-[15.78px] w-[18.41px] h-[18.41px] md:w-[31.57px] md:h-[31.57px]"
                />
              )}
              <Link
                href={link}
                aria-label={idx === 0 ? "Home" : label}
                className={clsx("text-body-base flex items-center", {
                  "text-nowrap text-text-heading": idx !== links.length - 1,
                  "line-clamp-1 text-primary-dark": idx === links.length - 1,
                })}
              >
                {idx === 0 ? (
                  <>
                    {/* Mobile Home icon */}
                    <HomeFill
                      size={18.41}
                      className="sm:hidden w-[18.41px] h-[18.41px]"
                    />

                    {/* Tab Home text */}
                    <span className="hidden sm:inline">Home</span>
                  </>
                ) : (
                  label
                )}
              </Link>
            </li>
          ))}
        </ol>
      </StyledContainer>
    </section>
  );
}

const generateLinks = async (page) => {
  const links = [{ label: "Home", link: "/" }];

  // middle (dynamic parent links)
  links.push(...generateMiddleLinks(page));

  // current page
  links.push({ label: asText(page.data.title), link: page?.url });

  const s = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: links.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${projectConfig.productionUrl}${item.link}`,
    })),
  };

  const schema = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(s),
      }}
    />
  );

  return { links, schema };
};

const generateMiddleLinks = (page) => {
  const url = page?.url || "";
  const segments = url.split("/").filter(Boolean);

  // ✅ Investment Buy Detail Page
  if (segments[0] === "investment" && segments[1] === "buy" && segments[2]) {
    return [{ label: "Buy", link: "/investment/buy" }];
  }

  // ✅ Villa Design Detail Page
  if (segments[0] === "villa-designs" && segments[1]) {
    return [{ label: "Villa Design", link: "/villa-designs" }];
  }

  // Existing type-based breadcrumb rules
  switch (page?.type) {
    case "blog":
      return [{ label: "Blogs", link: "/blogs" }];
    default:
      return [];
  }
};
