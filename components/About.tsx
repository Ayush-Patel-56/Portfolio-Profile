"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

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
                            <div className="w-full max-w-sm bg-[#0a192f] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group">
                                {/* Glow effect behind */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

                                <div className="relative p-4 flex gap-4 bg-[#0a192f]/90 backdrop-blur z-10">
                                    <div className="w-20 h-20 bg-gray-800 rounded-lg shrink-0 overflow-hidden relative">
                                        {/* Placeholder image resembling the hooded figure */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-black flex items-center justify-center">
                                            <span className="text-3xl filter grayscale">👤</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div>
                                            <h3 className="font-bold text-white leading-none">About me</h3>
                                            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">by AI</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/80 border border-white/10 shadow-inner">serious</span>
                                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/80 border border-white/10 shadow-inner">enthusiastic</span>
                                        </div>
                                        <button className="flex items-center gap-2 text-[10px] text-white/60 hover:text-white transition-colors group/btn">
                                            <div className="p-1 rounded-full border border-white/30 group-hover/btn:border-white group-hover/btn:bg-white/10 transition-colors">
                                                <Play className="w-2 h-2 fill-current" />
                                            </div>
                                            Listen all about me!
                                        </button>
                                    </div>
                                </div>
                            </div>

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
                                    I'm a software developer skilled at <span className="text-blue-500 font-bold">DevOPS and Blockchain</span> specialising in Back-End Development and Software Architecture. I enjoy discussing topics relating to <span className="text-blue-500 font-bold">System Design, Open Source, Microservices and Cloud Architecture.</span>
                                </p>
                                <p>
                                    Hit me up anytime you want to chat about <span className="text-blue-500 font-bold">System Architecture, Blockchain, Cloud, Rust, Go-Lang, Open Source</span> or anything you have in mind. Let's work together and create something great !!
                                </p>
                            </div>

                            <a href="#" className="block w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all duration-300 text-center uppercase tracking-widest text-sm relative overflow-hidden group">
                                <span className="relative z-10">Resume</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
