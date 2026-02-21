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
        <div className="min-h-screen bg-black text-white relative selection:bg-cyan-500/30 selection:text-white overflow-x-hidden no-scrollbar">
            {/* 1. Base Layer: Deep Black Background */}
            <div className="fixed inset-0 bg-[#050505] -z-30" />

            {/* 2. Style Layer: Global Mesh Gradients */}
            <div className="fixed inset-0 mesh-gradient opacity-40 mix-blend-screen -z-20 pointer-events-none" />

            {/* 3. Style Layer: Noise Overlay */}
            <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" />

            {/* 4. Interactive Layer: Dynamic Spotlight */}
            {!isMobile && (
                <motion.div
                    className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 240, 255, 0.05), transparent 80%)`,
                    }}
                />
            )}

            <Navbar />

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 pt-20"
            >
                {children}
            </motion.main>

            <footer className="relative z-10 py-24 px-6 border-t border-white/5 mt-32 bg-black/40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <span className="text-3xl font-black tracking-tighter uppercase italic">
                                PIRATE<span className="text-cyan-400">.</span>
                            </span>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Strategically architecting Web3 communities and building scalable decentralized ecosystems since 2022.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
                            <div className="flex flex-col gap-2 text-gray-500 text-sm">
                                <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
                                <a href="/developer" className="hover:text-cyan-400 transition-colors">Developer Work</a>
                                <a href="/community" className="hover:text-cyan-400 transition-colors">Community Work</a>
                                <a href="/contact" className="hover:text-cyan-400 transition-colors">Let's Connect</a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">Connect</h4>
                            <div className="flex flex-col gap-2 text-gray-500 text-sm">
                                <a href="https://x.com/pirstaef" target="_blank" className="hover:text-cyan-400 transition-colors">X (Twitter)</a>
                                <a href="https://t.me/pirstaef" target="_blank" className="hover:text-cyan-400 transition-colors">Telegram</a>
                                <a href="https://github.com/mohit-solidity" target="_blank" className="hover:text-cyan-400 transition-colors">GitHub</a>
                                <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">Status</h4>
                            <div className="flex items-center gap-2 text-green-500 text-sm font-bold animate-pulse">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                Available for Senior Roles
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
                            © 2026 PIRATE — LAST LEVEL WEB3 ARCHITECTURE
                        </span>
                        <div className="flex gap-6 text-gray-600 hover:text-gray-400 transition-colors">
                            <Zap size={14} />
                            <Target size={14} />
                            <Shield size={14} />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
