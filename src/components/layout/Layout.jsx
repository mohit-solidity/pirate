import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 100 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="min-h-screen selection:bg-[var(--color-primary-soft)] selection:text-[var(--color-primary)] font-['Space_Grotesk']">
            {/* Cinematic Background Infrastructure */}
            <div className="fixed inset-0 bg-[var(--color-bg-deep)] -z-40 overflow-hidden">
                {/* Animated Radial Gradients */}
                <motion.div
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,hsla(var(--clr-gold)/0.03)_0%,transparent_70%)]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,hsla(var(--clr-purple)/0.04)_0%,transparent_70%)]"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Particles Simulation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-[var(--color-primary)] rounded-full blur-[1px] animate-pulse" />
                    <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-[var(--color-accent)] rounded-full blur-[1px] animate-pulse delay-700" />
                    <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-[var(--color-primary)] rounded-full blur-[1px] animate-pulse delay-1000" />
                </div>
            </div>

            <div className="fixed inset-0 bg-noise opacity-[0.015] mix-blend-overlay pointer-events-none -z-20" />

            {/* Subtle Cursor Trail Glow (Luxe Version) */}
            {!isMobile && (
                <motion.div
                    className="fixed inset-0 z-[-10] pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, hsla(var(--clr-gold)/0.02), transparent 80%)`,
                    }}
                />
            )}

            <Navbar />

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 pt-[120px]"
            >
                <div className="container-fluid">
                    {children}
                </div>
            </motion.main>

            <footer className="relative z-10 py-[var(--space-2xl)] border-t border-[var(--glass-border)] mt-[var(--space-2xl)] bg-[var(--color-bg-base)]/50 backdrop-blur-[var(--glass-blur)]">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)] mb-[var(--space-xl)]">
                        <div className="space-y-[var(--space-sm)]">
                            <span className="text-[var(--fs-xl)] font-bold tracking-tighter uppercase italic text-grad-gold">
                                PIRATE<span className="text-[var(--color-primary)]">.</span>
                            </span>
                            <p className="text-[var(--color-text-muted)] text-[var(--fs-sm)] leading-relaxed max-w-xs font-medium">
                                Architecting high-concurrency Web3 ecosystems for the elite decentralized era.
                            </p>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">Navigation</h4>
                            <div className="flex flex-col gap-[var(--space-2xs)] text-[var(--color-text-muted)] text-[var(--fs-sm)] font-medium">
                                <a href="/" className="link-underline w-fit">Home</a>
                                <a href="/developer" className="link-underline w-fit">Developer Work</a>
                                <a href="/community" className="link-underline w-fit">Community Work</a>
                                <a href="/contact" className="link-underline w-fit">Let's Connect</a>
                            </div>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">Connect</h4>
                            <div className="flex flex-col gap-[var(--space-2xs)] text-[var(--color-text-muted)] text-[var(--fs-sm)] font-medium">
                                <a href="https://x.com/pirstaef" target="_blank" className="link-underline w-fit">X (Twitter)</a>
                                <a href="https://t.me/pirstaef" target="_blank" className="link-underline w-fit">Telegram</a>
                                <a href="https://github.com/mohit-solidity" target="_blank" className="link-underline w-fit">GitHub</a>
                            </div>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">Status</h4>
                            <div className="flex items-center gap-[var(--space-xs)] text-[var(--color-primary)] text-[var(--fs-xs)] font-bold tracking-wider">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
                                AVAILABLE FOR SENIOR ARCHITECTURE
                            </div>
                        </div>
                    </div>

                    <div className="pt-[var(--space-md)] border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-[var(--space-md)]">
                        <span className="text-[var(--color-text-dim)] text-[10px] uppercase font-bold tracking-[0.4em]">
                            © 2026 PIRATE — LUXURY WEB3 ARCHITECTURE
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
