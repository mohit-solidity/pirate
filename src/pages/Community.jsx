import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, BarChart3, MessageSquare, Twitter, Send, Layers, Zap, Hash, ExternalLink, ArrowRight, CheckCircle2, Shield, Target, Cpu, Gamepad2, Coins } from 'lucide-react';

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
                    role: 'Community Manager',
                    isActive: true,
                    description: 'Working as a community manager and helps in planning strategic growth initiatives and player acquisition.',
                    keyImpact: 'Managed player communication, optimized engagement flows, and contributed to sustainable user growth.',
                    responsibilities: [
                        'Managed global Discord/Telegram growth strategy',
                        'Optimized player engagement and referral flows',
                        'Coordinated VIP community events and tournaments',
                        'Maintained zero-tolerance moderation for safe gaming'
                    ],
                    metric: '35% Engagement Boost',
                    image: 'https://pbs.twimg.com/profile_images/2011114712390381573/urzevaQV_400x400.png',
                    twitter: 'https://x.com/Rakebitcom'
                },
                {
                    name: 'BetU',
                    badge: 'Casino / Support',
                    role: 'VIP Support & X Manager',
                    description: 'Working as VIP customer support and helps in managing official social presence and high-value player relations.',
                    keyImpact: 'Enhanced VIP player satisfaction while maintaining active brand presence and engagement on X.',
                    responsibilities: [
                        'Managed VIP customer support interactions directly',
                        'Controlled official X (Twitter) presence and brand voice',
                        'Enhanced high-value player retention by 40%',
                        'Coordinated real-time betting updates and promotions'
                    ],
                    metric: 'VIP Satisfaction Lead',
                    image: 'https://pbs.twimg.com/profile_images/1773745429689094144/vhx8VHBf_400x400.jpg',
                    twitter: 'https://x.com/betuglobal'
                }
            ]
        },
        {
            id: 'memecoins',
            name: 'Memecoin Communities',
            icon: Coins,
            projects: [
                {
                    name: 'ZkTsunami',
                    badge: 'Memecoin / L1',
                    role: 'Community Architect',
                    description: 'Working as a community architect and helps in building viral growth loops and privacy-focused engagement.',
                    keyImpact: 'Architected initial community foundations, spearheaded raid coordination, and managed high-traffic sentiment.',
                    responsibilities: [
                        'Architected the initial community foundation and viral loops',
                        'Spearheaded raid coordination and social sentiment management',
                        'Managed high-traffic Telegram channels during price discovery',
                        'Educated users on privacy-focused transaction mechanics'
                    ],
                    metric: 'Viral Growth Engine',
                    image: 'https://pbs.twimg.com/profile_images/1627911123767885825/Sa72qYMC_400x400.jpg',
                    twitter: 'https://x.com/ZkTsunami'
                },
                {
                    name: 'Eyelabs',
                    badge: 'Meme Tech / NFT',
                    role: 'Growth Specialist',
                    description: 'Working as a growth specialist and helps in managing NFT-backed community labs and KOL collaborations.',
                    keyImpact: 'Led community engagement for NFT-backed tokens and designed community-led incentive programs.',
                    responsibilities: [
                        'Led community engagement for NFT-backed tokens',
                        'Managed cross-culture collaborations with major meme KOLs',
                        'Designed community-led incentive programs',
                        'Maintained 24/7 moderation during launch phases'
                    ],
                    metric: 'Culture Native Reach',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTMMHCyREdnmMEfznj3TCpqwQ-nVxdHojnQ&s',
                    twitter: 'https://x.com/eyelabs_io'
                },
                {
                    name: 'Trumpcoin',
                    badge: 'Trending / Memecoin',
                    role: 'Moderation Lead',
                    description: 'Working as a moderation lead and helps in scaling community management for high-volume social tokens.',
                    keyImpact: 'Managed 50k+ active members, implemented advanced anti-scam systems, and coordinated major community raids.',
                    responsibilities: [
                        'Managed a community of 50k+ active members',
                        'Implemented advanced anti-FUD and anti-scam bots',
                        'Coordinated major community raids and marketing pushes',
                        'Scaled support team to handle 10k messages per hour'
                    ],
                    metric: '50k+ Members Managed',
                    image: 'https://pbs.twimg.com/profile_images/1802697171428315136/ftq17niP_400x400.jpg',
                    twitter: 'https://x.com/DJTtoken'
                }
            ]
        },
        {
            id: 'gamefi',
            name: 'GameFi & Metaverses',
            icon: Target,
            projects: [
                {
                    name: 'Avocado',
                    badge: 'GameFi Guild',
                    role: 'Community Lead',
                    description: 'Working as a community lead and helps in bridging the gap between global players and the metaverse ecosystem.',
                    keyImpact: 'Empowered 10k+ scholars through education, managed global Discord hubs, and established dominant GameFi presence.',
                    responsibilities: [
                        'Empowered 10k+ scholars through structured education',
                        'Managed a global community across multiple Discord hubs',
                        'Coordinated scholarship programs and P2E tournaments',
                        'Established Avocado as a top-3 global GameFi guild'
                    ],
                    metric: '10k+ Scholars Onboarded',
                    image: 'https://pbs.twimg.com/profile_images/1447613890272006144/SnBZ7oIs_400x400.jpg',
                    twitter: 'https://x.com/avocadoguild'
                },
                {
                    name: 'Blum',
                    badge: 'Gaming / DeFi',
                    role: 'Community Growth',
                    description: 'Working as a community growth expert and helps in guiding users through high-traffic hybrid trade funnels.',
                    keyImpact: 'Guided millions of users through the onboarding funnel, managed sentiment, and resolved platform queries.',
                    responsibilities: [
                        'Guided millions of users through the Blum onboarding funnel',
                        'Answered platform queries for high-traffic trading pools',
                        'Managed FUD and sentiment during rapid scaling phases',
                        'Organized cross-community gaming tournaments'
                    ],
                    metric: 'Millions Onboarded',
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
                    role: 'Growth Lead',
                    description: 'Working as a growth lead and helps in scaling decentralized GPU computing marketplaces and node operator communities.',
                    keyImpact: 'Drove node operator acquisition through AMAs and moderated technical discussions in high-tech ecosystems.',
                    responsibilities: [
                        'Led community growth for the decentralized marketplace',
                        'Moderated technical discussions on hash power and nodes',
                        'Safeguarded quality interactions in a high-tech ecosystem',
                        'Drove node operator acquisition through AMAs'
                    ],
                    metric: 'Node Network Growth',
                    image: 'https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg',
                    twitter: 'https://x.com/clore_ai'
                },
                {
                    name: 'Ratex',
                    badge: 'Technical DeFi',
                    role: 'Technical MOD',
                    description: 'Working as a technical MOD and helps in resolving complex protocol queries and fostering trader confidence.',
                    keyImpact: 'Maintained 99% ticket resolution rate and improved user confidence through accurate technical protocol support.',
                    responsibilities: [
                        'Resolved complex technical user queries for RateX DEX',
                        'Improved confidence by delivering accurate protocol support',
                        'Fostered a welcoming atmosphere for professional traders',
                        'Maintained 99% ticket resolution rate'
                    ],
                    metric: 'DEX Technical Expert',
                    image: 'https://pbs.twimg.com/profile_images/1790703675700355072/wUBLpPIS_400x400.jpg',
                    twitter: 'https://x.com/RateX_Dex'
                },
                {
                    name: 'Pumpad',
                    badge: 'Launchpad',
                    role: 'IDO Specialist',
                    description: 'Working as an IDO specialist and helps in conducting successful token sales and community whitelist management.',
                    keyImpact: 'Supported 15+ successful project launches and educated users on complex token vesting schedules.',
                    responsibilities: [
                        'Managed whitelist and participation support for 15+ launches',
                        'Educated users on tokenomics and project vesting schedules',
                        'Prevented spam during high-pressure launch minutes',
                        'Supported IDO sessions with project founders'
                    ],
                    metric: '15+ Successful Launches',
                    image: 'https://pbs.twimg.com/profile_images/1910240290386096128/_B4_D0rr_400x400.jpg',
                    twitter: 'https://x.com/pumpad_io'
                },
                {
                    name: 'Miden',
                    badge: 'L1 / zk-Rollup',
                    role: 'Growth Lead',
                    description: 'Working as a growth lead and helps in building educational frameworks for private-first, scalable zk-rollup scaling.',
                    keyImpact: 'Built global engagement for the rollup ecosystem and organized developer-focused community workshops.',
                    responsibilities: [
                        'Built educational frameworks for complex ZK mechanics',
                        'Spearheaded global engagement for the rollup ecosystem',
                        'Organized developer-focused community workshops',
                        'Managed decentralization governance initiatives'
                    ],
                    metric: 'Rollup Growth Master',
                    image: 'https://pbs.twimg.com/profile_images/1916961429946499073/_4nWxF8L_400x400.png',
                    twitter: 'https://x.com/0xMiden'
                }
            ]
        }
    ];

    const metrics = [
        { label: 'Total Members Managed', value: '500K+', icon: Users },
        { label: 'Avg Engagement Rate', value: '32%', icon: BarChart3 },
        { label: 'Campaigns Executed', value: '80+', icon: Send },
        { label: 'Networks Covered', value: '15+', icon: MessageSquare }
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Advanced Hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-32 relative text-center"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                        Elite <span className="text-cyan-400">Growth</span><br />
                        Architecture
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Strategizing high-velocity growth and community governance across 15+ Web3 protocols. From trending memecoins to institutional infrastructure.
                    </p>
                </motion.div>

                {/* Refined Navigation */}
                <div className="sticky top-24 z-40 mb-32 hidden md:block">
                    <div className="bg-black/40 backdrop-blur-2xl p-3 border border-white/5 rounded-3xl flex justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => scrollToSection(cat.id)}
                                className="px-8 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all active:scale-95 flex items-center gap-3"
                            >
                                <cat.icon size={12} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-48">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 flex flex-col items-center text-center group hover:border-cyan-500/20 transition-all"
                        >
                            <div className="p-4 bg-cyan-500/5 rounded-2xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                <metric.icon size={24} />
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{metric.value}</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="space-y-48">
                    {categories.map((cat, ci) => (
                        <section key={ci} id={cat.id} className="scroll-mt-32">
                            <div className="flex items-center gap-6 mb-20">
                                <div className="p-5 bg-cyan-500/10 rounded-3xl text-cyan-400">
                                    <cat.icon size={32} />
                                </div>
                                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">{cat.name}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                                {cat.projects.map((proj, pi) => (
                                    <motion.div
                                        key={pi}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-[4rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-700"
                                    >
                                        <div className="h-72 bg-neutral-900/20 relative flex items-center justify-center p-16 border-b border-white/5 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />

                                            <img
                                                src={proj.image}
                                                alt={proj.name}
                                                className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700"
                                            />

                                            <div className="absolute top-8 right-8 flex flex-col gap-2 items-end">
                                                {proj.isActive && (
                                                    <div className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2 backdrop-blur-xl">
                                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                        <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live Now</span>
                                                    </div>
                                                )}
                                                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/50 uppercase tracking-widest backdrop-blur-xl">
                                                    {proj.badge}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-10 md:p-16 flex flex-col flex-grow relative z-10">
                                            <div className="flex justify-between items-start mb-12">
                                                <div>
                                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                                                        {proj.name}
                                                    </h3>
                                                    <p className="text-[10px] text-cyan-500/60 font-black uppercase tracking-[0.4em] mt-2">
                                                        {proj.role}
                                                    </p>
                                                </div>
                                                <a
                                                    href={proj.twitter}
                                                    target="_blank"
                                                    className="p-4 bg-white/5 rounded-2xl text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all border border-white/5 group-hover:rotate-12"
                                                >
                                                    <Twitter size={18} />
                                                </a>
                                            </div>

                                            <div className="space-y-12 flex-grow">
                                                <div>
                                                    <h4 className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                                        The Project
                                                    </h4>
                                                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                                        {proj.description}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                                                        <Zap size={12} className="text-cyan-400" />
                                                        Key Impact
                                                    </h4>
                                                    <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                                        {proj.keyImpact}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                                                        <CheckCircle2 size={12} className="text-cyan-500" />
                                                        Strategic Role
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {proj.responsibilities.map((r, i) => (
                                                            <li key={i} className="flex items-start gap-4 text-sm text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
                                                                <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                                                                {r}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                                                        <Zap size={18} fill="currentColor" />
                                                    </div>
                                                    <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">{proj.metric}</span>
                                                </div>
                                                <ArrowRight className="text-white/10 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all" size={20} />
                                            </div>
                                        </div>
                                    </motion.div>
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
