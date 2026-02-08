"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

function StatItem({ value, label, suffix = "", prefix = "" }: StatItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) =>
        prefix + Math.round(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [spring, value, isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <motion.div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {display}
            </motion.div>
            <div className="text-white/60 text-sm mt-2">{label}</div>
        </motion.div>
    );
}

export default function AnimatedStats() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-4 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
            <StatItem value={15} label="Projects Completed" suffix="+" />
            <StatItem value={500} label="GitHub Contributions" suffix="+" />
            <StatItem value={4} label="Open Source" suffix="+" />
            <StatItem value={6} label="Months Experience" suffix="+" />
        </motion.div>
    );
}
