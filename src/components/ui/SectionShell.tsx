import {ReactNode} from "react";

interface SectionShellProps {
    id?: string;
    title?: string;
    eyebrow?: string;
    description?: string;
    children: ReactNode;
}

export default function SectionShell({
                                         id,
                                         title,
                                         eyebrow,
                                         description,
                                         children,
                                     }: SectionShellProps) {
    return (
        <section id={id} className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-5">
                {(eyebrow || title || description) && (
                    <header className="mb-10 md:mb-14 max-w-3xl">
                        {eyebrow && (
                            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sky-400 mb-3">
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-50">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mt-3 text-sm md:text-base text-slate-400">
                                {description}
                            </p>
                        )}
                    </header>
                )}

                {children}
            </div>
        </section>
    );
}
