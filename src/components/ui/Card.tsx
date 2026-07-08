import { cn } from '../../lib/cn';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[2rem] border border-line bg-panel/75 shadow-soft backdrop-blur-xl', className)} {...props} />;
}
