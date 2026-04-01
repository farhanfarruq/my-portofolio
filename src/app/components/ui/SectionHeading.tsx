import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ index, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', className)}>
      <div className="flex items-center gap-4">
        <span className="font-[var(--font-geist-mono)] text-sm text-zinc-500 tracking-widest">
          {index}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          {title}
        </h2>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>
    </div>
  );
}