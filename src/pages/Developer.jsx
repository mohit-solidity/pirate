import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import CodeBlock from '../components/ui/CodeBlock';
import { motion } from 'framer-motion';
import { Layers, Database, Shield } from 'lucide-react';

const Developer = () => {
    const projects = [
        {
            title: 'Subscription DApp',
            description: 'A modular recurring payment system on-chain with automated renewals.',
            features: ['EIP-5827 Support', 'Gas-efficient Renewals', 'NFT Subscriptions', 'Admin Dashboard'],
            tech: ['Solidity', 'React', 'The Graph', 'Hardhat'],
            github: '#',
            demo: 'https://subscription-dapp-two.vercel.app/'
        },
        {
            title: 'Bidding DApp',
            description: 'High-performance auction platform with blind bidding and instant settlement.',
            features: ['Blind Bids', 'Verifiable Randomness', 'Escrow System', 'Auto-Settlement'],
            tech: ['Solidity', 'Web3.js', 'Chainlink VRF', 'Foundry'],
            github: '#',
            demo: 'https://mohit-solidity.github.io/new-Bidding-Dapp/'
        },
        {
            title: 'Staking DApp',
            description: 'Yield-optimized staking protocol with multi-tier rewards and lockup periods.',
            features: ['Dynamic APR', 'Compound Rewards', 'Stake Locks', 'Analytics API'],
            tech: ['Solidity', 'Ethers.js', 'Tailwind', 'Node.js'],
            github: '#',
            demo: 'https://mohit-solidity.github.io/StakingDapp'
        },
        {
            title: 'TimeStaking DApp',
            description: 'Time-locked asset management protocol for long-term holders.',
            features: ['Time-lock Vaults', 'Penalty Logic', 'Governance Voting', 'Mobile-First UI'],
            tech: ['Solidity', 'TypeScript', 'Vite', 'IPFS'],
            github: '#',
            demo: 'https://mohit-solidity.github.io/TimeStakingDapp/'
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
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                        Developer <span className="text-cyan-400">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        I architect and build high-performance decentralized applications, focusing on security, scalability, and seamless user experiences. View all source code on <a href="https://github.com/mohit-solidity" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>

                {/* Architecture Section */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                <Layers className="text-cyan-400" /> System Architecture
                            </h2>
                            <div className="space-y-8">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Shield className="w-5 h-5 text-cyan-500" /> Smart Contract Design</h3>
                                    <p className="text-gray-400 text-sm">Modular architecture using OpenZeppelin standards. Heavy focus on gas optimization and access control protocols.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Layers className="w-5 h-5 text-cyan-500" /> Frontend & Wallet</h3>
                                    <p className="text-gray-400 text-sm">React/Vite with Wagmi/RainbowKit for seamless multi-wallet integration. Global state management with Zustand.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Database className="w-5 h-5 text-cyan-500" /> Data & Indexing</h3>
                                    <p className="text-gray-400 text-sm">Custom Subgraphs on The Graph for real-time indexing of blockchain events and historical data auditing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <CodeBlock code={solidityCode} language="solidity" title="Subscription.sol" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Developer;
