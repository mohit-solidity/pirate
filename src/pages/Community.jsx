import React, { useRef, useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Users, BarChart3, Twitter, Send, Zap, ArrowRight, Target, Gamepad2, Coins, Cpu, Layers, Activity, Hexagon } from 'lucide-react';
import { cn } from '../utils/cn';

const Community = () => {
    // Shared 3D Mouse Track for Hero
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

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
        { label: 'Active Management', value: '500K+', icon: Users, detail: 'Real-time flow' },
        { label: 'Increase Engagement', value: '32%', icon: BarChart3, detail: 'Node response' },
        { label: 'Core Campaigns', value: '80+', icon: Send, detail: 'Tactical drop' },
        { label: 'Protocols', value: '15+', icon: Layers, detail: 'L1/L2 Grid' }
    ];

    return (
        <Layout>
            <section
                className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden perspective-container"
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    className="container-fluid relative z-10 text-center preserve-3d"
                    style={{
                        rotateX: useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10])),
                        rotateY: useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10])),
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-luxe text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--color-primary)] mb-10 border border-[var(--color-primary)]/20"
                    >
                        <Hexagon size={14} className="animate-spin-slow" />Community Manager
                    </motion.div>

                    <h1 className="text-fluid-hero font-bold tracking-tighter leading-[0.85] uppercase italic">
                        <span className="text-[var(--color-text-main)] block">Community</span>
                        <span className="text-grad-gold block">Management.</span>
                    </h1>

                    <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent mx-auto my-12" />

                    <p className="text-[var(--fs-lg)] text-[var(--color-text-dim)] max-w-2xl mx-auto font-medium leading-relaxed tracking-wide uppercase">
                        Deploying strategic growth architecture across hyper-velocity Web3 protocols. <br />
                        Tactical governance at the intersection of DeFi and Culture.
                    </p>
                </motion.div>

                <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle,hsla(var(--clr-purple)/0.1)_0%,transparent_60%)] animate-pulse" />
                </div>
            </section>

            <section className="py-32 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="glass-luxe p-10 rounded-[32px] border border-[var(--glass-border)] group relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-16">
                                <div className="p-4 glass-luxe rounded-2xl text-[var(--color-primary)] border border-[var(--color-primary)]/10">
                                    <metric.icon size={22} />
                                </div>
                                <span className="text-[9px] font-black text-[var(--color-primary)]/40 tracking-[0.4em] uppercase">{metric.detail}</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-main)] tracking-tighter mb-2 leading-none">
                                    {metric.value}
                                </h3>
                                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-[0.3em] font-black">{metric.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="space-y-64 py-48">
                {categories.map((cat, ci) => (
                    <section key={ci} className="container-fluid scroll-mt-32">
                        <div className="flex items-end gap-10 mb-32 border-b border-[var(--glass-border)] pb-12 relative overflow-hidden">
                            <span className="text-9xl font-bold text-[var(--color-primary)]/5 leading-none select-none italic absolute -left-12 -top-12">0{ci + 1}</span>
                            <div className="flex flex-col relative z-10">
                                <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.6em] mb-4">Category.System</span>
                                <h2 className="text-[var(--fs-3xl)] font-bold text-[var(--color-text-main)] uppercase tracking-tighter italic">{cat.name}.</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {cat.projects.map((proj, pi) => (
                                <ProjectCard key={pi} project={proj} index={pi} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
};

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["12px", "0px", "0px", "12px"]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, scale, opacity, filter: blur }}
            className="group relative"
        >
            <div className="glass-luxe rounded-[48px] border border-[var(--glass-border)] overflow-hidden transition-all duration-1000 group-hover:border-[var(--color-primary)]/30">
                <div className="p-10 pb-0 flex justify-between items-center relative z-10">
                    <span className="text-[10px] font-black text-[var(--color-primary)]/50 uppercase tracking-[0.4em]">
                        Node_0{index} // {project.badge}
                    </span>
                    <a href={project.twitter} target="_blank" className="p-4 glass-luxe rounded-full hover:bg-[var(--color-primary)] hover:text-black transition-all">
                        <Twitter size={16} />
                    </a>
                </div>

                <div className="h-[400px] relative flex items-center justify-center p-16 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative z-20"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-56 w-56 object-contain group-hover:scale-110 transition-all duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-[var(--color-primary)]/10 blur-[60px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                </div>

                <div className="p-16 pt-0">
                    <h3 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-main)] mb-10 tracking-tighter uppercase italic group-hover:text-grad-gold transition-all duration-700">
                        {project.name}
                    </h3>

                    <div className="space-y-12">
                        <p className="text-[var(--fs-base)] text-[var(--color-text-dim)] font-medium leading-relaxed italic border-l-2 border-[var(--color-primary)]/30 pl-10 tracking-wide">
                            {project.description}
                        </p>

                        <div className="p-10 rounded-[32px] glass-luxe border border-[var(--glass-border)] group-hover:border-[var(--color-primary)]/20 transition-all duration-1000 relative overflow-hidden">
                            <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.5em] mb-6 block opacity-60">Benchmark: {project.metric}</span>
                            <p className="text-[14px] text-[var(--color-text-main)] font-bold leading-relaxed tracking-tight relative z-10">
                                {project.keyImpact}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-text-dim)]">
                            <Zap size={14} className="text-[var(--color-primary)]" /> System.Link
                        </div>
                        <div className="flex items-center gap-3 text-[var(--color-primary)] text-[10px] font-black uppercase tracking-[0.4em] group-hover:translate-x-3 transition-transform">
                            Archive <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Community;
