"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Activity, Smartphone, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    status?: string;
    visual: React.ReactNode;
    colSpan?: string; // class for grid column span
}

const projects: Project[] = [
    {
        title: "Bitcoin AI assisted coding tool",
        description: "An agentic ai specializing in blockchain related tasks. Built for the Braidpool org.",
        status: "building",
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] p-4 flex flex-col justify-center gap-3 relative overflow-hidden">
                {/* Abstract UI elements */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-[2px]" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-[2px]" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 blur-[2px]" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                </div>
            </div>
        )
    },
    {
        title: "ELK Stack Monitoring",
        description: "Complete monitoring solution using ELK stack for real-time log analysis and system observability.",
        link: "#",
        linkText: "GitHub",
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] p-6 flex flex-col gap-3 relative">
                {/* Skeleton Loader feel */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="h-2 bg-white/10 rounded-full"
                        style={{ width: `${Math.max(40, 100 - (i * 15))}%`, opacity: 1 - (i * 0.15) }}
                    />
                ))}
            </div>
        )
    },
    {
        title: "Medico24",
        description: "Healthcare management platform providing 24/7 medical services and patient care solutions.",
        link: "#",
        linkText: "GitHub",
        visual: (
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                <Activity className="w-16 h-16 text-white/50" />
            </div>
        )
    },
    {
        title: "Campusorbit",
        description: "A comprehensive campus management platform for IIT, IIIT, and NIT students with schedule management, attendance tracking, club activities, and community features.",
        link: "#",
        linkText: "Visit Live Site",
        colSpan: "md:col-span-2",
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
                <div className="flex gap-4 transform rotate-6 scale-90 opacity-80">
                    <div className="w-24 h-32 rounded-xl bg-black border border-white/10 p-2 flex flex-col items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs">Fig</div>
                        <div className="text-[8px] text-white/40 text-center">Made in flutter with designs from figma</div>
                        <div className="text-[8px] border border-red-500/30 text-red-400 px-1 rounded">Android App</div>
                    </div>
                    <div className="w-24 h-32 rounded-xl bg-black border border-white/10 p-2 flex flex-col items-center justify-center gap-2 scale-110 z-10 shadow-2xl shadow-purple-500/10">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">Web</div>
                        <div className="text-[8px] text-white/40 text-center">See for yourself @campusorbit.vercel.app</div>
                        <div className="text-[8px] border border-green-500/30 text-green-400 px-1 rounded">Website</div>
                    </div>
                    <div className="w-24 h-32 rounded-xl bg-black border border-white/10 p-2 flex flex-col items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs">Rust</div>
                        <div className="text-[8px] text-white/40 text-center">Ultra fast backend written in Rust</div>
                        <div className="text-[8px] border border-orange-500/30 text-orange-400 px-1 rounded">Backend</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "RMF Metrics Simulator",
        description: "z/OS mainframe metrics simulator that generates realistic IBM RMF Monitor III data with monitoring integration.",
        link: "#",
        linkText: "GitHub",
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] p-4 flex flex-col justify-center relative font-mono text-xs">
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-gray-400 mb-2">// metrics simulation</p>
                    <div className="flex gap-2 mb-1">
                        <span className="text-purple-400">const</span>
                        <span className="text-blue-400">frameworks</span>
                        <span className="text-white">=</span>
                        <span className="text-green-400">["React", "Vue"]</span>
                    </div>
                    <div className="flex justify-end mt-2">
                        <div className="flex items-center gap-2 bg-black/50 px-2 py-1 rounded-full border border-white/10">
                            <span className="text-white/60 text-[10px]">Use PHP.</span>
                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

interface LargeProject {
    title: string;
    description: string;
    github: string;
    live?: string;
    tags: string[];
    visual: React.ReactNode;
}

const largeProjects: LargeProject[] = [
    {
        title: "Campusorbit",
        description: "A comprehensive campus management platform for IIT, IIIT, and NIT students with schedule management, attendance tracking, club activities, and community features.",
        github: "#",
        live: "#",
        tags: ["backend", "framer-motion", "nextjs", "rust", "flutter", "API", "Auth0", "PostgreSQL"],
        visual: (
            <div className="w-full h-full bg-[#050510] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,50,255,0.1),transparent_50%)]" />
                <div className="text-center z-10 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                        <Smartphone className="text-white w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">CampusOrbit</h4>
                    <p className="text-white/40 mt-2 text-sm">An app made for the ease of students</p>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full" />
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-500 rounded-full" />
            </div>
        )
    },
    {
        title: "Medico24",
        description: "A comprehensive health companion mobile application designed to provide seamless healthcare services and accessibility features for all users with AI-powered diagnostics.",
        github: "#",
        tags: ["healthcare", "flutter", "python", "fastapi", "ML", "nextjs", "mobile", "observability"],
        visual: (
            <div className="w-full h-full bg-[#0f0f15] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                <div className="grid grid-cols-2 gap-4 w-3/4 opacity-30 transform -skew-x-12">
                    <div className="bg-white/5 h-20 rounded-lg" />
                    <div className="bg-white/5 h-20 rounded-lg" />
                    <div className="bg-white/5 h-32 rounded-lg col-span-2" />
                </div>
                <div className="absolute z-10 bg-[#12121e] border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-2xl">
                    <div className="bg-red-500/20 p-2 rounded-lg">
                        <Activity className="text-red-500 w-8 h-8" />
                    </div>
                    <div>
                        <div className="text-white font-bold">Medico24</div>
                        <div className="text-xs text-white/50">Project Summary</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Veil",
        description: "A decentralized medical application built on blockchain technology, enabling secure and transparent medical record management with patient privacy at its core.",
        github: "#",
        tags: ["blockchain", "web3", "typescript", "medical", "decentralized", "ethereum"],
        visual: (
            <div className="w-full h-full bg-[#030303] relative flex items-center justify-center p-8">
                <div className="relative w-full h-full border border-white/5 rounded-xl bg-[#080808] p-4 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs text-white/30 font-mono">Patient Profile</span>
                    </div>
                    <div className="flex items-center justify-center flex-grow">
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center relative">
                            <div className="absolute inset-0 border-t-2 border-green-500/50 rounded-full animate-spin duration-3000" />
                            <Layers className="text-white/20 w-8 h-8" />
                        </div>
                    </div>
                    <div className="text-xs font-mono text-green-500/50 mt-4">
                        0x71C...92F
                    </div>
                </div>
            </div>
        )
    }
];

const freelanceProjects: LargeProject[] = [
    {
        title: "Portfolio Website",
        description: "My portfolio website made using NextJS with the primary focus on UI, readability and User Experience",
        github: "#",
        live: "#",
        tags: ["personal", "portfolio", "framer-motion", "nextjs", "UI", "UX"],
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden border-r border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="z-10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 mb-2">
                        Hi, I am Rohan Sen
                    </div>
                    <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                </div>
                {/* Decorative code lines */}
                <div className="absolute top-4 left-4 space-y-1 opacity-20 hidden md:block">
                    <div className="w-12 h-1 bg-white/50 rounded-full" />
                    <div className="w-8 h-1 bg-white/30 rounded-full ml-2" />
                    <div className="w-16 h-1 bg-white/40 rounded-full" />
                </div>
            </div>
        )
    },
    {
        title: "Zealtech",
        description: "A freelance project made for ZEALTECH, a media marketing website. Made using nextjs and framer motion for advanced animations.",
        github: "#",
        live: "#",
        tags: ["freelance", "framer-motion", "nextjs", "UX"],
        visual: (
            <div className="w-full h-full bg-white relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <div className="flex flex-col items-center z-10">
                    <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center mb-2">
                        <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                    <div className="text-black font-bold text-xl tracking-tight">ZEALTECH</div>
                    <div className="text-black/40 text-[8px] tracking-[0.2em] uppercase mt-1">Marketing Services</div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>
        )
    },
    {
        title: "Windows 95 GUI",
        description: "A functional clone of the Windows 95 operating system interface purely with CSS and JS, focusing on retro UI fidelity.",
        github: "#",
        live: "#",
        tags: ["GUI", "Implementation", "Legacy Clone", "nextjs", "UI", "UX"],
        visual: (
            <div className="w-full h-full bg-[#008080] relative flex items-center justify-center overflow-hidden font-sans">
                <div className="w-40 bg-[#c0c0c0] shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#000000] p-1">
                    <div className="bg-[#000080] px-2 py-1 flex justify-between items-center mb-2">
                        <span className="text-white font-bold text-[10px]">Windows 95</span>
                        <div className="w-3 h-3 bg-[#c0c0c0] shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#000000] flex items-center justify-center">
                            <span className="text-black text-[8px] leading-none mb-0.5">x</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 py-4 border border-black/10 border-t-white/50 border-l-white/50">
                        <div className="grid grid-cols-2 gap-0.5 transform rotate-12">
                            <div className="w-4 h-4 bg-[#ff3333]" />
                            <div className="w-4 h-4 bg-[#33cc33]" />
                            <div className="w-4 h-4 bg-[#3366ff]" />
                            <div className="w-4 h-4 bg-[#ffff33]" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    className="flex flex-col items-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <span className="text-sm font-medium text-white/80">Projects</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Flagship Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`group relative flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors ${project.colSpan || ''}`}
                        >
                            {/* Visual Area */}
                            <div className="h-48 w-full border-b border-white/5 overflow-hidden">
                                {project.visual}
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-white/40" />
                                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {project.status && (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {project.link && (
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        {project.linkText}
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Large Scale Projects Section */}
                <div className="flex flex-col items-center mb-16 space-y-4 pt-10 border-t border-white/5">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Large Scale Projects
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {largeProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 md:grid md:grid-cols-2 group"
                        >
                            {/* Project Visual */}
                            <div className="h-64 md:h-full border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden min-h-[300px]">
                                {project.visual}
                            </div>

                            {/* Project Details */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a103c] text-purple-300 border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link
                                        href={project.github}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        Github
                                    </Link>
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            className="flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/10 text-white rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Freelance/UI Projects Section */}
                <div className="flex flex-col items-center mb-16 space-y-4 pt-10 border-t border-white/5">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Freelance/UI Projects
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 md:grid md:grid-cols-2 group"
                        >
                            {/* Project Visual */}
                            <div className="h-64 md:h-full border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden min-h-[300px]">
                                {project.visual}
                            </div>

                            {/* Project Details */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a103c] text-purple-300 border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link
                                        href={project.github}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        Github
                                    </Link>
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            className="flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/10 text-white rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
