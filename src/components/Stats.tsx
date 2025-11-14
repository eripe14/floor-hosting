"use client";
import { motion } from "framer-motion";
import SectionShell from "@/components/ui/SectionShell";

const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "300+", label: "Edge locations worldwide" },
    { value: "2.4M+", label: "Requests handled every day" },
    { value: "< 15 min", label: "Average support response time" },
];

export default function Stats() {
    return (
        <SectionShell
            id="stats"
            eyebrow="Reliability"
            title="Numbers that actually matter in production"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
                {stats.map((s, index) => (
                    <motion.article
                        key={s.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition"
                    >
                        <p className="text-xl md:text-2xl font-semibold text-slate-50">
                            {s.value}
                        </p>
                        <p className="mt-2 text-[11px] md:text-xs text-slate-400">
                            {s.label}
                        </p>
                    </motion.article>
                ))}
            </div>
        </SectionShell>
    );
}
