import { personal } from '@/lib/data';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full flex flex-col justify-between bg-primary bg-gradient-to-br from-primary to-primary-container py-12 px-6 items-center text-center gap-8 text-on-primary font-body text-sm tracking-widest uppercase mt-0">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-headline italic text-on-primary lowercase">the silent authority</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <a className="text-on-primary/70 hover:text-white transition-colors duration-500 active:translate-y-[-2px]" href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="text-on-primary/70 hover:text-white transition-colors duration-500 active:translate-y-[-2px]" href={personal.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="text-on-primary/70 hover:text-white transition-colors duration-500 active:translate-y-[-2px]" href={personal.social.email}>Email</a>
                </div>
            </div>
            <p className="opacity-40 text-[10px] pb-4">© {year} {personal.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
        </footer>
    );
}
