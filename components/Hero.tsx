"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CodeCard from "./CodeCard";
import { useEffect, useState } from "react";

function AnimatedCounter({ value }: { value: number }) {
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}

export default function Hero() {
    const [visitorCount, setVisitorCount] = useState<number>(0);

    useEffect(() => {
        async function fetchVisitorCount() {
            try {
                // Increment counter on each page load
                const response = await fetch('https://api.countapi.xyz/hit/ayush-patel-portfolio-hero/visits');
                const data = await response.json();
                setVisitorCount(data.value || 0);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
                setVisitorCount(0);
            }
        }

        fetchVisitorCount();
    }, []);
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-80 h-80 lg:w-[500px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Image Container */}
                            <div className="w-full h-full rounded-2xl border border-white/10 overflow-hidden relative bg-black">
                                <Image
                                    src="/profile.png"
                                    alt="Ayush Patel"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                                Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 text-glow">Ayush Patel</span>
                            </h1>

                            <a
                                href="mailto:ayushpatel2731@gmail.com"
                                className="inline-flex items-center gap-2 text-blue-400 mt-4 hover:text-blue-300 transition-colors text-lg group"
                            >
                                ayushpatel2731@gmail.com
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>

                        <CodeCard />
                    </div>
                </div>
            </div>

            {/* Total Visits Pill */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full text-sm font-light border-primary/20"
            >
                <span className="text-white/50">Total Visits</span>
                <span className="ml-2 font-bold text-white">
                    <AnimatedCounter value={visitorCount} />
                </span>
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
