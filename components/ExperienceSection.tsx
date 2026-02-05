"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
    return (
        <section className="py-10 relative z-10">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
                        <Briefcase className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Build History</h2>
                        <p className="text-gray-400 text-sm mt-1">Professional timeline & key milestones</p>
                    </div>
                </div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 pb-4">
                    {PORTFOLIO_DATA.experience.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[59px] top-0 p-1 bg-black rounded-full border border-white/10">
                                <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse shadow-[0_0_10px_rgba(0,112,243,0.5)]" />
                            </div>

                            <div className="glass-panel p-6 md:p-8 rounded-2xl relative group hover:border-accent-blue/30 transition-colors">
                                <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-6">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                            {exp.company}
                                        </h3>
                                        <div className="text-lg text-accent-cyan font-medium flex items-center gap-2">
                                            {exp.role}
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-400 flex items-center gap-2 whitespace-nowrap">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-3 text-gray-400 mb-6">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex gap-3 items-start text-sm md:text-base leading-relaxed">
                                            <ChevronRight className="w-4 h-4 text-accent-blue/50 mt-1 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded bg-accent-blue/5 text-accent-blue border border-accent-blue/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
