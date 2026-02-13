"use client";

import { Badge } from "./Badge";
import NextLink from "next/link";
import { Button } from "../Button";
import {
    RiStackLine,
    RiBrainLine,
    RiFlashlightLine
} from "@remixicon/react";

const FeatureCard = ({
    title,
    description,
    icon: Icon
}: {
    title: string;
    description: string;
    icon: any;
}) => (
    <div className="flex flex-col p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 h-full group hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
        <div className="mb-6 p-3 bg-gray-100 dark:bg-slate-900 w-fit rounded-lg text-black dark:text-white">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
            {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
        </p>
    </div>
);

export default function WhyFluxBerry() {
    return (
        <div className="w-full relative bg-white dark:bg-slate-950">
            <section className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto">
                <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />

                <div className="px-4 md:px-12 w-full flex flex-col relative">

                    <div className="relative flex flex-col items-center justify-center sm:py-24 py-16 bg-transparent">
                        {/* Header */}
                        <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0 text-center mb-16">
                            <Badge className="mb-6">Why FluxBerry AI</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl">
                                Built as an <span className="text-highlight-blink">AI-Native Hiring System</span>
                            </h2>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1128px] mx-auto relative z-20">
                            <FeatureCard
                                title="Unified Hiring Infrastructure"
                                description="From first touch to signed offer, every stage lives in one connected workflow. No tool switching. No duplicated data."
                                icon={RiStackLine}
                            />
                            <FeatureCard
                                title="Automation at the Core"
                                description="AI assists with talent discovery, candidate ranking, screening workflows, interview evaluation, and follow-ups — reducing manual effort and increasing consistency."
                                icon={RiBrainLine}
                            />
                            <FeatureCard
                                title="Structured, Data-Driven Decisions"
                                description="Standardized scorecards, measurable funnel analytics, and real-time insights ensure hiring is predictable and performance-led."
                                icon={RiFlashlightLine}
                            />
                        </div>

                        {/* CTA */}
                        <div className="mt-16 flex justify-center w-full">
                            <Button className="text-md px-8 h-12 rounded-none bg-black text-white font-semibold shadow-md hover:bg-gray-800">
                                <NextLink href="/waitlist">
                                    Join the Waitlist
                                </NextLink>
                            </Button>
                        </div>

                    </div>

                    {/* Bottom Shaded Region */}
                    <div className="h-8 md:h-12 w-full bg-diagonal-hatch border-y border-slate-200 dark:border-slate-900 relative z-20 bg-slate-50/50 dark:bg-slate-900/50 opacity-60" />
                </div>
            </section>
        </div>
    );
}
