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
        primary: 'bg-[var(--color-primary)] text-black hover:brightness-110 shadow-[0_0_20px_var(--color-primary-soft)]',
        secondary: 'bg-transparent border border-[var(--glass-border)] text-[var(--color-text-main)] hover:bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]',
        outline: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]',
        ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[var(--glass-bg)]'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'px-[var(--space-md)] py-[var(--space-xs)] rounded-[var(--space-sm)] font-bold uppercase tracking-widest text-[var(--fs-xs)] transition-all duration-300 flex items-center justify-center gap-[var(--space-xs)] cursor-pointer',
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
