"use client";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { usePathname } from "next/navigation";

/**
 * @typedef {import("@prismicio/client").Content.MenuItemSlice} MenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuItemSlice>} MenuItemProps
 * @param {MenuItemProps}
 */
const MenuItem = ({ slice, setMobileMenuOpen }) => {
  const { link, label } = slice.primary;
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const isCta = !!slice.primary?.is_cta;

  const dropdown = slice.primary.dropdown || [];

  return (
    <li
      className={clsx({
        "relative text-body-small text-slate-800 pointer-events-auto main-nav-item": true,
        "flex  flex-col w-full xl:w-auto": true,
        "xl:items-center justify-center": !isCta,
        "items-start": isCta,
      })}
      onMouseEnter={() => setMenuOpened(true)}
      onMouseLeave={() => setMenuOpened(false)}
      onClick={() => setMobileMenuOpen(false)}
    >
      <PrismicNextLink
        field={link}
        className={clsx({
          "header-nav-link py-2 xl:py-0": true,
          "btn btn-primary": isCta,
          "w-full flex items-center": !isCta,
          "is-active": link.url == pathname, // && pathname != "/"
        })}
      >
        <span className={"block!"}>{link.text}</span>
        {dropdown?.length ? (
          <button
            aria-label={menuOpened ? "Close submenu" : "Open submenu"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMenuOpened(!menuOpened);
            }}
            className={"ms-auto p-2 -my-2 -mr-2 xl:p-0 xl:m-0"}
          >
            <HiChevronDown
              size={20}
              className={clsx(
                "transition-transform duration-300 mt-[2px] xl:mt-1 ml-2 xl:ml-[2px]",
                menuOpened ? "-scale-[1]" : "scale-[1]",
              )}
            />
          </button>
        ) : null}
      </PrismicNextLink>
      {dropdown?.length ? (
        <div className="main-nav-dropdown-links-wrapper">
          <ul
            className={clsx({
              "main-nav-dropdown-links-inner-wrapper": true,
            })}
            style={{ display: menuOpened ? "block" : "none" }}
          >
            {dropdown.map((item, idx) => (
              <li key={idx}>
                <PrismicNextLink field={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
