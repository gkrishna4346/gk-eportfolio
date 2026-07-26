import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { experience } from "@/data/portfolio";
import { Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="03" title="experience" className="mb-12" />
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-16 max-w-2xl text-balance">
            A 17-year track record of <span className="text-primary">forecast-grade</span> delivery.
          </h2>
        </Reveal>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-0 md:left-[220px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 relative">
                  {/* period */}
                  <div className="md:text-right md:pr-10">
                    <p className="font-mono-accent text-xs text-primary tracking-wide">{e.period}</p>
                    <p className="text-xs text-muted-foreground mt-1">{e.location}</p>
                  </div>

                  {/* node */}
                  <span className="hidden md:block absolute left-[220px] -translate-x-1/2 mt-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

                  {/* content */}
                  <div className="border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3 mb-1">
                      <Building2 className="h-4 w-4 text-primary" />
                      <h3 className="font-display text-xl md:text-2xl font-semibold">{e.company}</h3>
                    </div>
                    <p className="font-mono-accent text-sm text-muted-foreground mb-5">{e.role}</p>
                    <ul className="space-y-2.5 mb-6">
                      {e.points.map((p, pi) => (
                        <li key={pi} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {e.metrics.map((m) => (
                        <span key={m} className="font-mono-accent text-[11px] tracking-wide px-2.5 py-1 border border-primary/40 text-primary">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
