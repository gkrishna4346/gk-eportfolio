import { profile, navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="#top" className="font-mono-accent text-sm tracking-[0.25em]">
            GR<span className="text-primary">_</span>
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-mono-accent text-xs text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="font-mono-accent text-xs text-muted-foreground">
            © {year} {profile.name}
          </p>
        </div>
        <p className="font-mono-accent text-[11px] text-muted-foreground/50 mt-8 max-w-2xl leading-relaxed">
          Designed & engineered as a data/tech portfolio — {profile.location}. Built with React, FastAPI & MongoDB.
        </p>
      </div>
    </footer>
  );
}
