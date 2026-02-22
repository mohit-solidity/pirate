import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import CodeBlock from '../components/ui/CodeBlock';
import Magnetic from '../components/ui/Magnetic';
import { motion } from 'framer-motion';
import { Layers, Database, Shield, Github, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';

const Developer = () => {
    const projects = [
        {
            title: 'Subscription DApp',
            description: 'A modular recurring payment system on-chain with automated renewals. Optimized for gas efficiency and user transparency.',
            features: ['EIP-5827 Support', 'Gas-efficient Logic', 'NFT Memberships', 'On-chain Governance'],
            tech: ['Solidity', 'React', 'The Graph', 'Hardhat'],
            github: 'https://github.com/mohit-solidity',
            demo: 'https://subscription-dapp-two.vercel.app/'
        },
        {
            title: 'Bidding DApp',
            description: 'High-performance auction platform with blind bidding and instant settlement. Features verifiable randomness for fair distributions.',
            features: ['Blind Bids', 'VRF Randomness', 'Escrow System', 'Auto-Settlement'],
            tech: ['Solidity', 'Web3.js', 'Chainlink', 'Foundry'],
            github: 'https://github.com/mohit-solidity',
            demo: 'https://mohit-solidity.github.io/new-Bidding-Dapp/'
        },
        {
            title: 'Staking DApp',
            description: 'Yield-optimized staking protocol with multi-tier rewards and lockup periods. Integrated with custom analytics indexing.',
            features: ['Dynamic APR', 'Compound Rewards', 'Stake Locks', 'Analytics API'],
            tech: ['Solidity', 'Ethers.js', 'Tailwind', 'Node.js'],
            github: 'https://github.com/mohit-solidity',
            demo: 'https://mohit-solidity.github.io/StakingDapp'
        }
    ];

    const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SubscriptionManager is Ownable {
    struct Plan { uint256 price; uint256 duration; }
    mapping(uint256 => Plan) public plans;

    function subscribe(uint256 planId) external payable {
        Plan memory plan = plans[planId];
        require(msg.value >= plan.price, "Insufficient funds");
        // Logic for subscription handling
    }
}`;

    return (
        <Layout>
            <section className="py-[var(--space-2xl)] relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-24 relative z-10 max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-[var(--color-primary)] rounded-full" />
                        <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.4em] italic">System Architect</span>
                    </div>
                    <h1 className="text-fluid-hero leading-[0.8] italic mb-10 italic uppercase">
                        Developer <span className="text-grad-gold block">Portfolio.</span>
                    </h1>
                    <p className="text-[var(--fs-lg)] text-[var(--color-text-dim)] max-w-2xl leading-relaxed font-medium tracking-wide">
                        I architect and build industrial-grade decentralized applications, maintaining a strict focus on security protocols, gas optimization, and seamless UX flow.
                    </p>
                </motion.div>

                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                </div>

                <section className="py-32 border-t border-[var(--glass-border)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <Layers className="text-[var(--color-primary)]" size={32} />
                                    <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-main)] uppercase italic tracking-tighter">System Core</h2>
                                </div>
                                <p className="text-[var(--fs-base)] text-[var(--color-text-muted)] font-medium leading-relaxed max-w-lg tracking-wide">
                                    My approach to Web3 development centers on the "Modular Stack" — separating high-concurrency logic from immutable core protocols.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 gap-6">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="p-10 rounded-[32px] glass-luxe border border-[var(--glass-border)] group"
                                >
                                    <h3 className="text-[var(--fs-base)] font-bold mb-4 flex items-center gap-4 uppercase tracking-widest text-[var(--color-text-main)]">
                                        <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Secure Contracts
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[13px] font-medium leading-relaxed">
                                        OpenZeppelin standards combined with custom gas-optimized patterns and rigorous automated testing.
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="p-10 rounded-[32px] glass-luxe border border-[var(--glass-border)] group"
                                >
                                    <h3 className="text-[var(--fs-base)] font-bold mb-4 flex items-center gap-4 uppercase tracking-widest text-[var(--color-text-main)]">
                                        <Database className="w-5 h-5 text-[var(--color-accent)]" /> Optimized Data
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[13px] font-medium leading-relaxed">
                                        Custom Subgraphs for real-time indexing, ensuring a highly responsive frontend for blockchain data.
                                    </p>
                                </motion.div>
                            </div>

                            <Magnetic strength={0.3}>
                                <Button onClick={() => window.open('https://github.com/mohit-solidity', '_blank')} className="h-16 px-10 text-[12px] shadow-2xl" variant="primary">
                                    EXPLORE SOURCE ON GITHUB <Github className="ml-3 w-4 h-4" />
                                </Button>
                            </Magnetic>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative glass-luxe rounded-[32px] overflow-hidden border border-[var(--glass-border)] shadow-2xl">
                                <CodeBlock code={solidityCode} language="solidity" title="Subscription.sol" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
};

export default Developer;
