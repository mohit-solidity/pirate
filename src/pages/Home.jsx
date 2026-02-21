import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe, TrendingUp, Code2 } from 'lucide-react';
import { cn } from '../utils/cn';

const Home = () => {
    const navigate = useNavigate();
    const skillCategories = [
        {
            title: "Growth Architecture",
            icon: TrendingUp,
            skills: ["Community Growth", "Loyalty Strategy", "Viral Loops", "Ecosystem Scaling"],
            color: "text-[var(--color-primary)]",
            bgColor: "bg-[var(--color-primary-soft)]",
            borderColor: "border-[var(--color-primary)]/20"
        },
        {
            title: "Moderation & Support",
            icon: Shield,
            skills: ["24/7 Global Moderation", "VIP Player Support", "Crisis Management", "Sentiment Security"],
            color: "text-[var(--clr-secondary-500)]",
            bgColor: "bg-[var(--clr-secondary-500)]/5",
            borderColor: "border-[var(--clr-secondary-500)]/20"
        },
        {
            title: "Technical Stack",
            icon: Code2,
            skills: ["Solidity", "React / Next.js", "Web3 Integration", "Smart Contract Logic"],
            color: "text-orange-400",
            bgColor: "bg-orange-500/5",
            borderColor: "border-orange-500/20"
        },
        {
            title: "Web3 Ecosystems",
            icon: Globe,
            skills: ["DeFi Protocols", "L1 Blockchains", "Memecoin Raids", "GameFi Metaverses"],
            color: "text-green-400",
            bgColor: "bg-green-500/5",
            borderColor: "border-green-500/20"
        }
    ];

    return (
        <Layout>
            {/* Hero & Bio Section */}
            <section className="relative min-h-[80vh] flex flex-col justify-center py-[var(--space-2xl)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-xl)] items-center">
                    {/* Left Column: Bio & Content */}
                    <div className="lg:col-span-7 space-y-[var(--space-lg)]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-[var(--space-xs)] px-[var(--space-md)] py-[var(--space-xs)] rounded-full bg-[var(--color-primary-soft)] border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-[var(--fs-xs)] font-black uppercase tracking-widest backdrop-blur-md"
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
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-fluid-hero leading-[0.85] uppercase mb-[var(--space-md)]">
                                I am <br />
                                <span className="text-[var(--color-primary)]">Pirate</span>
                            </h1>
                            <p className="text-[var(--fs-xl)] text-[var(--color-text-main)] font-black max-w-2xl leading-tight uppercase tracking-tight">
                                Managing Web3 Communities <br />
                                <span className="text-[var(--color-text-dim)]">Since 2022.</span>
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[var(--fs-base)] text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-medium"
                        >
                            Bridging the gap between complex blockchain code and viral community adoption through strategic architecture.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-[var(--space-md)] pt-[var(--space-sm)]"
                        >
                            <Button onClick={() => navigate('/developer')} className="h-[var(--space-xl)] px-[var(--space-lg)] text-[var(--fs-sm)]" variant="primary">
                                View Dev Work <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <Button onClick={() => navigate('/community')} className="h-[var(--space-xl)] px-[var(--space-lg)] text-[var(--fs-sm)]" variant="secondary">
                                Community Work
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual & Stats */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--clr-secondary-500)]/20 rounded-[var(--space-xl)] blur-[100px] animate-pulse" />

                            <div className="relative h-full w-full bg-[var(--color-bg-surface)] backdrop-blur-3xl border border-[var(--glass-border)] rounded-full overflow-hidden flex items-center justify-center group shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/80 via-transparent to-transparent z-10" />
                                <img
                                    src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                    alt="Pirate Profile"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                />

                                <div className="absolute bottom-16 left-0 right-0 text-center z-20">
                                    <div className="inline-block px-[var(--space-md)] py-[var(--space-xs)] bg-[var(--color-bg-deep)]/60 border border-[var(--glass-border)] rounded-full backdrop-blur-xl">
                                        <p className="text-[var(--color-text-dim)] text-[var(--fs-xs)] font-black uppercase tracking-widest">Identity Secured</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Integrated */}
                        <div className="grid grid-cols-2 gap-[var(--space-md)] mt-[var(--space-lg)]">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="p-[var(--space-md)] rounded-[var(--space-lg)] bg-[var(--color-bg-surface)] border border-[var(--glass-border)] backdrop-blur-sm"
                            >
                                <h3 className="text-[var(--fs-2xl)] font-black text-[var(--color-text-main)] tracking-tighter">500k+</h3>
                                <p className="text-[var(--fs-xs)] text-[var(--color-text-dim)] uppercase tracking-widest font-black mt-2">Retention</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="p-[var(--space-md)] rounded-[var(--space-lg)] bg-[var(--color-bg-surface)] border border-[var(--glass-border)] backdrop-blur-sm"
                            >
                                <h3 className="text-[var(--fs-2xl)] font-black text-[var(--color-text-main)] tracking-tighter">15+</h3>
                                <p className="text-[var(--fs-xs)] text-[var(--color-text-dim)] uppercase tracking-widest font-black mt-2">Protocols</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Expertise Section */}
            <section className="py-[var(--space-2xl)] relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-[var(--space-xl)] gap-[var(--space-md)]">
                    <div>
                        <div className="flex items-center gap-[var(--space-sm)] mb-[var(--space-xs)]">
                            <span className="w-12 h-1 bg-[var(--color-primary)] rounded-full" />
                            <span className="text-[var(--fs-xs)] font-black text-[var(--color-primary)] uppercase tracking-widest">Skillset Matrix</span>
                        </div>
                        <h2 className="text-[var(--fs-3xl)] font-black text-[var(--color-text-main)] tracking-tighter uppercase">Expertise.</h2>
                    </div>
                </div>

                <div className="grid-auto-fit">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "p-[var(--space-lg)] rounded-[var(--space-xl)] bg-[var(--color-bg-surface)]/40 backdrop-blur-xl border transition-all duration-500 hover:bg-[var(--glass-bg)] hover:shadow-2xl",
                                cat.borderColor
                            )}
                        >
                            <div className={cn(
                                "p-4 rounded-2xl mb-8 w-fit transition-transform duration-500 group-hover:scale-110",
                                cat.bgColor,
                                cat.color
                            )}>
                                <cat.icon size={28} />
                            </div>
                            <h3 className="text-[var(--fs-lg)] font-black text-[var(--color-text-main)] uppercase tracking-tight mb-6">{cat.title}</h3>
                            <ul className="space-y-[var(--space-xs)]">
                                {cat.skills.map((skill, si) => (
                                    <li key={si} className="flex items-center gap-[var(--space-sm)] text-[var(--fs-sm)] text-[var(--color-text-dim)] transition-colors font-medium">
                                        <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cat.bgColor)} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Marquee Segment (Refactored for Layout Engine) */}
            <section className="py-[var(--space-2xl)] bg-[var(--color-bg-base)] relative overflow-hidden my-[var(--space-2xl)]">
                <div className="container-fluid mb-[var(--space-md)]">
                    <div className="flex items-center gap-[var(--space-xs)]">
                        <Zap className="text-[var(--color-primary)]" size={24} fill="currentColor" />
                        <h2 className="text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] uppercase tracking-widest">Global Tech Stack</h2>
                    </div>
                </div>

                <div className="flex animate-scroll whitespace-nowrap gap-[var(--space-xl)] group opacity-20">
                    {[
                        'Solidity', 'React', 'Zk-Rollups', 'Cross-Chain', 'DeFi 2.0', 'Memecoin Logic', 'Ecosystem Strategy', 'Community Gov',
                        'Foundry', 'Hardhat', 'IPFS', 'TypeScript', 'Docker', 'AI Agents'
                    ].map((tech, idx) => (
                        <span key={`${tech}-${idx}`} className="text-[var(--fs-3xl)] md:text-fluid-hero font-black text-[var(--color-text-main)] transition-all duration-1000 uppercase tracking-tighter hover:text-[var(--color-primary)]">
                            {tech}
                        </span>
                    ))}
                    {/* Secondary loop for infinite effect */}
                    {[
                        'Solidity', 'React', 'Zk-Rollups', 'Cross-Chain', 'DeFi 2.0', 'Memecoin Logic', 'Ecosystem Strategy', 'Community Gov',
                        'Foundry', 'Hardhat', 'IPFS', 'TypeScript', 'Docker', 'AI Agents'
                    ].map((tech, idx) => (
                        <span key={`${tech}-dup-${idx}`} className="text-[var(--fs-3xl)] md:text-fluid-hero font-black text-[var(--color-text-main)] transition-all duration-1000 uppercase tracking-tighter hover:text-[var(--color-primary)]">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
