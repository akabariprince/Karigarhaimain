type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="overflow-hidden border-y border-line bg-panel/60 py-4">
      <div className="flex w-[200%] animate-marquee gap-8 whitespace-nowrap text-sm font-medium text-muted">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
