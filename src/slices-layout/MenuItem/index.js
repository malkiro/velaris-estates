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
      <div
        className={clsx({
          "w-full flex items-center justify-between": !isCta,
          "btn btn-primary": isCta,
        })}
      >
        <PrismicNextLink
          field={link}
          className={clsx({
            "header-nav-link py-3 xl:py-0": true,
            "is-active": link.url == pathname,
          })}
        >
          <span className={"block!"}>{link.text}</span>
        </PrismicNextLink>
        {dropdown?.length ? (
          <button
            aria-label={menuOpened ? "Close submenu" : "Open submenu"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMenuOpened(!menuOpened);
            }}
            className={"p-2 ml-2 xl:p-0 xl:m-0 flex-shrink-0 min-w-[44px] min-h-[44px] xl:min-w-[20px] xl:min-h-[20px] flex items-center justify-center"}
          >
            <HiChevronDown
              size={20}
              className={clsx(
                "transition-transform duration-300",
                menuOpened ? "-scale-[1]" : "scale-[1]",
              )}
            />
          </button>
        ) : null}
      </div>
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
