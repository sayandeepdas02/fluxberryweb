"use client";

import { Badge } from "./Badge";

export default function TheProblem() {
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
                        <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0">
                            <Badge className="mb-6 mt-px ml-px">The Problem</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl mb-8">
                                Hiring Is <span className="text-highlight-blink">Broken</span>
                            </h2>

                            <div className="max-w-3xl mx-auto">
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                                    Recruiters juggle sourcing tools, spreadsheets, job boards, ATS systems, email threads, interview coordination, and onboarding documents — all disconnected.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-4xl text-left">
                                <div className="bg-white dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                                    <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">This leads to:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">•</span>
                                            <span className="text-slate-600 dark:text-slate-400">Slow hiring cycles</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">•</span>
                                            <span className="text-slate-600 dark:text-slate-400">Poor candidate experience</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">•</span>
                                            <span className="text-slate-600 dark:text-slate-400">Missed top talent</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">•</span>
                                            <span className="text-slate-600 dark:text-slate-400">Manual repetitive work</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">•</span>
                                            <span className="text-slate-600 dark:text-slate-400">No visibility into funnel performance</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col justify-center items-center text-center p-8">
                                    <p className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-6">
                                        Hiring today is fragmented.
                                    </p>
                                    <div className="h-16 w-px bg-slate-200 dark:bg-slate-800 mb-6"></div>
                                    <p className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                                        Fluxberry AI fixes that.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Shaded Region */}
                    <div className="h-8 md:h-12 w-full bg-diagonal-hatch border-y border-slate-200 dark:border-slate-900 relative z-20 bg-slate-50/50 dark:bg-slate-900/50 opacity-60" />
                </div>
            </section>
        </div>
    );
}
