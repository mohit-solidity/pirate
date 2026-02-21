import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Zap, Target, Shield, Globe, Rocket, Cpu, BarChart3, MessageSquare, TrendingUp, Code2 } from 'lucide-react';
import { cn } from '../utils/cn';

const Home = () => {
    const navigate = useNavigate();
    const skillCategories = [
        {
            title: "Growth Architecture",
            icon: TrendingUp,
            skills: ["Community Growth", "Loyalty Strategy", "Viral Loops", "Ecosystem Scaling"],
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/5",
            borderColor: "border-cyan-500/20"
        },
        {
            title: "Moderation & Support",
            icon: Shield,
            skills: ["24/7 Global Moderation", "VIP Player Support", "Crisis Management", "Sentiment Security"],
            color: "text-purple-400",
            bgColor: "bg-purple-500/5",
            borderColor: "border-purple-500/20"
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
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                        {/* Left Column: Bio & Content */}
                        <div className="lg:col-span-7 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                Professional Identity
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.8] uppercase">
                                    I am <br />
                                    <span className="text-cyan-400">Pirate</span>
                                </h1>
                                <p className="text-2xl md:text-3xl text-white/90 font-black max-w-2xl leading-tight uppercase tracking-tighter">
                                    Managing Web3 Communities <br />
                                    <span className="text-gray-500">Since 2022.</span>
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-gray-400 max-w-2xl leading-relaxed font-medium"
                            >
                                Bridging the gap between complex blockchain code and viral community adoption through strategic architecture.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-center gap-6 pt-4"
                            >
                                <Button onClick={() => navigate('/developer')} className="w-full sm:w-auto h-16 px-10 text-lg font-black uppercase tracking-widest rounded-3xl group" variant="primary">
                                    View Dev Work <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                                <Button onClick={() => navigate('/community')} className="w-full sm:w-auto h-16 px-10 text-lg font-black uppercase tracking-widest rounded-3xl group transition-all" variant="secondary">
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
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[5rem] blur-[100px] animate-pulse" />

                                <div className="relative h-full w-full bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full overflow-hidden flex items-center justify-center group shadow-[0_0_100px_rgba(0,240,255,0.1)]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                    <img
                                        src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                        alt="Pirate Profile"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />

                                    <div className="absolute bottom-16 left-0 right-0 text-center z-20">
                                        <div className="inline-block px-6 py-3 bg-black/60 border border-white/10 rounded-full backdrop-blur-xl">
                                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.5em]">Identity Secured</p>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 right-10 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-xl text-cyan-400 z-30">
                                        <Shield size={24} />
                                    </motion.div>
                                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-32 left-10 p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-xl text-purple-400 z-30">
                                        <Rocket size={24} />
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.5, type: 'spring' }}
                                        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] border-4 border-[#080808] z-40 overflow-hidden"
                                    >
                                        <img
                                            src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                            alt="Logo"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Stats Integrated */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                                >
                                    <h3 className="text-4xl font-black text-white tracking-tighter">500k+</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mt-2">Retention</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                                >
                                    <h3 className="text-4xl font-black text-white tracking-tighter">15+</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mt-2">Protocols</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Expertise Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-12 h-1 bg-cyan-500 rounded-full" />
                                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Skillset Matrix</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">Expertise.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "p-10 rounded-[3rem] border bg-black/40 backdrop-blur-xl group transition-all duration-500",
                                    cat.borderColor,
                                    "hover:bg-white/[0.02]"
                                )}
                            >
                                <div className={cn(
                                    "p-4 rounded-2xl mb-8 w-fit transition-transform duration-500 group-hover:scale-110",
                                    cat.bgColor,
                                    cat.color
                                )}>
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">{cat.title}</h3>
                                <ul className="space-y-4">
                                    {cat.skills.map((skill, si) => (
                                        <li key={si} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                            <div className={cn("w-1.5 h-1.5 rounded-full", cat.bgColor, "border", cat.borderColor)} />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Marquee Segment */}
            <section className="py-32 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Zap className="text-cyan-500" size={24} fill="currentColor" />
                        <h2 className="text-xs font-black text-gray-500 uppercase tracking-[0.5em]">Global Tech Stack</h2>
                    </div>
                </div>

                <div className="flex animate-scroll whitespace-nowrap gap-16 group">
                    {[
                        'Solidity', 'React', 'Zk-Rollups', 'Cross-Chain', 'DeFi 2.0', 'Memecoin Logic', 'Ecosystem Strategy', 'Community Gov',
                        'Foundry', 'Hardhat', 'IPFS', 'TypeScript', 'Docker', 'AI Agents'
                    ].map((tech) => (
                        <span key={tech} className="text-5xl md:text-8xl font-black text-white/[0.04] group-hover:text-cyan-500/40 transition-all duration-1000 uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                    {/* Duplicate for infinite loop effect */}
                    {[
                        'Solidity', 'React', 'Zk-Rollups', 'Cross-Chain', 'DeFi 2.0', 'Memecoin Logic', 'Ecosystem Strategy', 'Community Gov',
                        'Foundry', 'Hardhat', 'IPFS', 'TypeScript', 'Docker', 'AI Agents'
                    ].map((tech) => (
                        <span key={`${tech}-2`} className="text-5xl md:text-8xl font-black text-white/[0.04] group-hover:text-cyan-500/40 transition-all duration-1000 uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
