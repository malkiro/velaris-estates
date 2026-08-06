"use client";

import { useEffect, useRef, useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import MenuItem from "@/slices-layout/MenuItem";
import dynamic from "next/dynamic";
import ContactLink from "./components/ContactLink";
import hamburgerCloseAnim from "@/animations/hamburger-close.json";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const NavContainer = ({ settings, navigation }) => {
  // stickyMenu = navbar visible
  const [stickyMenu, setStickyMenu] = useState(true);

  // Scroll tracking via refs (no rerenders)
  const lastYRef = useRef(0);
  const lastDirRef = useRef("up"); // "up" | "down"
  const dirChangeYRef = useRef(0);
  const tickingRef = useRef(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (mobileMenuOpen) setStickyMenu(true);
  }, [mobileMenuOpen]);

  useEffect(() => {
    // initialize
    lastYRef.current = window.scrollY || 0;
    dirChangeYRef.current = lastYRef.current;

    const TOP_LOCK_Y = 120; // keep navbar visible in hero/top zone
    const REVEAL_DELTA = 5; // how much upward movement before showing

    const update = () => {
      tickingRef.current = false;

      // when mobile menu is open, keep navbar visible no matter what
      if (mobileMenuOpen) {
        if (!stickyMenu) setStickyMenu(true);
        // keep refs in sync so we don't "jump" when closing menu
        lastYRef.current = window.scrollY || 0;
        dirChangeYRef.current = lastYRef.current;
        lastDirRef.current = "up";
        return;
      }

      const y = window.scrollY || 0;
      const lastY = lastYRef.current;

      // Determine direction
      const dir = y > lastY ? "down" : y < lastY ? "up" : lastDirRef.current;

      // Track direction change start point
      if (dir !== lastDirRef.current) {
        lastDirRef.current = dir;
        dirChangeYRef.current = y;
      }

      let nextVisible = stickyMenu;

      // Lock visible near top/hero to avoid flicker
      if (y <= TOP_LOCK_Y) {
        nextVisible = true;
      } else if (dir === "down") {
        nextVisible = false;
      } else {
        // dir === "up"
        // Reveal only after scrolling up enough from where "up" started
        if (dirChangeYRef.current - y > REVEAL_DELTA) {
          nextVisible = true;
        }
      }

      // Only update state when it actually changes (avoids flicker/jank)
      if (nextVisible !== stickyMenu) setStickyMenu(nextVisible);

      lastYRef.current = y;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyMenu, mobileMenuOpen]);

  // Lottie ref + play forward/back based on state (unchanged)
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current?.goToAndStop(0, true);
  }, []);

  useEffect(() => {
    const inst = lottieRef.current;
    if (!inst) return;

    inst.setSpeed(1.25);

    if (mobileMenuOpen) {
      inst.playSegments([0, 30], true); // hamburger -> X
    } else {
      inst.playSegments([30, 0], true); // X -> hamburger
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={clsx({
        "z-50 sticky transition-[top] duration-500 bg-white backdrop-blur-[7.5px] backdrop-saturate-150 border-b-1 border-primary-dark": true,
        "top-[-150px]": !stickyMenu,
        "top-0 ": stickyMenu,
      })}
    >
      <div
        className={clsx({
          "transition-all duration-500 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[10px]": true,
          "h-[56px] md:min-h-[64px] xl:h-[116px]": stickyMenu,
          "h-[56px] md:h-[64px] xl:h-[116px]": !stickyMenu,
        })}
      >
        <PrismicNextLink
          href="/"
          aria-label="Go to home page"
          className="text-xl inline-block ml-[16px] md:ml-[40px] xl:ml-[80px] font-semibold tracking-tight"
        >
          <PrismicNextImage
            field={settings.data.header_logo}
            fallbackAlt=""
            className="h-12 xl:h-25 w-auto object-contain"
          />
        </PrismicNextLink>

        <button
          className={clsx({
            "xl:hidden flex items-center mr-[16px] md:mr-[40px] z-1000": true,
            "z-1000": mobileMenuOpen,
          })}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          onClick={toggleMenu}
          type="button"
        >
          <div className="w-[32px] h-[32px] cursor-pointer">
            <Lottie
              lottieRef={lottieRef}
              animationData={hamburgerCloseAnim}
              autoplay={false}
              loop={false}
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </button>

        <div
          className={clsx({
            "fixed h-screen w-screen ms-auto z-100 top-0 right-0 bg-[rgba(0,0,0,0.5)] xl:static transition-[opacity] duration-300 ease-linear xl:opacity-100 xl:bg-transparent xl:block xl:w-auto xl:h-auto": true,
            "opacity-100": mobileMenuOpen,
            "opacity-0 pointer-events-none xl:pointer-events-auto delay-200":
              !mobileMenuOpen,
            "xl:flex xl:h-full": true,
          })}
          onClick={closeMobileMenu}
        >
          <div className="xl:flex flex-col justify-center xl:pr-[32px] overflow-x-hidden xl:overflow-x-visible">
            <div className="hidden pb-[8px] mb-[8px] border-b border-b-text-heading xl:flex gap-[36px] items-center flex-nowrap">
              <ContactLink type="email" field={settings.data.header_email} />
              <ContactLink type="phone" field={settings.data.header_phone} />
            </div>
            <nav
              className={clsx({
                "bg-primary-white xl:bg-transparent min-h-screen w-[250px] md:w-[300px] ms-auto transition-transform ease-linear xl:translate-x-0! xl:w-auto xl:min-h-0 pointer-events-auto": true,
                "translate-x-0 delay-200": mobileMenuOpen,
                "translate-x-full": !mobileMenuOpen,
              })}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="pt-[56px] md:pt-[64px] flex flex-wrap gap-6 md:gap-[38px] p-4 xl:p-0">
                {navigation.data.main_menu?.map((slice) => {
                  return (
                    <MenuItem
                      key={slice.id}
                      slice={slice}
                      setMobileMenuOpen={setMobileMenuOpen}
                    />
                  );
                })}
              </ul>
              <div className="mx-[16px] mt-[22px] xl:hidden">
                <PrismicNextLink
                  field={settings.data.header_cta}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-full justify-center btn cursor-pointer btn-primary"
                />
              </div>
            </nav>
          </div>
          <PrismicNextLink
            field={settings.data.header_cta}
            className="px-[65px] inline-flex h-full cursor-pointer bg-primary-dark hover:bg-secondary-dark duration-200 transition-[background-color] items-center justify-center text-[#FBFBFB] text-[18px] leading-[13px]"
          />
        </div>
      </div>
    </header>
  );
};

export default NavContainer;
