import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import LayoutClientWrapper from "@/components/ui/LayoutClientWrapper";
import React from "react";
import FloatingParticles from "@/components/ui/FloatingParticles";

export const metadata = {
    title: "Floor Hosting",
    description: "Modern hosting for next-generation applications.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="relative min-h-screen bg-slate-950 text-slate-100 antialiased">

        <AnimatedGrid/>
        <FloatingParticles count={40} />
        <div className="relative z-10">
            <Navbar/>
            <main className="pt-24 md:pt-28">{children}</main>
            <Footer/>
        </div>

        </body>
        </html>
    );
}
