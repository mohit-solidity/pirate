import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        secondary: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
        outline: 'bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
