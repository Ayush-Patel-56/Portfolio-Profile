"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AudioProfile from "./AudioProfile";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column - Visuals */}
                        <div className="flex flex-col items-center gap-8">
                            {/* AI Card */}
                            <AudioProfile />

                            {/* AYUSH Typography (Matches ROHAN style) */}
                            <div className="relative select-none pointer-events-none">
                                <h2 className="text-8xl font-black tracking-tighter flex gap-1">
                                    <span className="bg-gradient-to-b from-orange-300 to-orange-500 bg-clip-text text-transparent">A</span>
                                    <span className="bg-gradient-to-b from-blue-300 to-blue-600 bg-clip-text text-transparent">Y</span>
                                    <span className="bg-gradient-to-b from-red-400 to-pink-600 bg-clip-text text-transparent">U</span>
                                    <span className="bg-gradient-to-b from-purple-400 to-purple-600 bg-clip-text text-transparent">S</span>
                                    <span className="bg-gradient-to-b from-teal-300 to-teal-600 bg-clip-text text-transparent">H</span>
                                </h2>
                                {/* Reflection */}
                                <div className="absolute top-[85%] left-0 w-full flex gap-1 transform -scale-y-100 opacity-20 blur-[1px]">
                                    <span className="bg-gradient-to-b from-orange-300 to-orange-500 bg-clip-text text-transparent">A</span>
                                    <span className="bg-gradient-to-b from-blue-300 to-blue-600 bg-clip-text text-transparent">Y</span>
                                    <span className="bg-gradient-to-b from-red-400 to-pink-600 bg-clip-text text-transparent">U</span>
                                    <span className="bg-gradient-to-b from-purple-400 to-purple-600 bg-clip-text text-transparent">S</span>
                                    <span className="bg-gradient-to-b from-teal-300 to-teal-600 bg-clip-text text-transparent">H</span>
                                </div>
                                {/* Fade Overlay for Reflection */}
                                <div className="absolute top-full left-0 w-full h-20 bg-gradient-to-b from-transparent to-background -translate-y-full" />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8 relative pl-0 lg:pl-10">
                            {/* Vertical Line decoration */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 hidden lg:block rounded-full" />

                            <h2 className="text-5xl font-bold text-white">About</h2>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                                <p>
                                    I'm a <span className="text-blue-500 font-bold">Full-Stack & Android Developer</span> and <span className="text-blue-500 font-bold">Competitive Programmer</span>. I'm also an active <span className="text-blue-500 font-bold">Open Source Contributor</span> who believes in keeping things simple, focused, and constantly evolving.
                                </p>
                                <p>
                                    Hit me up anytime you want to chat about <span className="text-blue-500 font-bold">Web Development, Android, DSA, Open Source</span> or anything you have in mind. Let's work together and create something great !!
                                </p>
                            </div>

                            <a href="#" className="block w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all duration-300 text-center uppercase tracking-widest text-sm relative overflow-hidden group">
                                <span className="relative z-10">Resume</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div >
        </section >
    );
}
