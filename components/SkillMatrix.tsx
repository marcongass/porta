"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const SkillMatrix = () => {
    return (
        <section className="py-10 border-t border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills], categoryIndex) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-base md:text-lg font-semibold text-accent-cyan border-b border-white/10 pb-2 inline-block">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: (categoryIndex * 0.1) + (i * 0.05) }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-colors cursor-default"
                                >
                                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 hover:text-white transition-colors">
                                        {skill}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
