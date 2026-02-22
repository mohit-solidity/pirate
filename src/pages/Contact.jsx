import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Github, Twitter, Send, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';

const Contact = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => setFormState('sent'), 1500);
    };

    const socials = [
        { icon: Github, link: 'https://github.com/mohit-solidity', label: 'GitHub' },
        { icon: Twitter, link: 'https://x.com/pirstaef', label: 'X (Twitter)' },
        { icon: Send, link: 'https://t.me/pirstaef', label: 'Telegram' },
    ];

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-6 py-20 min-h-[90vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                        >
                            Let's build the <br /> <span className="text-cyan-400">decentralized future.</span>
                        </motion.h1>

                        <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                            Open for senior engineering roles, ecosystem strategy consultancies, and collaborative Web3 ventures. Direct mail: <span className="text-cyan-400">mohit96046@gmail.com</span>
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
                                >
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                        <social.icon size={20} />
                                    </div>
                                    <span className="font-medium text-gray-300">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-10 rounded-[3rem] bg-[#0d0d0d] border border-white/10 relative"
                    >
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-4">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    required
                                    className="w-full h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-4">Your Proposal</label>
                                <textarea
                                    rows={4}
                                    placeholder="Describe your project or role..."
                                    required
                                    className="w-full p-8 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>

                            <button
                                disabled={formState !== 'idle'}
                                className={cn(
                                    "w-full h-16 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500",
                                    formState === 'idle' ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "bg-white/10 text-gray-500 cursor-not-allowed"
                                )}
                            >
                                {formState === 'idle' && <><Send size={20} />Send Proposal</>}
                                {formState === 'sending' && <span className="animate-pulse">Encrypting & Sending...</span>}
                                {formState === 'sent' && <><ShieldCheck size={20} className="text-cyan-400" /> Securely Transmitted</>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
