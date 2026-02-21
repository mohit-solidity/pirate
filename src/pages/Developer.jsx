import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import CodeBlock from '../components/ui/CodeBlock';
import { motion } from 'framer-motion';
import { Layers, Database, Shield, Github } from 'lucide-react';
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
            <section className="py-[var(--space-2xl)]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-[var(--space-2xl)] max-w-4xl"
                >
                    <div className="flex items-center gap-[var(--space-sm)] mb-[var(--space-sm)]">
                        <div className="w-12 h-1 bg-[var(--color-primary)] rounded-full" />
                        <span className="text-[var(--fs-xs)] font-black text-[var(--color-primary)] uppercase tracking-widest italic">System Architect</span>
                    </div>
                    <h1 className="text-fluid-3xl md:text-fluid-hero font-black tracking-tighter mb-[var(--space-md)] text-[var(--color-text-main)] leading-[0.9] uppercase">
                        Developer <span className="text-[var(--color-primary)]">Portfolio.</span>
                    </h1>
                    <p className="text-[var(--fs-lg)] text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-medium">
                        I architect and build industrial-grade decentralized applications, maintaining a strict focus on security protocols, gas optimization, and seamless UX flow.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] mb-[var(--space-2xl)]">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>

                {/* Architecture Section */}
                <section className="py-[var(--space-2xl)] border-t border-[var(--glass-border)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-2xl)] items-start">
                        <div className="space-y-[var(--space-xl)]">
                            <div>
                                <h2 className="text-[var(--fs-2xl)] font-black mb-[var(--space-lg)] flex items-center gap-4 uppercase tracking-tighter italic">
                                    <Layers className="text-[var(--color-primary)]" /> System Core
                                </h2>
                                <p className="text-[var(--color-text-muted)] font-medium leading-relaxed mb-8">
                                    My approach to Web3 development centers on the "Modular Stack" — separating high-concurrency logic from immutable core protocols.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-[var(--space-xl)] bg-[var(--color-bg-surface)]/50 border border-[var(--glass-border)] backdrop-blur-md">
                                    <h3 className="text-[var(--fs-base)] font-black mb-2 flex items-center gap-3 uppercase tracking-tight">
                                        <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Secure Contracts
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[var(--fs-sm)] font-medium">OpenZeppelin standards combined with custom gas-optimized patterns and rigorous automated testing.</p>
                                </div>
                                <div className="p-6 rounded-[var(--space-xl)] bg-[var(--color-bg-surface)]/50 border border-[var(--glass-border)] backdrop-blur-md">
                                    <h3 className="text-[var(--fs-base)] font-black mb-2 flex items-center gap-3 uppercase tracking-tight">
                                        <Database className="w-5 h-5 text-[var(--color-primary)]" /> Optimized Data
                                    </h3>
                                    <p className="text-[var(--color-text-dim)] text-[var(--fs-sm)] font-medium">Custom Subgraphs for real-time indexing, ensuring a highly responsive frontend for blockchain data.</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Button onClick={() => window.open('https://github.com/mohit-solidity', '_blank')}>
                                    EXPLORE SOURCE ON GITHUB <Github className="ml-2" />
                                </Button>
                            </div>
                        </div>

                        <div className="w-full">
                            <CodeBlock code={solidityCode} language="solidity" title="Subscription.sol" />
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
};

export default Developer;
