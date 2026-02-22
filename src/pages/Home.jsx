import React, { useRef } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Magnetic from '../components/ui/Magnetic';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe, TrendingUp, Code2 } from 'lucide-react';
import { cn } from '../utils/cn';

const Home = () => {
    const navigate = useNavigate();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const skillCategories = [
        {
            title: "Growth Architecture",
            icon: TrendingUp,
            skills: ["Community Growth", "Loyalty Strategy", "Viral Loops", "Ecosystem Scaling"],
            accent: "var(--color-primary)"
        },
        {
            title: "Moderation & Support",
            icon: Shield,
            skills: ["24/7 Global Moderation", "VIP Player Support", "Crisis Management", "Sentiment Security"],
            accent: "var(--color-accent)"
        },
        {
            title: "Technical Stack",
            icon: Code2,
            skills: ["Solidity", "React / Next.js", "Web3 Integration", "Smart Contract Logic"],
            accent: "#F59E0B"
        },
        {
            title: "Web3 Ecosystems",
            icon: Globe,
            skills: ["DeFi Protocols", "L1 Blockchains", "Memecoin Raids", "GameFi Metaverses"],
            accent: "#10B981"
        }
    ];

    return (
        <Layout>
            <section ref={targetRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
                <motion.div style={{ opacity, scale, y }} className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-xl)] items-center relative z-10">

                    <div className="lg:col-span-7 space-y-[var(--space-lg)]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border-gradient-animate glass-luxe text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
                            </span>
                            Professional Identity
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <h1 className="text-fluid-hero leading-[0.8] mb-8 italic uppercase">
                                <span className="text-[var(--color-text-main)] block">I am</span>
                                <span className="text-grad-gold block">Pirate.</span>
                            </h1>
                            <p className="text-[var(--fs-xl)] text-[var(--color-text-muted)] font-bold max-w-2xl leading-tight tracking-tight uppercase">
                                Managing Web3 Communities <br />
                                <span className="text-[var(--color-text-main)]">Since 2022.</span>
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[var(--fs-base)] text-[var(--color-text-dim)] max-w-xl leading-relaxed font-medium tracking-wide"
                        >
                            Bridging the gap between complex blockchain code and viral community adoption through strategic architecture.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-[var(--space-md)] pt-8"
                        >
                            <Magnetic strength={0.2}>
                                <Button onClick={() => navigate('/developer')} className="h-16 px-10 text-[12px] shadow-2xl" variant="primary">
                                    View Dev Work <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.3}>
                                <Button onClick={() => navigate('/community')} className="h-16 px-10 text-[12px]" variant="secondary">
                                    Community Work
                                </Button>
                            </Magnetic>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                            className="perspective-container relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse" />

                            <motion.div
                                whileHover={{ rotateX: 10, rotateY: -10 }}
                                className="relative h-full w-full glass-luxe rounded-full overflow-hidden p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[var(--glass-border)] preserve-3d"
                            >
                                <img
                                    src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                    alt="Pirate Profile"
                                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/60 to-transparent pointer-events-none" />

                                <div className="absolute bottom-12 left-0 right-0 text-center z-20">
                                    <div className="inline-block px-6 py-2 glass-luxe border border-[var(--glass-border)] rounded-full backdrop-blur-xl">
                                        <p className="text-[var(--color-text-dim)] text-[10px] font-bold uppercase tracking-widest">Identity Secured</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <motion.div className="p-6 rounded-3xl glass-luxe border border-[var(--glass-border)]">
                                    <h3 className="text-2xl font-bold text-[var(--color-text-main)] tracking-tighter">500k+</h3>
                                    <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-bold mt-2">Retention</p>
                                </motion.div>
                                <motion.div className="p-6 rounded-3xl glass-luxe border border-[var(--glass-border)]">
                                    <h3 className="text-2xl font-bold text-[var(--color-text-main)] tracking-tighter">15+</h3>
                                    <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-bold mt-2">Protocols</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section className="py-[var(--space-2xl)] relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-[2px] bg-[var(--color-primary)]" />
                            <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.5em]">Skillset Matrix</span>
                        </div>
                        <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-main)] uppercase italic">Expertise.</h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="glass-luxe p-10 rounded-[32px] border border-[var(--glass-border)] group hover:border-[var(--color-primary)]/30 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="p-4 rounded-2xl mb-10 w-fit relative z-10 glass-luxe border border-[var(--glass-border)]" style={{ color: cat.accent }}>
                                <cat.icon size={28} />
                                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-5 blur-xl rounded-full" />
                            </div>

                            <h3 className="text-[var(--fs-base)] font-bold text-[var(--color-text-main)] uppercase tracking-tight mb-8 relative z-10">{cat.title}</h3>

                            <ul className="space-y-4 relative z-10">
                                {cat.skills.map((skill, si) => (
                                    <li key={si} className="flex items-center gap-4 text-[13px] text-[var(--color-text-muted)] font-medium transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-[var(--color-primary)]/40 transition-all" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-all" style={{ backgroundColor: cat.accent }} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-[var(--space-xl)] bg-[var(--color-bg-base)]/30 border-y border-[var(--glass-border)] relative overflow-hidden my-32">
                <div className="flex animate-scroll whitespace-nowrap gap-24 group py-8">
                    {[
                        'Solidity', 'React', 'Zk-Rollups', 'Cross-Chain', 'DeFi 2.0', 'Memecoin Logic', 'Ecosystem Strategy', 'Community Gov',
                        'Foundry', 'Hardhat', 'IPFS', 'TypeScript', 'Docker', 'AI Agents'
                    ].map((tech, idx) => (
                        <div key={`${tech}-${idx}`} className="flex items-center gap-6">
                            <span className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-muted)] uppercase tracking-tighter hover:text-grad-gold transition-all duration-700 cursor-default opacity-30 hover:opacity-100">
                                {tech}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]/20" />
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
