"use client";
import SectionShell from "@/components/ui/SectionShell";
import {motion} from "framer-motion";

const items = [
    {
        title: "Global edge network",
        body: "Serve content close to your users with a globally distributed edge network and smart routing.",
    },
    {
        title: "Modern runtimes",
        body: "Run Node.js, Deno or serverless functions with cold starts optimized for real-world usage.",
    },
    {
        title: "Observability",
        body: "Dashboards, logs and metrics out of the box, so you always know what is happening in production.",
    },
];

export default function Tech() {
    return (
        <SectionShell
            id="tech"
            eyebrow="Technology"
            title="Under the hood, it’s serious engineering"
            description="We combine modern hardware, optimized runtimes and global networking so your team can focus on building – not on firefighting."
        >
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {items.map((item, index) => (
                    <motion.article
                        key={item.title}
                        initial={{opacity: 0, y: 18}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.05}}
                        whileHover={{y: -6, scale: 1.02}}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition"
                    >
                        <p className="text-xl md:text-2xl font-semibold text-slate-50">
                            {item.title}
                        </p>
                        <p className="mt-2 text-[11px] md:text-xs text-slate-400">
                            {item.body}
                        </p>
                    </motion.article>
            ))}
        </div>
</SectionShell>
)
    ;
}