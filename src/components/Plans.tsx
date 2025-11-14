import SectionShell from "@/components/ui/SectionShell";

const plans = [
    {
        name: "Starter",
        price: "$9 / month",
        tagline: "For personal sites, prototypes and small projects.",
        features: ["1 project", "Up to 50k requests / day", "Automatic SSL", "Daily backups"],
    },
    {
        name: "Pro (Most popular)",
        price: "$29 / month",
        tagline: "For production apps, agencies and SaaS products.",
        features: [
            "Up to 10 projects",
            "Up to 500k requests / day",
            "Priority resources",
            "Hourly backups",
        ],
        highlighted: true,
    },
    {
        name: "Scale",
        price: "From $99 / month",
        tagline: "For mission-critical workloads with custom SLAs.",
        features: [
            "Unlimited projects",
            "Custom traffic limits",
            "Dedicated success engineer",
            "Custom security policies",
        ],
    },
];

export default function Plans() {
    return (
        <SectionShell
            id="pricing"
            eyebrow="Pricing"
            title="Simple plans that grow with you"
            description="Pick a plan that matches the stage of your product. Upgrade or downgrade in a few clicks as your needs change."
        >
            <div className="grid md:grid-cols-3 gap-6 md:gap-7">
                {plans.map((plan) => (
                    <article
                        key={plan.name}
                        className={`flex flex-col rounded-2xl border bg-slate-950/60 p-6 md:p-7 border-slate-800 ${
                            plan.highlighted ? "border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.35)]" : ""
                        }`}
                    >
                        <div>
                            <h3 className="text-base md:text-lg font-semibold text-slate-50">
                                {plan.name}
                            </h3>
                            <p className="mt-2 text-2xl font-semibold text-slate-50">
                                {plan.price}
                            </p>
                            <p className="mt-2 text-sm text-slate-400">{plan.tagline}</p>
                        </div>

                        <ul className="mt-5 space-y-2 text-sm text-slate-200">
                            {plan.features.map((f) => (
                                <li key={f} className="flex gap-2">
                                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-6 w-full py-2.5 rounded-lg border border-slate-700 text-sm font-medium text-slate-100 hover:bg-slate-900 transition">
                            Choose {plan.name}
                        </button>
                    </article>
                ))}
            </div>
        </SectionShell>
    );
}
