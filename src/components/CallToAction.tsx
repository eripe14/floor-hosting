import SectionShell from "@/components/ui/SectionShell";
import Link from "next/link";

export default function CallToAction() {
    return (
        <SectionShell>
            <div className="rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-slate-900 to-indigo-500/20 px-6 py-10 md:px-10 md:py-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
                        Ready to deploy your next project?
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-slate-200/80 max-w-xl">
                        Start for free, connect your repo and ship your first deployment in just a few minutes.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-2.5 rounded-lg bg-sky-400 text-slate-900 font-medium text-sm hover:bg-sky-300 transition">
                        Create an account
                    </button>
                    <Link href={"/contact"}>
                        <button
                            className="px-6 py-2.5 rounded-lg border border-slate-200/50 text-sm text-slate-100 hover:bg-slate-900/60 transition">
                            Talk to our team
                        </button>
                    </Link>
                </div>
            </div>
        </SectionShell>
    );
}
