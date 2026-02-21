import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, BarChart3, Twitter, Send, Zap, ArrowRight, Target, Gamepad2, Coins, Cpu, Layers } from 'lucide-react';

const Community = () => {
    const categories = [
        {
            id: 'casino',
            name: 'Casino & Gaming',
            icon: Gamepad2,
            projects: [
                {
                    name: 'Rakebit',
                    badge: 'Casino / Growth',
                    isActive: true,
                    description: 'Directing strategic growth initiatives and player acquisition for a high-traffic gaming ecosystem.',
                    metric: '35% Engagement Boost',
                    keyImpact: 'Optimized engagement flows and contributed to sustainable, high-velocity user growth through data-driven moderation.',
                    image: 'https://pbs.twimg.com/profile_images/2011114712390381573/urzevaQV_400x400.png',
                    twitter: 'https://x.com/Rakebitcom'
                },
                {
                    name: 'BetU',
                    badge: 'Casino / Support',
                    description: 'Curating world-class customer support and official social presence for a premier betting platform.',
                    metric: '92% Satisfaction Rate',
                    keyImpact: 'Architected VIP retention systems and humanized official social presence for high-value user conversion.',
                    image: 'https://pbs.twimg.com/profile_images/1773745429689094144/vhx8VHBf_400x400.jpg',
                    twitter: 'https://x.com/betuglobal'
                }
            ]
        },
        {
            id: 'memecoins',
            name: 'Memecoins & Social',
            icon: Coins,
            projects: [
                {
                    name: 'ZkTsunami',
                    badge: 'Memecoin / L1',
                    description: 'Architecting early-stage community foundations and viral loops for privacy-centric memecoin protocols.',
                    metric: '12x Social Velocity',
                    keyImpact: 'Engineered viral loop coordination logic and raid strategies for privacy-centric L1 ecosystem launches.',
                    image: 'https://pbs.twimg.com/profile_images/1627911123767885825/Sa72qYMC_400x400.jpg',
                    twitter: 'https://x.com/ZkTsunami'
                },
                {
                    name: 'Trumpcoin',
                    badge: 'Social / Meme',
                    description: 'Scaling community management for high-volume social tokens with 50k+ active members.',
                    metric: '50k+ Community Scale',
                    keyImpact: 'Processed high-concurrency sentiment logs and deployed anti-fud systems for hyper-growth social tokens.',
                    image: 'https://pbs.twimg.com/profile_images/1802697171428315136/ftq17niP_400x400.jpg',
                    twitter: 'https://x.com/DJTtoken'
                },
                {
                    name: 'Eyelabs',
                    badge: 'Meme Tech / NFT',
                    description: 'Managing NFT-backed community labs and coordinating high-level KOL collaborations.',
                    metric: '4.2k KOL Network',
                    keyImpact: 'Synchronized NFT-backed community labs and designed decentralized incentive programs for native reach.',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTMMHCyREdnmMEfznj3TCpqwQ-nVxdHojnQ&s',
                    twitter: 'https://x.com/eyelabs_io'
                }
            ]
        },
        {
            id: 'gamefi',
            name: 'GameFi ecosystems',
            icon: Target,
            projects: [
                {
                    name: 'Avocado',
                    badge: 'GameFi Guild',
                    description: 'Bridging the gap between global players and the metaverse ecosystem through massive guild structures.',
                    metric: '10k+ Scholar Yield',
                    keyImpact: 'Standardized educational funnels for massive guild onboarding and established dominant GameFi presence.',
                    image: 'https://pbs.twimg.com/profile_images/1447613890272006144/SnBZ7oIs_400x400.jpg',
                    twitter: 'https://x.com/avocadoguild'
                },
                {
                    name: 'Blum',
                    badge: 'Gaming / DeFi',
                    description: 'Guiding users through high-traffic hybrid trade funnels and scaling decentralized gaming communities.',
                    metric: '3M+ Unique Inbound',
                    keyImpact: 'Architected hybrid trade funnels for frictionless user transition and managed massive platform sentiment.',
                    image: 'https://pbs.twimg.com/profile_images/1831623678133506048/29dcl6FV_400x400.jpg',
                    twitter: 'https://x.com/blumcrypto'
                }
            ]
        },
        {
            id: 'infra',
            name: 'Infrastructure & DeFi',
            icon: Cpu,
            projects: [
                {
                    name: 'Clore',
                    badge: 'GPU Computing',
                    description: 'Scaling decentralized GPU computing marketplaces and node operator communities at a global scale.',
                    metric: '45% Node Expansion',
                    keyImpact: 'Drove decentralized computing acquisition through technical AMAs and moderated high-concurrency dev ecosystems.',
                    image: 'https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg',
                    twitter: 'https://x.com/clore_ai'
                },
                {
                    name: 'Ratex',
                    badge: 'Technical DeFi',
                    description: 'Resolving complex protocol queries and fostering trader confidence in technical DeFi environments.',
                    metric: '99% Ticket Efficiency',
                    keyImpact: 'Optimized technical protocol support for trader confidence levels and maintained near-perfect resolution rates.',
                    image: 'https://pbs.twimg.com/profile_images/1790703675700355072/wUBLpPIS_400x400.jpg',
                    twitter: 'https://x.com/RateX_Dex'
                },
                {
                    name: 'Pumpad',
                    badge: 'Launchpad',
                    description: 'Conducting successful token sales and managing complex community whitelist infrastructures.',
                    metric: '15+ Core Launches',
                    keyImpact: 'Managed complex IDO whitelist logic and token vesting schedules for high-visibility protocol launches.',
                    image: 'https://pbs.twimg.com/profile_images/1910240290386096128/_B4_D0rr_400x400.jpg',
                    twitter: 'https://x.com/pumpad_io'
                },
                {
                    name: 'Miden',
                    badge: 'L1 / zk-Rollup',
                    description: 'Building educational frameworks for private-first, scalable zk-rollup scaling ecosystems.',
                    metric: '200+ Dev Workshops',
                    keyImpact: 'Built global engagement frameworks for zk-rollup scaling and organized deep-technical community sessions.',
                    image: 'https://pbs.twimg.com/profile_images/1916961429946499073/_4nWxF8L_400x400.png',
                    twitter: 'https://x.com/0xMiden'
                }
            ]
        }
    ];

    const metrics = [
        { label: 'Users Managed', value: '500K+', icon: Users },
        { label: 'Engage Rate', value: '32%', icon: BarChart3 },
        { label: 'Campaigns', value: '80+', icon: Send },
        { label: 'Protocols', value: '15+', icon: Layers }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <Layout>
            <section className="py-[var(--space-2xl)] relative">
                <div className="container-fluid relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-[var(--space-sm)] px-[var(--space-md)] py-[var(--space-xs)] rounded-full bg-[var(--color-primary-soft)] border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-[var(--fs-xs)] font-black uppercase tracking-widest mb-[var(--space-lg)]"
                    >
                        Growth Architecture
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-fluid-hero font-black tracking-tighter mb-[var(--space-md)] text-[var(--color-text-main)] leading-none uppercase italic"
                    >
                        Community <span className="text-[var(--color-primary)]">Management.</span>
                    </motion.h1>
                    <p className="text-[var(--fs-base)] md:text-[var(--fs-lg)] text-[var(--color-text-muted)] max-w-3xl mx-auto font-medium leading-relaxed mask-edge-fade">
                        Strategizing high-velocity growth and community governance across 15+ Web3 protocols. From trending memecoins to institutional infrastructure.
                    </p>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-[var(--color-primary)]/10 mask-radial blur-3xl animate-pulse" />
                </div>
            </section>

            <section className="py-[var(--space-xl)] mb-[var(--space-2xl)]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-grain p-[var(--space-lg)] rounded-[var(--space-xl)] bg-[var(--color-bg-surface)] border border-[var(--glass-border)] text-center group transition-all hover:border-[var(--color-primary)]/30 hover:-translate-y-1"
                        >
                            <div className="p-3 bg-[var(--color-primary-soft)] rounded-xl text-[var(--color-primary)] w-fit mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_var(--color-primary-soft)]">
                                <metric.icon size={24} />
                            </div>
                            <h3 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-black text-[var(--color-text-main)] tracking-tighter mb-2 leading-none">{metric.value}</h3>
                            <p className="text-[var(--fs-xs)] text-[var(--color-text-dim)] uppercase tracking-[0.2em] font-black">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="sticky top-24 z-40 mb-[var(--space-2xl)] hidden md:block">
                <div className="glass-card p-1.5 flex justify-center gap-1.5 bg-black/40 backdrop-blur-3xl shadow-2xl border-[var(--glass-border)] mx-auto w-fit rounded-full">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => scrollToSection(cat.id)}
                            className="px-[var(--space-md)] py-[var(--space-xs)] rounded-full text-[var(--fs-xs)] font-black uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] transition-all flex items-center gap-2"
                        >
                            <cat.icon size={14} />
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-[var(--space-2xl)]">
                {categories.map((cat, ci) => (
                    <section key={ci} id={cat.id} className="scroll-mt-32">
                        <div className="flex items-center gap-[var(--space-md)] mb-[var(--space-xl)]">
                            <div className="p-4 bg-[var(--color-primary-soft)] rounded-[var(--space-lg)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-[0_0_20px_var(--color-primary-soft)]">
                                <cat.icon size={32} />
                            </div>
                            <h2 className="text-[var(--fs-2xl)] md:text-[var(--fs-3xl)] font-black text-[var(--color-text-main)] uppercase tracking-tighter italic mix-blend-screen">{cat.name}.</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[var(--space-xl)] auto-rows-fr">
                            {cat.projects.map((proj, pi) => (
                                <motion.div
                                    key={pi}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass-grain overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all duration-700 flex flex-col rounded-[var(--space-2xl)] h-full"
                                >
                                    <div className="h-64 relative bg-[var(--color-bg-base)] border-b border-[var(--glass-border)] flex items-center justify-center p-[var(--space-xl)] overflow-hidden">
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-primary)]/10 mask-radial blur-3xl pointer-events-none" />
                                        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

                                        <img
                                            src={proj.image}
                                            alt={proj.name}
                                            className="h-32 w-32 object-contain relative z-10 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-[0.8s] rounded-2xl shadow-2xl filter contrast-[1.1]"
                                        />

                                        <div className="absolute top-[var(--space-md)] right-[var(--space-md)] flex flex-col gap-2 items-end z-20">
                                            {proj.isActive && (
                                                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2 backdrop-blur-xl">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_green]" />
                                                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live</span>
                                                </div>
                                            )}
                                            <span className="px-3 py-1 bg-[var(--color-bg-deep)]/60 border border-[var(--glass-border)] rounded-full text-[10px] font-black text-[var(--color-text-dim)] uppercase tracking-widest backdrop-blur-md">
                                                {proj.badge}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-[var(--space-lg)] md:p-[var(--space-xl)] flex flex-col flex-grow bg-gradient-to-b from-transparent to-[var(--color-bg-deep)]/20">
                                        <div className="flex justify-between items-start mb-[var(--space-lg)]">
                                            <h3 className="text-[var(--fs-2xl)] font-black text-[var(--color-text-main)] tracking-tighter uppercase transition-colors group-hover:text-[var(--color-primary)] leading-none">
                                                {proj.name}
                                            </h3>
                                            <a href={proj.twitter} target="_blank" className="p-3.5 bg-[var(--color-bg-base)] border border-[var(--glass-border)] rounded-2xl text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-all group-hover:rotate-6 shadow-inner">
                                                <Twitter size={18} />
                                            </a>
                                        </div>

                                        <div className="space-y-[var(--space-xl)] flex-grow">
                                            <p className="text-[var(--fs-sm)] md:text-[var(--fs-base)] text-[var(--color-text-muted)] font-medium leading-[1.6] mask-edge-fade">
                                                {proj.description}
                                            </p>

                                            {/* Impact Summary with Refined Vertical Alignment */}
                                            <div className="grid grid-cols-[auto_1fr] gap-[var(--space-md)] p-[var(--space-md)] rounded-[var(--space-xl)] bg-[var(--color-bg-deep)]/40 border border-[var(--glass-border)] group/impact relative overflow-hidden transition-all hover:bg-[var(--color-bg-deep)]/60">
                                                <div className="p-3 bg-[var(--color-primary-soft)] rounded-xl text-[var(--color-primary)] h-fit">
                                                    <Target size={18} />
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <h4 className="text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] uppercase tracking-[0.25em] leading-none mb-0.5">Growth Benchmark</h4>
                                                    <span className="text-[var(--fs-lg)] text-[var(--color-text-main)] font-black tracking-tight leading-none mb-1">{proj.metric}</span>
                                                    <p className="text-[var(--fs-xs)] text-[var(--color-text-muted)] font-bold italic leading-relaxed opacity-90 border-l-2 border-[var(--color-primary)]/20 pl-3">
                                                        {proj.keyImpact}
                                                    </p>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/[0.03] to-[var(--color-primary)]/0 -translate-x-full group-hover/impact:translate-x-full transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-[var(--glass-border)] flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] uppercase tracking-[0.2em]">
                                                <Zap size={14} className="text-[var(--color-primary)]" /> System Archive
                                            </div>
                                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-black text-[var(--fs-xs)] uppercase tracking-widest group-hover:translate-x-1 transition-transform group-hover:brightness-125">
                                                Case Study <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
};

export default Community;
