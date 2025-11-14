"use client";

import FloatingParticles from "@/components/ui/FloatingParticles";
import React from "react";

export default function LayoutClientWrapper({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <FloatingParticles count={30}/>
            {children}
        </>
    );
}
