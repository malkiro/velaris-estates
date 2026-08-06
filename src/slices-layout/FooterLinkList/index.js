"use client";

import { useMemo, useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { HiChevronDown } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const FooterLinkList = ({ slice }) => {
  if (!slice) return null;

  const items = slice?.primary?.nav_links ?? [];
  const pathname = usePathname();

  // Group "Child" items under the most recent "Parent"
  const grouped = useMemo(() => {
    const out = [];
    let currentParent = null;

    items.forEach((item, idx) => {
      const kind = item?.type;

      if (kind === "Parent") {
        currentParent = {
          ...item,
          _key: item?.link?.id || item?.link?.uid || `parent-${idx}`,
          children: [],
        };
        out.push(currentParent);
        return;
      }

      if (kind === "Child" && currentParent) {
        currentParent.children.push({
          ...item,
          _key: item?.link?.id || item?.link?.uid || `child-${idx}`,
        });
        return;
      }

      // Fallback: treat anything else as standalone
      out.push({
        ...item,
        _key: item?.link?.id || item?.link?.uid || `item-${idx}`,
        children: null,
      });
      currentParent = null;
    });

    return out;
  }, [items]);

  // Track open/closed per parent
  const [open, setOpen] = useState({});

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Check if a link is active
  const isLinkActive = (link) => {
    if (!link?.url) return false;
    return link.url === pathname;
  };

  return (
    <div>
      <div className="text-title-medium title-font font-medium mb-[18px]">
        {slice.primary.title}
      </div>

      <ul className=" flex flex-col gap-[14px]">
        {grouped.map((item) => {
          const isParent = item?.type === "Parent";
          const hasChildren = isParent && (item.children?.length ?? 0) > 0;
          const isOpen = !!open[item._key];

          if (!isParent) {
            return (
              <li key={item._key}>
                <PrismicNextLink
                  field={item.link}
                  className={clsx("text-body-base footer-nav-link", {
                    "is-active": isLinkActive(item.link),
                  })}
                />
              </li>
            );
          }

          return (
            <li key={item._key}>
              <div className="flex items-center gap-[14px]">
                {/* Parent link still navigates */}
                <PrismicNextLink
                  field={item.link}
                  className={clsx("text-body-base footer-nav-link", {
                    "is-active": isLinkActive(item.link),
                  })}
                />

                {/* Only the arrow toggles dropdown */}
                {hasChildren && (
                  <button
                    type="button"
                    aria-label={isOpen ? "Collapse links" : "Expand links"}
                    onClick={() => toggle(item._key)}
                    className="cursor-pointer"
                  >
                    <HiChevronDown
                      size={20}
                      className={clsx(
                        "transition-transform duration-500 ease-in-out",
                        isOpen ? "rotate-180" : "rotate-0",
                      )}
                    />
                  </button>
                )}
              </div>

              {hasChildren && (
                <div
                  className={clsx(
                    "overflow-hidden transition-[max-height] duration-500 ease-in-out",
                    isOpen ? "max-h-[800px]" : "max-h-0 pointer-events-none",
                  )}
                >
                  <ul className="flex flex-col gap-[14px] mt-[14px] pl-[16px]">
                    {item.children.map((child) => (
                      <li key={child._key}>
                        <PrismicNextLink
                          field={child.link}
                          className={clsx("text-body-base footer-nav-link", {
                            "is-active": isLinkActive(child.link),
                          })}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinkList;
