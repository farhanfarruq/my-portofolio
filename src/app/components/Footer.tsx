import { personal } from '@/lib/data';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-900 py-8">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-zinc-600 font-[var(--font-geist-mono)]">
                    © {year} {personal.name}
                </p>
                <p className="text-xs text-zinc-700 font-[var(--font-geist-mono)]">
                    Built with Next.js &amp; Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
