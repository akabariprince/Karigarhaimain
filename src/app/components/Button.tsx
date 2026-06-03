import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
}

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-primary text-white hover:bg-[#FF5722] active:bg-[#E64A19]': variant === 'primary',
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white': variant === 'outline',
          'bg-white text-foreground hover:bg-secondary border-2 border-border': variant === 'secondary',
          'h-12 px-6 text-base': size === 'default',
          'h-14 px-8 text-lg': size === 'large',
        },
        className
      )}
      style={{ fontWeight: 600 }}
      {...props}
    >
      {children}
    </button>
  );
}
