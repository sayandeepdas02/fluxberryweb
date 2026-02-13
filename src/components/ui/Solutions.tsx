"use client";

import { Badge } from "./Badge";
import {
    RiSearchEyeLine,
    RiLayoutTopLine,
    RiQuestionAnswerLine,
    RiFilePaper2Line
} from "@remixicon/react";

const SolutionCard = ({
    number,
    title,
    description,
    features,
    outcome,
    icon: Icon
}: {
    number: string;
    title: string;
    description: string;
    features: string[];
    outcome: string;
    icon: any;
}) => (
    <div className="flex flex-col md:flex-row gap-8 items-start p-8 md:p-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
        <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-700 dark:text-blue-400">
                <Icon className="w-8 h-8" />
            </div>
            <div className="mt-4 text-sm font-mono font-semibold text-slate-400 text-center">
                {number}
            </div>
        </div>

        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-2">
                {title}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-400">Outcome:</span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{outcome}</span>
            </div>
        </div>
    </div>
);

export default function Solutions() {
    return (
        <div className="w-full relative bg-slate-50/50 dark:bg-slate-950/50">
            <section className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto">
                <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />

                <div className="px-4 md:px-12 w-full flex flex-col relative">

                    <div className="relative flex flex-col items-center justify-center sm:py-24 py-16 bg-transparent">
                        {/* Header */}
                        <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0 text-center mb-16">
                            <Badge className="mb-6">Our Solutions</Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-blue-950 dark:text-white sm:text-5xl mb-4">
                                Four Intelligent Modules. <br className="hidden sm:block" /> One Hiring Engine.
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                Fluxberry AI is built as four tightly integrated products working together.
                            </p>
                        </div>

                        {/* Solutions List */}
                        <div className="flex flex-col gap-6 w-full max-w-[1128px] mx-auto relative z-20">
                            <SolutionCard
                                number="01"
                                title="AI Talent Sourcing"
                                icon={RiSearchEyeLine}
                                description="Search, discover, and engage top candidates instantly."
                                features={[
                                    "AI semantic talent search",
                                    "Structured filtering and ranking",
                                    "Prospect CRM",
                                    "Automated outreach sequences",
                                    "Smart job matching"
                                ]}
                                outcome="Build qualified pipelines before you even post a job."
                            />

                            <SolutionCard
                                number="02"
                                title="Modern Job Board & Applicant Tracking"
                                icon={RiLayoutTopLine}
                                description="Create branded career pages and manage applicants through structured hiring pipelines."
                                features={[
                                    "Custom career pages",
                                    "Application form builder",
                                    "Drag-and-drop pipelines",
                                    "Resume parsing",
                                    "Recruiter collaboration",
                                    "Workflow automation"
                                ]}
                                outcome="Move candidates from application to offer with clarity and control."
                            />

                            <SolutionCard
                                number="03"
                                title="Interview Intelligence"
                                icon={RiQuestionAnswerLine}
                                description="Standardize interviews, reduce bias, and accelerate decision-making."
                                features={[
                                    "Structured scorecards",
                                    "Automated interview scheduling",
                                    "AI-assisted evaluation",
                                    "Interview feedback tracking",
                                    "Performance analytics"
                                ]}
                                outcome="Hire based on data, not gut feeling."
                            />

                            <SolutionCard
                                number="04"
                                title="Offer & Onboarding Automation"
                                icon={RiFilePaper2Line}
                                description="Close the hiring loop with seamless offer generation and document collection."
                                features={[
                                    "Offer letter generation",
                                    "E-signature flow",
                                    "Document upload portal",
                                    "Onboarding checklist",
                                    "Candidate status tracking"
                                ]}
                                outcome="Deliver a smooth experience from offer acceptance to Day 1."
                            />
                        </div>

                    </div>

                    {/* Bottom Shaded Region */}
                    <div className="h-8 md:h-12 w-full bg-diagonal-hatch border-y border-slate-200 dark:border-slate-900 relative z-20 bg-slate-50/50 dark:bg-slate-900/50 opacity-60" />
                </div>
            </section>
        </div>
    );
}
