"use client";

import { Badge } from "./Badge";
import NextLink from "next/link";
import { Button } from "../Button";
import {
    RiTimerFlashLine,
    RiFundsLine,
    RiUserSmileLine,
    RiMailSendLine
} from "@remixicon/react";

const ResultCard = ({
    value,
    label,
    icon: Icon
}: {
    value: string;
    label: string;
    icon: any;
}) => (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
        <div className="mb-4 p-3 bg-gray-100 dark:bg-slate-900 rounded-full text-black dark:text-white">
            <Icon className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {value}
        </div>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {label}
        </div>
    </div>
);

export default function EarlyResults() {
    return (
        <div className="w-full relative bg-white dark:bg-slate-950">
            <section className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto">
                <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />

                <div className="px-4 md:px-12 w-full flex flex-col relative">
                    {/* Background color layer */}
                    <div className="absolute inset-y-0 left-4 md:left-12 right-4 md:right-12 bg-slate-50 dark:bg-slate-900/50 -z-10" />

                    {/* Section Content */}
                    <div className="relative flex flex-col items-center justify-center sm:py-24 py-16 text-center bg-transparent">
                        <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0 mb-12">
                            <Badge className="mb-6 mt-px ml-px">Early Pilot Results</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl mb-6">
                                Measurable Improvements Across the <span className="text-highlight-blink">Funnel</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                                Select pilot teams are already seeing meaningful performance gains.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-2">
                            <ResultCard
                                value="48 Hours"
                                label="Sales Development roles closed"
                                icon={RiTimerFlashLine}
                            />
                            <ResultCard
                                value="3x Faster"
                                label="Stage-to-stage pipeline movement"
                                icon={RiFundsLine}
                            />
                            <ResultCard
                                value="60% Less"
                                label="Manual recruiter workload"
                                icon={RiUserSmileLine}
                            />
                            <ResultCard
                                value="40% Higher"
                                label="Candidate response rate"
                                icon={RiMailSendLine}
                            />
                        </div>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-12 mb-8 font-medium">
                            Reduce time-to-hire while increasing hiring quality and process consistency.
                        </p>

                        <Button className="text-md px-8 h-12 rounded-none bg-black text-white font-semibold shadow-md hover:bg-gray-800">
                            <NextLink href="/waitlist">
                                Join the Waitlist
                            </NextLink>
                        </Button>
                    </div>

                    {/* Bottom Shaded Region */}
                    <div className="h-8 md:h-12 w-full bg-diagonal-hatch border-y border-slate-200 dark:border-slate-900 relative z-20 bg-slate-50/50 dark:bg-slate-900/50 opacity-60" />
                </div>
            </section>
        </div>
    );
}
