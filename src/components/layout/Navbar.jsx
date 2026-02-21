import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Globe, Mail, Home as HomeIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

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
            scrolled ? 'py-[var(--space-xs)]' : 'py-[var(--space-md)]'
        )}>
            <div className={cn(
                "container-fluid transition-all duration-500 rounded-[var(--space-md)] border border-transparent",
                scrolled && "bg-[var(--color-bg-base)]/80 backdrop-blur-[var(--glass-blur)] border-[var(--glass-border)] py-[var(--space-xs)] shadow-2xl"
            )}>
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-[var(--space-xs)] group">
                        <div className="w-[var(--space-xl)] h-[var(--space-xl)] rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--clr-secondary-500)] overflow-hidden flex items-center justify-center shadow-[0_0_20px_var(--color-primary-soft)] group-hover:shadow-[0_0_30px_var(--color-primary-soft)] transition-all duration-500">
                            <img
                                src="https://pbs.twimg.com/profile_images/1922483710185897986/q35tKv7r_400x400.jpg"
                                alt="Logo"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-[var(--color-text-main)] font-black text-[var(--fs-lg)] tracking-tighter uppercase hidden sm:block">
                            PI<span className="text-[var(--color-primary)]">RATE.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-[var(--space-2xs)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] rounded-full px-[var(--space-xs)] py-[var(--space-2xs)] border border-[var(--glass-border)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'px-[var(--space-md)] py-[var(--space-xs)] rounded-full text-[var(--fs-xs)] font-black uppercase tracking-widest transition-all duration-500 relative',
                                    location.pathname === link.path ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
                                )}
                            >
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-[var(--color-primary-soft)] rounded-full border border-[var(--color-primary)]/20"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-[var(--space-md)] py-[var(--space-xs)] bg-[var(--color-text-main)] text-[var(--color-bg-deep)] rounded-full font-black text-[var(--fs-xs)] uppercase tracking-widest hover:bg-[var(--color-primary)] transition-colors shadow-xl"
                            >
                                Hire Me
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-[var(--color-text-main)] p-[var(--space-xs)]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden md:hidden mt-[var(--space-xs)]"
                    >
                        <div className="bg-[var(--color-bg-base)]/95 backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)] rounded-[var(--space-lg)] p-[var(--space-md)] flex flex-col gap-[var(--space-xs)]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'flex items-center gap-[var(--space-md)] text-[var(--fs-base)] font-black uppercase tracking-widest p-[var(--space-md)] rounded-[var(--space-md)] transition-all',
                                        location.pathname === link.path ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)] border border-[var(--color-primary)]/20' : 'text-[var(--color-text-muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--color-text-main)]'
                                    )}
                                >
                                    <link.icon size={20} className={location.pathname === link.path ? 'text-[var(--color-primary)]' : ''} />
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
