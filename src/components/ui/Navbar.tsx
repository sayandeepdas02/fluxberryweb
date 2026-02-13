"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { cx } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../Button";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={cx(
        "w-full z-50",
        isHomePage ? "absolute top-0" : "relative h-16 md:h-20",
      )}
    >
      <header
        className={cx(
          "z-50 flex transform-gpu opacity-0 animate-navbar justify-center overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
          "left-4 md:left-12 right-4 md:right-12 absolute border-b",
          isHomePage
            ? "border-white/20"
            : "border-slate-200 dark:border-slate-900 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md",
          open === true
            ? "h-auto pb-8 pt-2 top-2 rounded-2xl"
            : "h-16 md:h-20 top-0",
          open === true
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl shadow-2xl shadow-black/10"
            : "bg-transparent",
        )}
      >
        <div className="w-full flex flex-col justify-start">
          <div
            className={cx(
              "relative flex items-center justify-between h-16 md:h-20 shrink-0",
              open ? "px-6" : "px-0",
            )}
          >
            <Link href="/" aria-label="Home" className="flex items-center gap-2">
              <span className={cx(
                "font-bold text-xl tracking-tight transition-colors",
                isHomePage && !open ? "text-white" : "text-black dark:text-white"
              )}>
                Fluxberry AI
              </span>
            </Link>

            <div className="flex items-center gap-3 sm:gap-6 md:mr-1">
              <div className="hidden md:flex">
                <ThemeToggle
                  variant={isHomePage && !open ? "white" : "default"}
                />
              </div>
              <Button
                asChild
                className={cx(
                  "hidden px-4 md:flex rounded-none transition-all",
                  isHomePage && !open
                    ? "bg-white text-black hover:bg-gray-50 border-0 shadow-none"
                    : "border-gray-200 dark:border-gray-700 ring-2 ring-gray-200 dark:ring-gray-700 border-1 bg-black dark:bg-white text-white dark:text-black shadow-none hover:bg-gray-900 dark:hover:bg-gray-100",
                )}
              >
                <Link href="/waitlist">
                  Join the Waitlist
                </Link>
              </Button>
              <div className="md:hidden">
                <Button
                  onClick={() => setOpen(!open)}
                  variant="ghost"
                  className={cx(
                    "aspect-square p-2 transition-colors border-0 hover:bg-transparent",
                    isHomePage && !open
                      ? "text-white hover:text-white/80"
                      : "text-slate-900 dark:text-slate-100 hover:text-black dark:hover:text-white",
                  )}
                >
                  {open ? (
                    <RiCloseLine aria-hidden="true" className="size-5" />
                  ) : (
                    <RiMenuLine aria-hidden="true" className="size-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          <nav
            className={cx("flex flex-col md:hidden", open ? "pb-8" : "hidden")}
          >
            <ul className="flex flex-col font-semibold w-full">
              <li className="pt-6 px-6">
                <Button
                  asChild
                  className="w-full h-12 !rounded-none bg-black text-white font-bold border-0 shadow-none text-md dark:bg-white dark:text-black"
                >
                  <Link href="/waitlist">
                    Join the Waitlist
                  </Link>
                </Button>
              </li>
              <li className="flex justify-center pt-6">
                <ThemeToggle variant="default" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
