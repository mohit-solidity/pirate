import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Globe, Mail, Home } from 'lucide-react';
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
        { name: 'Home', path: '/', icon: Home },
        { name: 'Developer', path: '/developer', icon: Cpu },
        { name: 'Community Work', path: '/community', icon: Globe },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
            scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all">
                        <span className="text-black font-bold text-xl">P</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tighter uppercase hidden sm:block">
                        Pirate<span className="text-cyan-400">.</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative',
                                location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                            )}
                        >
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg"
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'flex items-center gap-4 text-lg font-medium p-4 rounded-2xl transition-all',
                                    location.pathname === link.path ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'
                                )}
                            >
                                <link.icon size={20} className={location.pathname === link.path ? 'text-cyan-400' : ''} />
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
