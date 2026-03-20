import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Magnetic from '../components/ui/Magnetic';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, TrendingUp, Code2 } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

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
            <section className="min-h-[85vh] flex flex-col justify-center py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-8 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
                            </span>
                            Professional Identity
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-fluid-hero font-extrabold tracking-tighter leading-[0.9] uppercase mb-10">
                                I am <br />
                                <span className="text-grad-blue">Pirate.</span>
                            </h1>
                            <p className="text-[var(--fs-xl)] text-[var(--color-text-muted)] font-bold max-w-2xl leading-tight uppercase">
                                Managing Web3 Communities <br />
                                <span className="text-[var(--color-text-main)]">Since 2022.</span>
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[var(--fs-base)] text-[var(--color-text-dim)] max-w-xl leading-relaxed font-medium"
                        >
                            Bridging the gap between complex blockchain code and viral community adoption through strategic growth architecture and secure moderation systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-6 pt-10"
                        >
                            <Button onClick={() => navigate('/developer')} className="h-16 px-12 text-[12px] uppercase font-bold tracking-widest" variant="secondary">
                                View Dev Work
                            </Button>
                            <Magnetic strength={0.1}>
                                <Button onClick={() => navigate('/community')} className="h-16 px-12 text-[12px] uppercase font-bold tracking-widest shadow-2lx shadow-[var(--color-primary)]/20 border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-black hover:scale-105" variant="primary">
                                    Community Work <ArrowRight className="ml-3 w-4 h-4" />
                                </Button>
                            </Magnetic>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-square w-full max-w-[400px] mx-auto group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full blur-[80px] animate-pulse" />
                            <div className="relative h-full w-full glass-card rounded-full overflow-hidden p-2 border-white/10 group-hover:scale-105 transition-all duration-700">
                                <img
                                    src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                    alt="Pirate Profile"
                                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-10 h-[1px] bg-[var(--color-primary)]" />
                            <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.5em]">Skillset Matrix</span>
                        </div>
                        <h2 className="text-[var(--fs-2xl)] font-extrabold uppercase tracking-tighter">Expertise.</h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="glass-card p-10 hover:border-[var(--color-primary)]/30 transition-all duration-500">
                            <div className="p-4 rounded-2xl mb-10 w-fit bg-white/5 border border-white/5" style={{ color: cat.accent }}>
                                <cat.icon size={24} />
                            </div>
                            <h3 className="text-[var(--fs-base)] font-bold uppercase tracking-tight mb-8">{cat.title}</h3>
                            <ul className="space-y-4">
                                {cat.skills.map((skill, si) => (
                                    <li key={si} className="flex items-center gap-4 text-[13px] text-[var(--color-text-muted)] font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
