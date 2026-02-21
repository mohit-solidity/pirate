import React from 'react';

const CodeBlock = ({ code, language = 'javascript', title = 'Component.js' }) => {
    return (
        <div className="w-full bg-[var(--color-bg-deep)] rounded-[var(--space-lg)] border border-[var(--glass-border)] overflow-hidden shadow-2xl">
            <div className="px-[var(--space-md)] py-[var(--space-sm)] bg-[var(--color-bg-base)]/50 backdrop-blur-xl border-b border-[var(--glass-border)] flex items-center justify-between">
                <div className="flex items-center gap-[var(--space-md)]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                    </div>
                    <span className="text-[var(--fs-xs)] font-black text-[var(--color-text-dim)] uppercase tracking-widest">{title}</span>
                </div>
                <span className="text-[var(--fs-xs)] font-black text-[var(--color-primary)]/60 uppercase tracking-[0.2em]">{language}</span>
            </div>
            <div className="p-[var(--space-lg)] font-mono text-[var(--fs-xs)] md:text-[var(--fs-sm)] overflow-x-auto bg-[var(--color-bg-deep)]/40">
                <pre className="text-[var(--color-text-muted)] leading-relaxed">
                    {code.split('\n').map((line, i) => (
                        <div key={i} className="flex gap-[var(--space-lg)] hover:bg-[var(--color-primary-soft)]/2 transition-colors">
                            <span className="w-6 text-[var(--color-text-dim)] text-right select-none font-bold opacity-30">{i + 1}</span>
                            <span className="text-[var(--color-text-muted)]">{line}</span>
                        </div>
                    ))}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
