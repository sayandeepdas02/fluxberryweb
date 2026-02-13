import { Button } from "../Button";
import Link from "next/link";
import LogoCloud from "./LogoCloud";
import { HeroVisual } from "./HeroVisual";
import { DarkModeOverlay } from "./DarkModeOverlay";

export default function HeroV3() {
  return (
    <div className="w-full bg-blue-700 relative opacity-0 animate-hero-wrapper">
      {/* Alpha overlay for dark mode */}
      <DarkModeOverlay />

      <section
        aria-labelledby="hero-title"
        className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto"
      >
        {/* Top Shaded Region */}
        <div className="absolute top-[64px] md:top-[80px] left-4 md:left-12 right-4 md:right-12 z-20">
          <div className="h-8 md:h-12 w-full bg-diagonal-hatch-white border-b border-white/20 bg-blue-800/20 opacity-60" />
        </div>

        {/* Horizontal line below top shaded region - constrained to vertical lines */}
        <div className="absolute top-[96px] md:top-[128px] left-4 md:left-12 right-4 md:right-12 h-px bg-white/20 z-30" />

        <div className="px-4 md:px-12 w-full h-full flex flex-col flex-grow relative">
          <div className="relative flex flex-col items-center justify-center sm:pt-48 pt-36 text-center px-6 sm:px-0">
            <div className="flex flex-col items-center w-full relative z-20">
              <span className="mb-6 mt-px ml-px inline-flex items-center h-[23px] justify-center border border-white/20 bg-white/10 px-3 text-xs font-medium text-white shadow-none transition-colors opacity-0 animate-hero-pill rounded-full">
                Currently in pilot with fast-growing startups
              </span>
              <h1
                id="hero-title"
                className="inline-block py-2 text-3xl font-bold tracking-tighter text-white sm:text-6xl opacity-0 animate-hero-title"
              >
                Hire Top Talent in 48 Hours <br className="hidden sm:block" />{" "}
                <span className="text-white/90">— Powered by AI</span>
              </h1>
            </div>

            {/* Bottom Content - In front of everything */}
            <div className="relative z-20 mt-auto flex flex-col items-center opacity-0 animate-hero-content">
              <p className="text-base sm:text-lg text-blue-50 mb-8 mt-4 max-w-2xl">
                Fluxberry AI is an end-to-end AI Hiring OS that helps startups and growing teams source, screen, interview, and onboard talent faster than ever before.
              </p>
              <p className="text-sm text-blue-200 mb-8 font-medium">
                From talent discovery to signed offer — everything in one intelligent system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-4 sm:px-0">
                <Button className="text-md px-6 bg-white rounded-none h-12 text-blue-700 hover:bg-blue-50 w-full sm:w-auto border-0 shadow-none font-bold">
                  <Link href="/waitlist">
                    Join the Waitlist
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-blue-300 mb-12">
                Early access members receive 25% off annual plans.
              </p>
            </div>
          </div>
        </div>

        {/* New Colorful Visual Section */}
        <div className="relative z-20">
          <HeroVisual />
        </div>

        {/* Shaded Region */}
        <div className="relative z-20 px-4 md:px-12">
          <div className="h-8 md:h-12 w-full bg-diagonal-hatch-white border-y border-white/20 bg-blue-800/20 opacity-60" />
        </div>

        <div className="mt-0 relative z-20 w-full">
          <div className="px-4 md:px-12 w-full mx-auto relative">
            <div className="absolute top-0 left-4 md:left-12 right-4 md:right-12 h-px bg-white/20 z-30" />
            <div className="absolute bottom-0 left-4 md:left-12 right-4 md:right-12 h-px bg-white/20 z-30" />
            <div className="w-full">
              {/* Keeping LogoCloud for visual consistency, but maybe we want to remove or update it later if it implies current customers */}
              <LogoCloud variant="white" className="bg-transparent" />
            </div>
          </div>
        </div>

        {/* Shaded Region Below Logos */}
        <div className="relative z-20 px-4 md:px-12">
          <div className="h-8 md:h-12 w-full bg-diagonal-hatch-white border-y border-white/20 bg-indigo-700/20 opacity-60" />
        </div>

        {/* Global Vertical Lines - Rendered last to ensure they are on top */}
        <div className="absolute top-[64px] md:top-[80px] bottom-0 left-4 md:left-12 w-px bg-white/20 z-30 pointer-events-none" />
        <div className="absolute top-[64px] md:top-[80px] bottom-0 right-4 md:right-12 w-px bg-white/20 z-30 pointer-events-none" />
      </section>
    </div>
  );
}
