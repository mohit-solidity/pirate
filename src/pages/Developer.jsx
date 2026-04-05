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
            description: 'I built a modular payment system that handles recurring on-chain transactions, prioritizing gas savings and making the process transparent for every user.',
            features: ['EIP-5827 Support', 'Gas-efficient Logic', 'NFT Memberships', 'On-chain Governance'],
            tech: ['Solidity', 'React', 'Hardhat'],
            github: 'https://github.com/mohit-solidity/subscription-dapp',
            demo: 'https://subscription-dapp-two.vercel.app/',
        },
        {
            title: 'Bidding DApp',
            description: 'I engineered a high-performance auction platform featuring blind bidding and instant settlement, ensuring absolute fairness through verifiable randomness.',
            features: ['Blind Bids', 'VRF Randomness', 'Escrow System', 'Auto-Settlement'],
            tech: ['Solidity', 'Web3.js', 'Foundry'],
            github: 'https://github.com/mohit-solidity/new-Bidding-Dapp',
            demo: 'https://mohit-solidity.github.io/new-Bidding-Dapp/',
        },
        {
            title: 'Staking DApp',
            description: 'I designed a yield-focused staking protocol that offers multi-tier rewards and lockup periods, backed by a custom indexing system for real-time accuracy.',
            features: ['Dynamic APR', 'Compound Rewards', 'Stake Locks', 'Analytics API'],
            tech: ['Solidity', 'Ethers.js', 'Tailwind', 'Node.js'],
            github: 'https://github.com/mohit-solidity/StakingDapp',
            demo: 'https://mohit-solidity.github.io/StakingDapp',
        },
        {
            title: 'Time Staking DApp',
            description: 'Build A Time Staking DApp Where users can stake to specific time limits(1 month, 2 month etc',
            features: ['Time Limit Staking', 'Compound Rewards', 'Stake Locks', 'Analytics API'],
            tech: ['Solidity', 'Ethers.js', 'Tailwind', 'Node.js'],
            github: 'https://github.com/mohit-solidity/TimeStakingDapp',
            demo: 'https://mohit-solidity.github.io/TimeStakingDapp',
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
            <div className="py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mb-24"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-[var(--color-primary)]" />
                        <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.5em]">System Architect</span>
                    </div>
                    <h1 className="text-fluid-hero font-extrabold tracking-tighter mb-10 leading-[0.9] uppercase">
                        Developer <br />
                        <span className="text-grad-blue">Portfolio.</span>
                    </h1>
                    <p className="text-[var(--fs-lg)] text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-medium">
                        I build industrial-grade decentralized systems with a focus on security and efficiency, ensuring that complex blockchain logic feels simple and reliable for the end user.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <section className="py-32 border-t border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-6 mb-10">
                                    <Layers className="text-[var(--color-primary)]" size={40} />
                                    <h2 className="text-[var(--fs-2xl)] font-extrabold uppercase tracking-tighter">System Core</h2>
                                </div>
                                <p className="text-[var(--fs-base)] text-[var(--color-text-muted)] font-medium leading-relaxed max-w-lg">
                                    My approach to Web3 development centers on the "Modular Stack" — separating high-concurrency logic from immutable core protocols.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                                    <h3 className="text-[var(--fs-base)] font-bold mb-4 flex items-center gap-4 uppercase tracking-widest">
                                        <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Secure Contracts
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[13px] font-medium leading-relaxed">
                                        OpenZeppelin standards combined with custom gas-optimized patterns and rigorous automated testing.
                                    </p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                                    <h3 className="text-[var(--fs-base)] font-bold mb-4 flex items-center gap-4 uppercase tracking-widest">
                                        <Database className="w-5 h-5 text-[var(--color-accent)]" /> Optimized Data
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[13px] font-medium leading-relaxed">
                                        Custom Subgraphs for real-time indexing, ensuring a highly responsive frontend for blockchain data.
                                    </p>
                                </div>
                            </div>

                            <Magnetic strength={0.2}>
                                <Button onClick={() => window.open('https://github.com/mohit-solidity', '_blank')} className="h-16 px-10 text-[12px] uppercase font-bold tracking-widest shadow-2xl" variant="primary">
                                    Explore Source <Github className="ml-3 w-4 h-4" />
                                </Button>
                            </Magnetic>
                        </div>

                        <div className="relative glass-card overflow-hidden">
                            <CodeBlock code={solidityCode} language="solidity" title="Subscription.sol" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Developer;
