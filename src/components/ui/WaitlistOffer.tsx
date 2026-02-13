"use client";

import NextLink from "next/link";
import { Button } from "../Button";
import { RiCheckLine } from "@remixicon/react";

export default function WaitlistOffer() {
    const benefits = [
        "Priority onboarding",
        "Direct product feedback channel",
        "25% discount on annual plans",
        "Locked-in early pricing"
    ];

    return (
        <div className="w-full relative bg-gray-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
            <section className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto">
                <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />

                <div className="px-4 md:px-12 w-full flex flex-col relative">
                    <div className="relative flex flex-col items-center justify-center sm:py-24 py-16 text-center">

                        <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl mb-6">
                                Join Early. <span className="text-highlight-blink">Hire Smarter.</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-12">
                                We’re opening access in phases. All early access members receive exclusive benefits.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-12">
                                <div className="flex flex-col gap-4 text-left">
                                    {benefits.slice(0, 2).map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black">
                                                <RiCheckLine className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 dark:text-slate-200 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4 text-left">
                                    {benefits.slice(2, 4).map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black">
                                                <RiCheckLine className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 dark:text-slate-200 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full max-w-sm">
                                <Button className="w-full text-md h-14 rounded-full bg-black text-white font-bold shadow-lg hover:bg-gray-900 hover:scale-105 transition-all">
                                    <NextLink href="/waitlist">
                                        Join the Waitlist
                                    </NextLink>
                                </Button>
                                <p className="text-xs text-slate-500 mt-4">
                                    No credit card required. We’ll notify you once access opens.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
