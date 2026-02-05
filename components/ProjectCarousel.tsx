"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu, ArrowRight, Layers, Code2 } from "lucide-react";

export const ProjectCarousel = () => {
    return (
        <section className="py-10 relative z-10 overflow-hidden">
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4 gap-4">
                    <div className="flex gap-4 items-center">
                        <div className="p-3 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
                            <Cpu className="w-5 h-5 md:w-6 md:h-6 text-accent-blue" />
                        </div>
                        <div>
                            <h2 className="fluid-h2 font-bold text-white tracking-tight flex items-center gap-2">
                                Deployed Systems <span className="text-[10px] md:text-xs font-mono py-0.5 px-2 bg-accent-cyan/10 rounded border border-accent-cyan/20 text-accent-cyan">v2.0</span>
                            </h2>
                            <p className="text-gray-400 text-xs md:text-sm mt-1">Production environments & research labs</p>
                        </div>
                    </div>

                    {/* Decorative Tech Elements - Grid View Indicator */}
                    <div className="hidden md:flex flex-col items-end gap-1 opacity-50">
                        <span className="text-[10px] font-mono tracking-widest text-accent-cyan">GRID_VIEW</span>
                    </div>
                </div>
            </div>

            {/* Grid Container - 4 Columns on XL */}
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    {PORTFOLIO_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <div className="h-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-accent-blue/30 transition-all duration-500 relative group-hover:shadow-[0_0_30px_-5px_rgba(0,112,243,0.15)] flex flex-col">

                                {/* Card Header / Status Bar */}
                                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${project.type === 'AI Research' ? 'bg-purple-500' : project.type === 'Automation' ? 'bg-green-500' : 'bg-blue-500'} animate-pulse`} />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{project.type}</span>
                                    </div>
                                    <LayoutIcon type={project.type} />
                                </div>

                                {/* Main Content */}
                                <div className="p-6 flex-1 flex flex-col relative">
                                    {/* Background Grid */}
                                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px] pointer-events-none" />

                                    <div className="relative z-10 flex-1">
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-blue transition-colors flex items-center gap-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack & Action */}
                                    <div className="relative z-10 pt-4 mt-auto border-t border-white/5 flex flex-col gap-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="text-[10px] font-medium text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            target={project.link.startsWith("#") ? "_self" : "_blank"}
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full p-2.5 rounded-lg bg-white/5 hover:bg-accent-blue/10 border border-white/5 hover:border-accent-blue/30 transition-all group/btn mt-2"
                                        >
                                            <span className="text-xs font-medium text-gray-300 group-hover/btn:text-accent-blue transition-colors">Visit</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover/btn:text-accent-blue transform group-hover/btn:translate-x-1 transition-all" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LayoutIcon = ({ type }: { type: string }) => {
    if (type === 'AI Research') return <Cpu className="w-4 h-4 text-purple-500/50" />;
    if (type === 'Automation') return <Layers className="w-4 h-4 text-green-500/50" />;
    return <Code2 className="w-4 h-4 text-blue-500/50" />;
}
