import FaqSection from "@/components/FaqSection";
import SectionShell from "@/components/ui/SectionShell";

export default function FaqPage() {
    return (
        <>
            <SectionShell
                eyebrow="Support"
                title="Help and support information"
                description="We want you to feel confident running production workloads with us. Here’s how support and billing work."
            >
                <div className="space-y-4 text-sm md:text-base text-slate-300">
                    <p>
                        All Floor Hosting plans include access to our support team and status
                        page. On Pro and Scale plans we offer faster response targets and
                        dedicated escalation paths.
                    </p>
                    <p>
                        You can manage your plan, invoices and usage from a single dashboard.
                        If you ever outgrow our standard plans, we’ll help you design a custom
                        setup that matches your scale and compliance needs.
                    </p>
                </div>
            </SectionShell>

            <FaqSection />
        </>
    );
}
