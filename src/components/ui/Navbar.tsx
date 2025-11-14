"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 inset-x-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    Floor<span className="text-sky-400">Hosting</span>
                </Link>

                <div className="hidden md:flex gap-6 text-sm text-slate-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-sky-400 transition ${
                                pathname === link.href ? "text-sky-400" : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button className="hidden md:inline-flex items-center px-4 py-1.5 text-sm rounded-lg bg-sky-400 text-slate-950 font-medium hover:bg-sky-300 transition">
                    Dashboard
                </button>
            </div>
        </nav>
    );
}
