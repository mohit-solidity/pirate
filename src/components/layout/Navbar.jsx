import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Globe, Mail, Home as HomeIcon } from 'lucide-react';
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
        { name: 'Home', path: '/', icon: HomeIcon },
        { name: 'Developer', path: '/developer', icon: Cpu },
        { name: 'Community', path: '/community', icon: Globe },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 p-[var(--space-md)]',
            scrolled ? 'py-[var(--space-sm)]' : 'py-[var(--space-md)]'
        )}>
            <div className={cn(
                "container-fluid transition-all duration-700 rounded-[20px] border border-transparent",
                scrolled && "glass-luxe py-[var(--space-xs)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-[var(--glass-border)]"
            )}>
                <div className="flex items-center justify-between">
                    <Magnetic strength={0.2}>
                        <Link to="/" className="flex items-center gap-[var(--space-xs)] group">
                            <div className="w-[var(--space-xl)] h-[var(--space-xl)] rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] overflow-hidden flex items-center justify-center p-[2px] shadow-2xl">
                                <img
                                    src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                    alt="Logo"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <span className="text-[var(--color-text-main)] font-bold text-[var(--fs-lg)] tracking-tighter uppercase hidden sm:block text-grad-gold">
                                PI<span className="text-[var(--color-text-main)]">RATE.</span>
                            </span>
                        </Link>
                    </Magnetic>

                    {/* Desktop Links with Expanding Underlines */}
                    <div className="hidden md:flex items-center gap-[var(--space-md)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative link-underline',
                                    location.pathname === link.path ? 'text-[var(--color-primary)] active-link' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Magnetic strength={0.3}>
                            <Link to="/contact">
                                <button className="px-[var(--space-md)] py-[var(--space-xs)] bg-[var(--color-primary)] text-black rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_0_25px_hsla(var(--clr-gold)/0.4)] btn-physical group overflow-hidden">
                                    <span className="relative z-10">Hire Me</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </Link>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-[var(--color-text-main)] p-[var(--space-xs)] glass-luxe rounded-xl border-[var(--glass-border)]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Refactor */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="overflow-hidden md:hidden mt-[var(--space-xs)]"
                    >
                        <div className="glass-luxe border border-[var(--glass-border)] rounded-[24px] p-[var(--space-md)] flex flex-col gap-[var(--space-xs)] shadow-2xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'flex items-center gap-[var(--space-md)] text-[var(--fs-sm)] font-bold uppercase tracking-widest p-[var(--space-md)] rounded-[16px] transition-all',
                                        location.pathname === link.path ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)] border border-[var(--color-primary)]/20' : 'text-[var(--color-text-muted)] hover:bg-white/5 hover:text-[var(--color-text-main)]'
                                    )}
                                >
                                    <link.icon size={18} />
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
