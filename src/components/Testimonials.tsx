"use client";

import SectionShell from "@/components/ui/SectionShell";
import {motion} from "framer-motion";

const testimonials = [
    {
        name: "Lena, Product Lead",
        company: "XYZ Corp",
        text: "We moved three client projects to Floor Hosting and haven't had to think about uptime since.",
    },
    {
        name: "Malik, Founder",
        company: "ABC Studios",
        text: "Deploys are instant, rollbacks are painless, and the support team actually knows what they’re doing.",
    },
    {
        name: "Sara, Developer",
        company: "DEF Inc",
        text: "The platform feels like it was designed by people who ship products, not just infrastructure.",
    },
];

export default function Testimonials() {
    return (
        <SectionShell
            id="testimonials"
            eyebrow="Customers"
            title="Teams that build fast stay with Floor Hosting"
        >
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((t, index) => (
                    <motion.article
                        key={t.name}
                        initial={{opacity: 0, y: 18}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.05}}
                        whileHover={{y: -6, scale: 1.02}}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition"
                    >
                        <p className="text-xl md:text-2xl font-semibold text-slate-50 text-justify">
                            {t.text}
                        </p>
                        <div className="mt-4 text-xs text-slate-400">
                            <p className="font-semibold text-slate-100">{t.name}</p>
                            <p>{t.company}</p>
                        </div>
                    </motion.article>
            ))}
        </div>
</SectionShell>
)
    ;
}
