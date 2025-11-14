"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionShell from "@/components/ui/SectionShell";

const faq = [
    {
        q: "Can you migrate my existing website?",
        a: "Yes! Our team can fully migrate your site or app at no additional cost.",
    },
    {
        q: "Do you provide automatic backups?",
        a: "Backups run every day on Starter, hourly on Pro and custom intervals on Scale.",
    },
    {
        q: "Is there a long-term contract?",
        a: "No. All plans are monthly and you can upgrade, downgrade or cancel any time.",
    },
    {
        q: "Do you offer real-time logs and metrics?",
        a: "Yes. All plans include logs, metrics, dashboards and instant alerts.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionShell
            id="faq"
            eyebrow="FAQ"
            title="Answers to common questions"
            description="If you don't see the answer you're looking for, contact our team."
        >
            <div className="space-y-4">
                {faq.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={item.q}
                            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            {/* QUESTION */}
                            <div className="flex justify-between items-center">
                                <p className="text-sm md:text-base text-slate-100 font-medium">
                                    {item.q}
                                </p>

                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="text-slate-400"
                                >
                                    ▼
                                </motion.span>
                            </div>

                            {/* ANSWER */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </SectionShell>
    );
}
