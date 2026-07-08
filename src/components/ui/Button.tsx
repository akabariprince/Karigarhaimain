import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 focus:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'border-transparent bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-soft hover:-translate-y-0.5',
        ghost: 'border-line bg-panel text-text hover:-translate-y-0.5 hover:shadow-soft',
        outline: 'border-line bg-transparent text-text hover:bg-panel',
      },
      size: {
        sm: 'h-10 px-4',
        md: 'h-12',
        lg: 'h-14 px-6',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
);

type BaseProps = {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
};

export function Button({
  asChild,
  className,
  variant,
  size,
  ...props
}: BaseProps &
  VariantProps<typeof buttonVariants> &
  (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...(props as any)} />;
}
