import SectionShell from "@/components/ui/SectionShell";
import Plans from "@/components/Plans";
import Tech from "@/components/Tech";

export default function ServicesPage() {
    return (
        <>
            <SectionShell
                eyebrow="Services"
                title="What you can run on Floor Hosting"
                description="From simple marketing sites to latency-sensitive APIs, Floor Hosting provides the building blocks for modern online products."
            >
                <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-slate-300">
                    <div className="space-y-3">
                        <h3 className="text-slate-50 font-semibold text-base md:text-lg">
                            Websites & front-end apps
                        </h3>
                        <p>
                            Deploy static sites and front-end frameworks such as Next.js, React,
                            Astro or Svelte with built-in CDN and automatic HTTPS.
                        </p>
                        <p>
                            We optimize for fast first load, stable performance and smooth rollouts
                            when you ship updates.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-slate-50 font-semibold text-base md:text-lg">
                            APIs & background jobs
                        </h3>
                        <p>
                            Run serverless APIs or long-running services for your product. Handle
                            authentication, billing, dashboards or internal tools without managing
                            individual servers.
                        </p>
                        <p>
                            Use logs and metrics to understand what is happening in real time and
                            keep latency under control.
                        </p>
                    </div>
                </div>
            </SectionShell>

            <Plans />
            <Tech />
        </>
    );
}
