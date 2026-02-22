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
        primary: 'bg-[var(--color-primary)] text-black shadow-[0_10px_30px_hsla(var(--clr-gold)/0.3)] hover:shadow-[0_15px_40px_hsla(var(--clr-gold)/0.4)]',
        secondary: 'glass-luxe border-[var(--glass-border)] text-[var(--color-text-main)] hover:bg-white/5',
        outline: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]',
        ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-white/5'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'px-[var(--space-md)] py-[var(--space-xs)] rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 flex items-center justify-center gap-[var(--space-xs)] cursor-pointer btn-physical',
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default Button;
