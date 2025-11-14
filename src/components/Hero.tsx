"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-24 md:pt-28 pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto px-5">
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold tracking-[0.22em] text-sky-400 uppercase mb-4"
                >
                    FLOOR HOSTING · CLOUD PLATFORM
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50 max-w-3xl"
                >
                    Hosting that keeps your products online, fast and secure.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mt-5 text-sm md:text-base text-slate-400 max-w-xl leading-relaxed"
                >
                    Floor Hosting is a modern cloud platform for websites, APIs and web
                    apps. Deploy in minutes, scale automatically, and rely on production-grade
                    uptime — without the enterprise-grade complexity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    <button
                        className="px-6 py-2.5 rounded-lg bg-sky-400 text-slate-900 font-medium text-sm hover:bg-sky-300 transition"
                    >
                        Get started for free
                    </button>
                    <button
                        className="px-6 py-2.5 rounded-lg border border-slate-700 text-sm text-slate-100 hover:bg-slate-900/60 transition"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View pricing
                    </button>
                </motion.div>

                <p className="mt-4 text-xs text-slate-500">
                    No credit card required · Cancel anytime
                </p>
            </div>
        </section>
    );
}
