"use client";

import { useEffect, useRef } from "react";

export const SpaceParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
        let animationFrameId: number;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const isMobile = window.innerWidth < 768;
            const densityBase = isMobile ? 25000 : 15000;
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / densityBase);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
                    speed: Math.random() * 0.15 + 0.05,
                    opacity: Math.random() * 0.4 + 0.1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = window.innerHeight;

                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resize, 200);
        };

        window.addEventListener("resize", handleResize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};
