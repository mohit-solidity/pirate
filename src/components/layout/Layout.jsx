import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
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
        <div className="min-h-screen selection:bg-[var(--color-primary-soft)] selection:text-[var(--color-primary)]">
            {/* Structural Layers */}
            <div className="fixed inset-0 bg-[var(--color-bg-deep)] -z-40" />
            <div className="fixed inset-0 mesh-gradient opacity-20 pointer-events-none -z-30" />
            <div className="fixed inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none -z-20" />

            {/* Interactive Spotlight */}
            {!isMobile && (
                <motion.div
                    className="fixed inset-0 z-[-10] pointer-events-none"
                    style={{
                        background: `radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, var(--color-primary-soft), transparent 80%)`,
                    }}
                />
            )}

            <Navbar />

            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 pt-[100px]"
            >
                <div className="container-fluid">
                    {children}
                </div>
            </motion.main>

            <footer className="relative z-10 py-[var(--space-2xl)] border-t border-[var(--glass-border)] mt-[var(--space-2xl)] bg-[var(--color-bg-base)]/50 backdrop-blur-[var(--glass-blur)]">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-lg)] mb-[var(--space-xl)]">
                        <div className="space-y-[var(--space-sm)]">
                            <span className="text-[var(--fs-xl)] font-black tracking-tighter uppercase italic">
                                PIRATE<span className="text-[var(--color-primary)]">.</span>
                            </span>
                            <p className="text-[var(--color-text-muted)] text-[var(--fs-sm)] leading-relaxed max-w-xs font-medium">
                                Strategically architecting Web3 communities and building scalable decentralized ecosystems since 2022.
                            </p>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-black text-[var(--color-text-main)] uppercase tracking-[0.2em]">Navigation</h4>
                            <div className="flex flex-col gap-[var(--space-2xs)] text-[var(--color-text-muted)] text-[var(--fs-sm)] font-medium">
                                <a href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</a>
                                <a href="/developer" className="hover:text-[var(--color-primary)] transition-colors">Developer Work</a>
                                <a href="/community" className="hover:text-[var(--color-primary)] transition-colors">Community Work</a>
                                <a href="/contact" className="hover:text-[var(--color-primary)] transition-colors">Let's Connect</a>
                            </div>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-black text-[var(--color-text-main)] uppercase tracking-[0.2em]">Connect</h4>
                            <div className="flex flex-col gap-[var(--space-2xs)] text-[var(--color-text-muted)] text-[var(--fs-sm)] font-medium">
                                <a href="https://x.com/pirstaef" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">X (Twitter)</a>
                                <a href="https://t.me/pirstaef" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">Telegram</a>
                                <a href="https://github.com/mohit-solidity" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">GitHub</a>
                                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Discord</a>
                            </div>
                        </div>

                        <div className="space-y-[var(--space-xs)]">
                            <h4 className="text-[var(--fs-xs)] font-black text-[var(--color-text-main)] uppercase tracking-[0.2em]">Status</h4>
                            <div className="flex items-center gap-[var(--space-xs)] text-green-400 text-[var(--fs-sm)] font-bold italic">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_green]" />
                                Available for Senior Roles
                            </div>
                        </div>
                    </div>

                    <div className="pt-[var(--space-md)] border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-[var(--space-md)]">
                        <span className="text-[var(--color-text-dim)] text-[var(--fs-xs)] uppercase font-bold tracking-[0.2em]">
                            © 2026 PIRATE — LAST LEVEL WEB3 ARCHITECTURE
                        </span>
                        <div className="flex gap-[var(--space-md)] text-[var(--color-text-dim)]">
                            <Zap size={14} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer" />
                            <Target size={14} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer" />
                            <Shield size={14} className="hover:text-[var(--color-primary)] transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
