"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Terminal, MapPin, Linkedin, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
    const shouldReduceMotion = useReducedMotion();

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const item: Variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
            filter: shouldReduceMotion ? "none" : "blur(10px)"
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="min-h-[50vh] flex flex-col justify-center relative pt-20 pb-0 lg:pt-32">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6 max-w-4xl text-left"
            >
                <motion.div
                    variants={item}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs md:text-sm font-medium"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                    </span>
                    {PORTFOLIO_DATA.hero.status}
                </motion.div>

                <motion.h1
                    variants={item}
                    className="fluid-h1 font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-gradient-x"
                    style={{ backgroundSize: "200% auto" }}
                >
                    {PORTFOLIO_DATA.hero.headline}
                </motion.h1>

                <motion.div variants={item} className="flex gap-4 items-start text-gray-400 text-base md:text-xl max-w-2xl leading-relaxed">
                    <Terminal className="w-5 h-5 md:w-6 md:h-6 text-accent-cyan mt-1 flex-shrink-0" />
                    <p>{PORTFOLIO_DATA.hero.subHeadline}</p>
                </motion.div>

                <motion.div variants={item} className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-3 text-xs md:text-sm text-gray-500 font-mono">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent-blue" />
                        {PORTFOLIO_DATA.hero.contact.location}
                    </div>
                    {PORTFOLIO_DATA.hero.contact.linkedin && (
                        <a href={PORTFOLIO_DATA.hero.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-cyan transition-colors group">
                            <Linkedin className="w-4 h-4 text-accent-blue group-hover:text-accent-cyan" />
                            LinkedIn
                        </a>
                    )}
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent-blue" />
                        <span className="truncate max-w-[150px] md:max-w-none">{PORTFOLIO_DATA.hero.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent-blue" />
                        {PORTFOLIO_DATA.hero.contact.phone}
                    </div>
                </motion.div>

                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-8">
                    <motion.a
                        href="/Currículum.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                    >
                        Download CV
                    </motion.a>
                    <motion.button
                        whileHover={shouldReduceMotion ? {} : { scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 glass-panel rounded-lg transition-all w-full sm:w-auto"
                    >
                        View Projects
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};
