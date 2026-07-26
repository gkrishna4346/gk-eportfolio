import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" data-testid="logo-link" className="font-mono-accent text-sm tracking-[0.25em] text-foreground">
          GR<span className="text-primary cursor-blink">_</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="group font-mono-accent text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-primary/60 mr-1">{l.no}.</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="resume-button"
            className="hidden sm:inline-flex items-center gap-2 border border-primary/60 text-primary px-4 py-2 text-xs font-mono-accent tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FileText className="h-3.5 w-3.5" /> RESUME
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="font-mono-accent text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground"
                >
                  <span className="text-primary/60 mr-2">{l.no}.</span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
