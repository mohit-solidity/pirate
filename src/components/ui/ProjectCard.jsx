import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, Terminal, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { damping: 30, stiffness: 150 });
    const mouseYSpring = useSpring(y, { damping: 30, stiffness: 150 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                perspective: 1500,
                transformStyle: 'preserve-3d'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group h-full"
        >
            <div className="glass-luxe p-12 h-full transition-all duration-1000 group-hover:border-[var(--color-primary)]/30 group-hover:bg-white/[0.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-[40px] border-[var(--glass-border)] flex flex-col relative overflow-hidden preserve-3d">

                {/* HUD Overlay: Border Glow Pulse */}
                <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent" />
                </div>

                {/* Sheen Effect */}
                <motion.div
                    style={{ left: sheenX }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-20deg] pointer-events-none"
                />

                {/* Sub-Header: OS Dashboard Style */}
                <div className="flex justify-between items-start mb-12 relative z-10 translate-z-20">
                    <div className="flex items-center gap-4">
                        <div className="p-4 glass-luxe rounded-2xl text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-[0_0_20px_hsla(var(--clr-gold)/0.1)]">
                            <Terminal size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary)]">Project No. {Math.floor(Math.random() * 2) + 1}</span>
                        </div>
                    </div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 translate-z-30">
                    <h3 className="text-[var(--fs-lg)] font-bold mb-4 text-[var(--color-text-main)] group-hover:text-grad-gold transition-all duration-700 uppercase italic tracking-tighter">
                        {project.title}
                    </h3>
                    <p className="text-[13px] text-[var(--color-text-muted)] mb-12 line-clamp-3 leading-relaxed font-medium tracking-wide">
                        {project.description}
                    </p>
                </div>

                {/* Tech Specs: Command Center Logic */}
                <div className="space-y-6 mb-12 relative z-10 translate-z-10">
                    <div className="flex items-center gap-3">
                        <Zap size={12} className="text-[var(--color-primary)] animate-pulse" />
                        <span className="text-[9px] font-black text-[var(--color-text-dim)] uppercase tracking-[0.4em]">Protocol Features</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-[11px] text-[var(--color-text-muted)] flex items-center gap-4 font-medium group/item hover:text-[var(--color-text-main)] transition-colors">
                                <div className="w-[8px] h-[1px] bg-[var(--color-primary)]/40 group-hover/item:w-[12px] group-hover/item:bg-[var(--color-primary)] transition-all" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto pt-8 border-t border-[var(--glass-border)] flex items-center justify-between relative z-10">
                    <div className="flex flex-wrap gap-2 text-[var(--fs-xs)]">
                        {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[9px] font-bold text-[var(--color-text-dim)] uppercase tracking-widest px-3 py-1 glass-luxe rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 glass-luxe rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all hover:scale-110 active:scale-95">
                            <Github size={18} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 glass-luxe rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all hover:scale-110 active:scale-95">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
