"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
            containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
            {/* Dynamic Spotlight */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 212, 191, 0.15), transparent 40%)`
                }}
            />

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Ambient Moving Blobs - CSS Animated for GPU performance */}
                <div
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30 mix-blend-screen animate-float-1"
                />
                <div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-float-2"
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-float-3"
                />
            </div>
        </div>
    );
}
