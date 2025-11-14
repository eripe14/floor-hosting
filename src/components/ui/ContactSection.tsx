"use client";

import React, { useState } from "react";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sent">("idle");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 4000);
    }

    return (
        <section className="px-4 py-12 md:py-16">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-xl shadow-sky-500/10 backdrop-blur">
                <div className="mb-8 space-y-2 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                        Contact
                    </p>
                    <h1 className="text-2xl font-semibold sm:text-3xl">
                        Let&apos;s talk about your infrastructure
                    </h1>
                    <p className="text-sm text-slate-400 sm:text-base">
                        Tell us a bit about your project and we&apos;ll get back to you
                        with a tailored hosting recommendation.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-1">
                        <label className="text-sm font-medium text-slate-100">
                            Full name
                        </label>
                        <input
                            required
                            placeholder="Alex Johnson"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-400 focus:ring"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                        <label className="text-sm font-medium text-slate-100">
                            Work email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-400 focus:ring"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                        <label className="text-sm font-medium text-slate-100">
                            Company
                        </label>
                        <input
                            placeholder="Floor Studio"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-400 focus:ring"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                        <label className="text-sm font-medium text-slate-100">
                            Monthly traffic
                        </label>
                        <select
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-400 focus:ring"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option>&lt; 100k pageviews</option>
                            <option>100k – 1M pageviews</option>
                            <option>1M – 10M pageviews</option>
                            <option>&gt; 10M pageviews</option>
                        </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-100">
                            What do you want to deploy?
                        </label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Static marketing site, Next.js SaaS dashboard, APIs, background jobs..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-sky-500/40 focus:border-sky-400 focus:ring resize-none"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                            <input
                                id="newsletter"
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-500 focus:ring-sky-500"
                            />
                            <label htmlFor="newsletter">
                                I&apos;d like to receive product updates and best practices.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-sky-400"
                        >
                            {status === "sent" ? "Message sent ✓" : "Send message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
