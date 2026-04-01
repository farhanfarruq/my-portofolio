import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-1 rounded text-xs font-[var(--font-geist-mono)] tracking-wide',
                'bg-zinc-900 text-zinc-400 border border-zinc-800',
                'transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-300',
                className
            )}
        >
            {children}
        </span>
    );
}
