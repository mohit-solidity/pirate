import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '../../utils/cn';

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

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
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-white/10">
                {/* Project Type Badge */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                        <Code size={24} />
                    </div>
                    <div className="flex gap-2">
                        <a href="https://github.com/mohit-solidity" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                <div className="space-y-4 mb-8">
                    <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Features</p>
                    <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                                <span className="w-1 h-1 bg-cyan-500 rounded-full" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 hover:text-cyan-400 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
