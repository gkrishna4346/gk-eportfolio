import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { liveProjects } from "@/data/portfolio";
import { ArrowUpRight, Star } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="04" title="live_projects" className="mb-12" />
        </Reveal>

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
              Deployed apps you can <span className="text-primary">actually use.</span>
            </h2>
            <p className="font-mono-accent text-sm text-muted-foreground">
              {liveProjects.length} live deployments
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06}>
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`project-card-${i}`}
                whileHover={{ y: -4 }}
                className={`group relative flex h-full flex-col justify-between border bg-card p-7 transition-colors ${
                  p.signature ? "border-primary/50" : "border-border hover:border-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono-accent text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.signature ? (
                      <span className="flex items-center gap-1 font-mono-accent text-[10px] tracking-wide text-primary border border-primary/40 px-2 py-0.5">
                        <Star className="h-3 w-3" /> SIGNATURE
                      </span>
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.blurb}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono-accent text-[10px] tracking-wide px-2 py-1 bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
