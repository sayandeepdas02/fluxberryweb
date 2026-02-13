"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";

export default function WaitlistPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
                <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-8 h-8 text-green-600 dark:text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Thank you for joining!
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        We’ll be in touch shortly with next steps and early access details.
                    </p>
                    <Button className="mt-8 w-full" variant="secondary" onClick={() => window.location.href = '/'}>
                        Return to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-12 flex flex-col items-center  bg-slate-50 dark:bg-slate-950 px-4">
            <div className="max-w-xl w-full">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Join the Fluxberry AI Waitlist
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Get early access to the AI Hiring OS that helps you hire top talent in 48 hours.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                required
                                placeholder="Jane Doe"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="jane@company.com"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                                id="company"
                                required
                                placeholder="Acme Inc."
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="volume">Hiring Volume per Month</Label>
                            <select
                                id="volume"
                                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                            >
                                <option value="1-5">1-5 roles</option>
                                <option value="5-10">5-10 roles</option>
                                <option value="10-20">10-20 roles</option>
                                <option value="20+">20+ roles</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tools">Current Hiring Tools (Optional)</Label>
                            <Textarea
                                id="tools"
                                placeholder="Greenhouse, Lever, Ashby, etc."
                                className="w-full"
                            />
                        </div>

                        <Button type="submit" className="w-full h-12 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white">
                            Join the Waitlist
                        </Button>

                        <p className="text-center text-xs text-slate-500 mt-4">
                            No credit card required. We’ll notify you once access opens.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
