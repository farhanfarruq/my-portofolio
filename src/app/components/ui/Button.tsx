import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'ghost' | 'link';

interface ButtonProps {
    variant?: ButtonVariant;
    href?: string;
    external?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-zinc-100 text-zinc-900 hover:bg-white border border-zinc-100',
    ghost:
        'bg-transparent text-zinc-300 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-500',
    link:
        'bg-transparent text-zinc-400 hover:text-zinc-200 underline-offset-4 hover:underline p-0',
};

export default function Button({
    variant = 'ghost',
    href,
    external,
    onClick,
    disabled,
    type = 'button',
    children,
    className,
}: ButtonProps) {
    const base = cn(
        'inline-flex items-center gap-2 text-sm font-medium rounded-md transition-all duration-200',
        variant !== 'link' && 'px-4 py-2.5',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        variantStyles[variant],
        className
    );

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={base}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={base}>
            {children}
        </button>
    );
}
