import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard'; // Using unified ProjectCard
import { motion } from 'framer-motion';
import { Users, BarChart3, Send, Layers, Hexagon, Zap } from 'lucide-react';

const Community = () => {
    const categories = [
        {
            id: 'casino',
            name: 'Casino & Gaming',
            projects: [
                {
                    name: 'Rakebit',
                    badge: 'Casino / Growth',
                    description: 'I directed social growth and player acquisition for this high-traffic ecosystem, focusing on building a loyal and active gaming community.',
                    metric: '35% Engagement Boost',
                    keyImpact: 'Optimized engagement flows and contributed to sustainable, high-velocity user growth through data-driven moderation.',
                    image: 'https://pbs.twimg.com/profile_images/2011114712390381573/urzevaQV_400x400.png',
                    twitter: 'https://x.com/Rakebitcom'
                },
                {
                    name: 'BetU',
                    badge: 'Casino / Support',
                    description: 'I curated world-class support systems and managed the official social presence, ensuring high-value users felt seen and supported.',
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
            projects: [
                {
                    name: 'ZkTsunami',
                    badge: 'Memecoin / L1',
                    description: 'I architected the early community foundation and viral growth loops for this privacy-centric protocol, driving early-stage adoption.',
                    metric: '12x Social Velocity',
                    keyImpact: 'Engineered viral loop coordination logic and raid strategies for privacy-centric L1 ecosystem launches.',
                    image: 'https://pbs.twimg.com/profile_images/1627911123767885825/Sa72qYMC_400x400.jpg',
                    twitter: 'https://x.com/ZkTsunami'
                },
                {
                    name: 'Trumpcoin',
                    badge: 'Social / Meme',
                    description: 'I scaled the community management for this massive social token, maintaining order and positive sentiment for 50k+ active members.',
                    metric: '50k+ Community Scale',
                    keyImpact: 'Processed high-concurrency sentiment logs and deployed anti-fud systems for hyper-growth social tokens.',
                    image: 'https://pbs.twimg.com/profile_images/1802697171428315136/ftq17niP_400x400.jpg',
                    twitter: 'https://x.com/DJTtoken'
                },
                {
                    name: 'Eyelabs',
                    badge: 'Meme Tech / NFT',
                    description: 'I managed the NFT-backed community labs and coordinated collaborations with key opinion leaders to expand the ecosystems reach.',
                    metric: '4.2k KOL Network',
                    keyImpact: 'Synchronized NFT-backed community labs and designed decentralized incentive programs for native reach.',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTMMHCyREdnmMEfznj3TCpqwQ-nVxdHojnQ&s',
                    twitter: 'https://x.com/eyelabs_io'
                }
            ]
        },
        {
            id: 'gamefi',
            name: 'GameFi Ecosystems',
            projects: [
                {
                    name: 'Avocado',
                    badge: 'GameFi Guild',
                    description: 'I bridged the gap between global players and the metaverse by building massive guild structures and onboarding systems.',
                    metric: '10k+ Scholar Yield',
                    keyImpact: 'Standardized educational funnels for massive guild onboarding and established dominant GameFi presence.',
                    image: 'https://pbs.twimg.com/profile_images/1447613890272006144/SnBZ7oIs_400x400.jpg',
                    twitter: 'https://x.com/avocadoguild'
                },
                {
                    name: 'Blum',
                    badge: 'Gaming / DeFi',
                    description: 'I guided users through complex trade funnels and scaled the decentralized gaming community to reach millions of unique players.',
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
            projects: [
                {
                    name: 'Clore',
                    badge: 'GPU Computing',
                    description: 'I scaled the decentralized GPU computing marketplace, building a global community of node operators and developers.',
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
            <div className="py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-32"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)] mb-10">
                        <Hexagon size={14} /> Community Manager
                    </div>
                    <h1 className="text-fluid-hero font-extrabold tracking-tighter leading-[0.9] uppercase mb-12">
                        Community <br />
                        <span className="text-grad-blue">Growth.</span>
                    </h1>
                    <p className="text-[var(--fs-lg)] text-[var(--color-text-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
                        I specialize in architecting strategic growth for high-velocity Web3 protocols, bridging the gap between technical governance and the people who use them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
                    {metrics.map((metric, i) => (
                        <div key={i} className="glass-card p-10 relative overflow-hidden group">
                            <div className="relative z-10">
                                <metric.icon size={24} className="text-[var(--color-primary)] mb-8" />
                                <h3 className="text-[var(--fs-2xl)] font-extrabold tracking-tighter mb-2">{metric.value}</h3>
                                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-black">{metric.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-40">
                    {categories.map((cat, ci) => (
                        <section key={ci}>
                            <div className="flex items-center gap-6 mb-16">
                                <span className="text-[var(--fs-base)] font-bold text-[var(--color-primary)] opacity-40 italic">0{ci + 1}</span>
                                <h2 className="text-[var(--fs-xl)] font-extrabold uppercase tracking-tighter">{cat.name}</h2>
                                <div className="flex-grow h-[1px] bg-white/10" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {cat.projects.map((proj, pi) => (
                                    <ProjectCard key={pi} project={proj} index={pi} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Community;
