import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '../../utils/cn';

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { damping: 20, stiffness: 100 });
    const mouseYSpring = useSpring(y, { damping: 20, stiffness: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

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
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group h-full"
        >
            <div className="glass-card p-[var(--space-lg)] h-full transition-all duration-500 group-hover:border-[var(--color-primary)]/40 group-hover:bg-[var(--glass-bg)]/20 shadow-xl group-hover:shadow-[var(--color-primary-soft)]/20">
                {/* Visual Header */}
                <div className="flex justify-between items-start mb-[var(--space-lg)]">
                    <div className="p-[var(--space-sm)] bg-[var(--color-primary-soft)] rounded-[var(--space-md)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-inner">
                        <Code size={24} />
                    </div>
                    <div className="flex gap-[var(--space-xs)]">
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="https://github.com/mohit-solidity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </div>

                <h3 className="text-[var(--fs-lg)] font-black mb-[var(--space-xs)] text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors uppercase tracking-tight">
                    {project.title}
                </h3>
                <p className="text-[var(--fs-sm)] text-[var(--color-text-muted)] mb-[var(--space-lg)] line-clamp-2 leading-relaxed font-medium">
                    {project.description}
                </p>

                <div className="space-y-[var(--space-sm)] mb-[var(--space-xl)]">
                    <p className="text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] uppercase tracking-[0.2em]">Core Logic</p>
                    <ul className="grid grid-cols-2 gap-[var(--space-xs)]">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-[var(--fs-xs)] text-[var(--color-text-muted)] flex items-center gap-2 font-medium">
                                <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full shadow-[0_0_5px_var(--color-primary)]" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-[var(--space-2xs)] mt-auto pt-[var(--space-md)] border-t border-[var(--glass-border)]">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--color-bg-base)] border border-[var(--glass-border)] rounded-full text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-all cursor-default">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
