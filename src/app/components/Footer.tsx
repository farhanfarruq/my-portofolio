import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 px-8 md:px-16 py-12 flex flex-col md:flex-row flex-wrap items-center justify-between relative z-10 bg-surface-lowest/60 gap-8 md:gap-0">
      <div className="font-tech text-[11px] tracking-[0.4em] text-tertiary/40 uppercase text-center md:text-left">
        {personal.name}{" "}
        <span className="text-tertiary/80 ml-2 block md:inline mt-2 md:mt-0">
          v1.0.0
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
        <div className="flex items-center gap-8 md:gap-16">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-tech text-[11px] tracking-[0.4em] text-tertiary/40 uppercase hover:text-primary transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-tech text-[11px] tracking-[0.4em] text-tertiary/40 uppercase hover:text-primary transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="font-tech text-[11px] tracking-[0.4em] text-tertiary/40 uppercase text-center md:text-left">
          © {year} {personal.handle}
        </div>
      </div>
    </footer>
  );
}
