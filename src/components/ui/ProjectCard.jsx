import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Twitter, ArrowUpRight, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

const ProjectCard = ({ project, index = 0 }) => {
    // Standardize data from different sources
    const title = project.title || project.name;
    const description = project.description;
    const tags = project.tech || [project.badge];
    const features = project.features || [];
    const impact = project.keyImpact;
    const metric = project.metric;
    const image = project.image;
    
    const links = [
        project.github && { icon: <Github size={18} />, url: project.github, label: 'GitHub' },
        project.demo && { icon: <ExternalLink size={18} />, url: project.demo, label: 'Demo' },
        project.twitter && { icon: <Twitter size={18} />, url: project.twitter, label: 'Twitter' }
    ].filter(Boolean);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-full"
        >
            <div className="glass-card p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
                {/* Floating Project Icon (Top Right) */}
                <div className="absolute top-6 right-6 z-20">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 glass-card p-1 group-hover:border-[var(--color-primary)]/50 group-hover:scale-110 transition-all duration-500 shadow-2xl bg-[var(--color-bg-deep)]">
                        {image ? (
                            <img 
                                src={image} 
                                alt={title} 
                                className="w-full h-full object-contain rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white/5 text-[var(--color-primary)]">
                                <Zap size={24} />
                            </div>
                        )}
                    </div>
                </div>
                {/* Header: Title & Tags */}
                <div className="mb-8 pr-20"> {/* Added padding-right to avoid icon collision */}
                    <div className="flex flex-col gap-3 mb-4">
                        <h3 className="text-[var(--fs-lg)] font-extrabold uppercase tracking-tight group-hover:text-grad-blue transition-all duration-500">
                            {title}
                        </h3>
                        <div className="flex gap-3">
                            {links.map((link, i) => (
                                <a 
                                    key={i} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 -ml-2 text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors hover:scale-110 flex items-center gap-2"
                                    title={link.label}
                                >
                                    {link.icon}
                                    <span className="text-[10px] uppercase font-bold tracking-widest hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-500">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[var(--color-text-muted)]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Main Content: Description & Features */}
                <div className="flex-grow">
                    <p className="text-[14px] text-[var(--color-text-dim)] leading-relaxed mb-10 font-medium group-hover:text-[var(--color-text-main)] transition-colors duration-500">
                        {description}
                    </p>

                    {features.length > 0 && (
                        <ul className="space-y-3 mb-8">
                            {features.map((feature, i) => (
                                <li key={i} className="text-[12px] flex items-center gap-3 text-[var(--color-text-dim)] group-hover:text-[var(--color-text-main)] transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)] transition-colors" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {impact && (
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap size={14} className="text-[var(--color-primary)]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">{metric || 'Core Impact'}</span>
                            </div>
                            <p className="text-[13px] font-semibold leading-relaxed">
                                {impact}
                            </p>
                        </div>
                    )}
                </div>

                {/* Subtle Glow Effect on Hover */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--color-primary)]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
