"use client";

import { siteConfig } from "@/app/siteConfig";
import {
  company,
  github,
  legal,
  social,
} from "@/lib/links";
import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { Button } from "../Button";
const navigation = {
  // ... (rest of navigation object remains the same)
  company: [
    { name: "About", href: "/about", external: false },
    { name: "Careers", href: company.CAREERS, external: true },
    { name: "Contact", href: social.CALENDLY, external: true },
  ],
  product: [
    { name: "Talent Sourcing", href: "#", external: false },
    { name: "Job Board & ATS", href: "#", external: false },
    { name: "Interview Automation", href: "#", external: false },
    { name: "Onboarding", href: "#", external: false },
  ],
  connect: [
    { name: "LinkedIn", href: social.LINKEDIN, external: true },
    { name: "X", href: social.TWITTER, external: true },
    { name: "GitHub", href: github.REPO, external: true },
  ],
  legal: [
    { name: "Privacy Policy", href: legal.PRIVACY, external: false },
    { name: "Terms of Service", href: legal.TERMS, external: false },
  ],
};

export default function Footer() {
  return (
    <div className="w-full relative bg-black">
      <footer
        id="footer"
        className="relative w-full overflow-hidden max-w-[1440px] mx-auto bg-black text-white"
      >
        <div className="absolute inset-y-0 left-4 md:left-12 w-px z-30 pointer-events-none bg-white/20" />
        <div className="absolute inset-y-0 right-4 md:right-12 w-px z-30 pointer-events-none bg-white/20" />

        {/* Horizontal Line constrained to vertical lines */}
        <div className="absolute top-0 left-4 md:left-12 right-4 md:right-12 h-px z-30 bg-white/20" />

        <div className="px-4 md:px-12 w-full flex flex-col relative pb-0">
          <div className="relative w-full pt-16 md:pt-24 pb-0 px-6 md:px-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-20">
              <div className="space-y-8">
                <Link href={siteConfig.baseLinks.home}>
                  <span className="font-bold text-xl tracking-tight transition-colors text-white">
                    Fluxberry AI
                  </span>
                </Link>
                <p className="mt-4 md:mt-8 text-sm leading-6 max-w-xs text-gray-400">
                  AI-Native Hiring Infrastructure for Modern Teams
                </p>
                <div className="md:pt-4">
                  <Button
                    asChild
                    className="h-10 rounded-none shadow-none font-semibold bg-white text-black ring-2 ring-white/50 border-1 border-white hover:bg-gray-100"
                  >
                    <Link href="/waitlist">
                      Join the Waitlist
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.company.map((item) => (
                        <li key={item.name} className="w-fit">
                          <Link
                            className="flex rounded-md text-sm transition text-gray-400 hover:text-white"
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                          >
                            <span>{item.name}</span>
                            {item.external && (
                              <div className="ml-1 aspect-square size-3 rounded-full p-px bg-white/10">
                                <RiArrowRightUpLine
                                  aria-hidden="true"
                                  className="size-full shrink-0 text-white"
                                />
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Product
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.product.map((item) => (
                        <li key={item.name} className="w-fit">
                          <Link
                            className="flex rounded-md text-sm transition text-gray-400 hover:text-white"
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                          >
                            <span>{item.name}</span>
                            {item.external && (
                              <div className="ml-1 aspect-square size-3 rounded-full p-px bg-white/10">
                                <RiArrowRightUpLine
                                  aria-hidden="true"
                                  className="size-full shrink-0 text-white"
                                />
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Connect
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.connect.map((item) => (
                        <li key={item.name} className="w-fit">
                          <Link
                            className="flex rounded-md text-sm transition text-gray-400 hover:text-white"
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                          >
                            <span>{item.name}</span>
                            {item.external && (
                              <div className="ml-1 aspect-square size-3 rounded-full p-px bg-white/10">
                                <RiArrowRightUpLine
                                  aria-hidden="true"
                                  className="size-full shrink-0 text-white"
                                />
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Legal
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.legal.map((item) => (
                        <li key={item.name} className="w-fit">
                          <Link
                            className="flex rounded-md text-sm transition text-gray-400 hover:text-white"
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                          >
                            <span>{item.name}</span>
                            {item.external && (
                              <div className="ml-1 aspect-square size-3 rounded-full p-px bg-white/10">
                                <RiArrowRightUpLine
                                  aria-hidden="true"
                                  className="size-full shrink-0 text-white"
                                />
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-16 md:mt-24">
            <div className="absolute top-0 left-0 right-0 h-px z-30 bg-white/20" />
            <div className="w-full px-6 md:px-12 pt-8 sm:pt-4 pb-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Fluxberry AI, Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
