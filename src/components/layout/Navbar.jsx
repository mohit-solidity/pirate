import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import Magnetic from '../ui/Magnetic';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Developer', path: '/developer' },
        { name: 'Community', path: '/community' },
    ];

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6 md:px-12',
            scrolled ? 'py-4' : 'py-8'
        )}>
            <div className={cn(
                "container-fluid transition-all duration-500 rounded-2xl border border-transparent flex items-center justify-between",
                scrolled && "glass-card py-3 px-6 shadow-2xl border-white/10"
            )}>
                <Magnetic strength={0.2}>
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] overflow-hidden flex items-center justify-center p-0.5 shadow-xl">
                            <img
                                src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                alt="Logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase text-grad-blue">
                            PI<span className="text-white">RATE.</span>
                        </span>
                    </Link>
                </Magnetic>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative',
                                location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-white/50 hover:text-white'
                            )}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--color-primary)]"
                                />
                            )}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <button className="px-6 py-2 bg-[var(--color-primary)] text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300">
                            Hire Me
                        </button>
                    </Link>
                </div>

                <button
                    className="md:hidden text-white p-2 glass-card border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-4"
                    >
                        <div className="glass-card p-6 flex flex-col gap-4 shadow-2xl border-white/10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'text-xs font-bold uppercase tracking-[0.2em] py-3 transition-all',
                                        location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-white/60 hover:text-white'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
