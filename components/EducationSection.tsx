"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

export const EducationSection = () => {
    return (
        <section className="py-10">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
                    <GraduationCap className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Academic Background</h2>
            </div>

            <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, index) => (
                    <motion.div
                        key={edu.school}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative group bg-[#0a0a0a] hover:bg-[#111] border border-white/10 hover:border-accent-blue/30 rounded-xl p-6 transition-all duration-300">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px] rounded-xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                                        {edu.school}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{edu.degree}</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-accent-cyan w-fit">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {edu.period}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
