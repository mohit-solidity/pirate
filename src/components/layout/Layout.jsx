import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)] selection:text-black font-sans">
      {/* Minimalist Background */}
      <div className="fixed inset-0 bg-[var(--color-bg-deep)] -z-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <motion.div
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,hsla(var(--clr-blue)/0.03)_0%,transparent_70%)]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-[100px]"
      >
        <div className="container-fluid">{children}</div>
      </motion.main>

      <footer className="relative z-10 py-20 border-t border-white/10 mt-32 bg-white/[0.02]">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <span className="text-2xl font-extrabold tracking-tighter uppercase text-grad-blue">
                PIRATE<span className="text-[var(--color-primary)]">.</span>
              </span>
              <p className="text-[var(--color-text-muted)] text-[14px] leading-relaxed max-w-xs font-medium">
                Architecting high-concurrency Web3 ecosystems for the elite
                decentralized era.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">
                Navigation
              </h4>
              <div className="flex flex-col gap-3 text-[var(--color-text-muted)] text-[14px] font-medium">
                <a
                  href="/"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </a>
                <a
                  href="/developer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Developer
                </a>
                <a
                  href="/community"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Community
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">
                Connect
              </h4>
              <div className="flex flex-col gap-3 text-[var(--color-text-muted)] text-[14px] font-medium">
                <a
                  href="https://x.com/pirstaef"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://github.com/mohit-solidity"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/pirstaef"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="https://www.linkedin.com/in/mohit-05914422a/"
                  target="_blank"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Linkedln
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[var(--color-text-main)] uppercase tracking-[0.3em] opacity-50">
                Status
              </h4>
              <div className="flex items-center gap-3 text-[var(--color-primary)] text-[11px] font-bold tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                AVAILABLE FOR DEV AND COMMUNITY MANAGEMENT
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <span className="text-[var(--color-text-dim)] text-[10px] uppercase font-bold tracking-[0.4em]">
              © 2026 PIRATE — WEB3 ARCHITECTURE
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
