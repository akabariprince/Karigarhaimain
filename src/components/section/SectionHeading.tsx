import { cn } from '../../lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow ? <p className="font-display text-xs tracking-[0.34em] text-brand-500">{eyebrow}</p> : null}
      <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">{description}</p> : null}
    </div>
  );
}
