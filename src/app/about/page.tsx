import SectionShell from "@/components/ui/SectionShell";

export default function AboutPage() {
    return (
        <>
            <SectionShell
                eyebrow="About"
                title="The story behind Floor Hosting"
                description="We started Floor Hosting to remove the friction teams face when deploying, scaling and maintaining online products."
            >
                <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
                    <p>
                        Floor Hosting was created by developers who were tired of juggling fragile
                        servers, complex cloud dashboards and unreliable providers. We wanted a
                        platform that felt simple on the surface, but didn’t compromise when it
                        comes to performance, uptime or security.
                    </p>
                    <p>
                        Today, Floor Hosting powers personal projects, agency work and production
                        products across different industries. Whether you’re shipping a landing
                        page, a SaaS app or a high-traffic API, our goal is the same: keep your
                        products online, fast and secure — while staying out of your way.
                    </p>
                </div>
            </SectionShell>

            <SectionShell
                title="How we think about infrastructure"
                description="We believe the best infrastructure is the one you rarely have to think about."
            >
                <ul className="space-y-3 text-sm md:text-base text-slate-300">
                    <li>
                        <strong className="text-slate-100">Reliability first.</strong>{" "}
                        Uptime is not a marketing claim, it’s a design principle. We build
                        redundancy into every layer.
                    </li>
                    <li>
                        <strong className="text-slate-100">Sensible defaults.</strong>{" "}
                        Secure, performant defaults mean you don’t need to be an infrastructure
                        expert to deploy with confidence.
                    </li>
                    <li>
                        <strong className="text-slate-100">Developer experience.</strong>{" "}
                        Clear dashboards, clean APIs and honest error messages matter just as much
                        as CPU and RAM.
                    </li>
                </ul>
            </SectionShell>
        </>
    );
}
