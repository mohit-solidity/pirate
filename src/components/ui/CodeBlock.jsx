import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code, language = 'javascript', title = 'Component.js' }) => {
    return (
        <div className="w-full bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="px-6 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="ml-4 text-xs font-mono text-gray-500">{title}</span>
                </div>
                <span className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest">{language}</span>
            </div>
            <div className="p-8 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300 leading-relaxed">
                    {code.split('\n').map((line, i) => (
                        <div key={i} className="flex gap-6 hover:bg-white/5 transition-colors">
                            <span className="w-6 text-gray-600 text-right select-none">{i + 1}</span>
                            <span>{line}</span>
                        </div>
                    ))}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
