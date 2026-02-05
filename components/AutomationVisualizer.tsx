"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const AutomationVisualizer = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });
    const rotateReverse = useTransform(time, [0, 10000], [360, 0], { clamp: false });

    // Generate data packets for the stream effect
    const [packets, setPackets] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPackets(prev => [...prev.slice(-5), Date.now()]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] relative flex items-center justify-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] rounded-full animate-pulse" />

            <svg className="w-full h-full max-w-[500px] max-h-[500px] absolute z-10" viewBox="0 0 400 400">
                <defs>
                    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
                    </radialGradient>
                    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Main Orbital Rings */}
                <motion.g style={{ rotate, originX: "200px", originY: "200px" }}>
                    <circle cx="200" cy="200" r="100" stroke="var(--accent-blue)" strokeWidth="0.5" fill="none" opacity="0.3" strokeDasharray="10 5" />
                    <circle cx="200" cy="200" r="150" stroke="var(--accent-cyan)" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="20 10" />
                </motion.g>

                <motion.g style={{ rotate: rotateReverse, originX: "200px", originY: "200px" }}>
                    <circle cx="200" cy="200" r="120" stroke="var(--accent-blue)" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="4 4" />
                </motion.g>

                {/* Inter-connected Nodes */}
                {[...Array(6)].map((_, i) => {
                    const angle = (i * 60 * Math.PI) / 180;
                    const x = 200 + Math.cos(angle) * 120;
                    const y = 200 + Math.sin(angle) * 120;

                    return (
                        <motion.g key={i}>
                            {/* Connection Line */}
                            <motion.line
                                x1="200" y1="200" x2={x} y2={y}
                                stroke="var(--accent-blue)"
                                strokeWidth="1"
                                opacity="0.2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: i * 0.1 }}
                            />

                            {/* Data Packets streaming along the line */}
                            <motion.circle
                                r="2"
                                fill="white"
                                initial={{ cx: 200, cy: 200 }}
                                animate={{ cx: [200, x], cy: [200, y], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5, repeatDelay: 1 }}
                            />

                            {/* Node Point */}
                            <motion.circle
                                cx={x} cy={y} r="4"
                                fill="#0a0a0a"
                                stroke="var(--accent-cyan)"
                                strokeWidth="2"
                                whileHover={{ scale: 1.5, stroke: "var(--accent-white)" }}
                                filter="url(#neon-glow)"
                            />

                            {/* Floating Label Placeholder (Optional) */}
                            {/* <text x={x + 10} y={y} fill="white" fontSize="8" opacity="0.5">Node {i+1}</text> */}
                        </motion.g>
                    )
                })}

                {/* Central Core */}
                <g filter="url(#neon-glow)">
                    <motion.circle
                        cx="200" cy="200" r="20"
                        fill="#000"
                        stroke="var(--accent-blue)"
                        strokeWidth="2"
                        animate={{ r: [20, 22, 20], strokeOpacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx="200" cy="200" r="10"
                        fill="var(--accent-cyan)"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </g>
            </svg>

            {/* Floating UI Elements */}
            <div className="absolute bottom-10 left-10 hidden md:block">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                        SYSTEM_ACTIVE
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono">
                        Node Sync: 100%
                    </div>
                </div>
            </div>
        </div>
    );
};
