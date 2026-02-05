"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, Cloud, Network, BrainCircuit, Shield, Repeat, CircuitBoard, Globe, ClipboardCheck } from "lucide-react";

const Icons: Record<string, any> = {
    aws: Cloud,
    network: Network,
    ml: BrainCircuit,
    security: Shield,
    agile: Repeat,
    iot: CircuitBoard,
    lang: Globe,
    pm: ClipboardCheck
};

export const CertificationsGallery = () => {
    return (
        <section className="py-10">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-accent-cyan/10 rounded-lg border border-accent-cyan/20">
                    <Award className="w-6 h-6 text-accent-cyan" />
                </div>
                <h2 className="fluid-h2 font-bold tracking-tight text-white">Certified Architecture</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.certifications.map((cert, index) => {
                    const Icon = Icons[cert.icon] || Award;
                    return (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="h-full bg-[#0a0a0a] hover:bg-[#111] border border-white/10 hover:border-accent-cyan/30 rounded-xl p-5 transition-all duration-300 flex items-start gap-4">
                                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px] rounded-xl pointer-events-none" />

                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-accent-cyan/20 group-hover:bg-accent-cyan/10 transition-colors shrink-0">
                                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-accent-cyan transition-colors" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors leading-tight mb-1">
                                        {cert.name}
                                    </h3>
                                    <div className="flex flex-col gap-0.5 text-xs text-gray-500 font-mono">
                                        <span>{cert.issuer}</span>
                                        <span>{cert.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
