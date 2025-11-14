"use client";
import { motion } from "framer-motion";
import SectionShell from "@/components/ui/SectionShell";

const features = [
    {
        title: "Built for modern stacks",
        body: "Static sites, SSR frameworks, APIs and background jobs in one place, with zero-config HTTPS and global caching.",
    },
    {
        title: "Fast by default",
        body: "NVMe storage, HTTP/3, edge caching and smart routing so your users get a fast response from anywhere in the world.",
    },
    {
        title: "Secure out of the box",
        body: "Automatic TLS, DDoS protection, isolated runtimes and continuous backups keep your applications safe by design.",
    },
];

export default function FeaturesSection() {
    return (
        <SectionShell
            id="features"
            eyebrow="Platform"
            title="Everything you need to run production workloads"
            description="From your first landing page to multi-region applications, Floor Hosting stays fast, reliable and simple to operate."
        >
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, index) => (
                    <motion.article
                        key={feature.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition"
                    >
                        <h3 className="text-base md:text-lg font-semibold text-slate-50">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                            {feature.body}
                        </p>
                    </motion.article>
                ))}
            </div>
        </SectionShell>
    );
}
