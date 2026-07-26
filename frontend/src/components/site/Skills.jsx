import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="02" title="skills" className="mb-12" />
        </Reveal>

        <Reveal>
          <div className="border border-border bg-card overflow-hidden">
            {/* terminal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-secondary/70" />
              <span className="ml-3 font-mono-accent text-xs text-muted-foreground tracking-wide">
                gopikrishna@portfolio: ~/skills
              </span>
            </div>

            <div className="p-6 md:p-10">
              <p className="font-mono-accent text-sm text-secondary mb-8">
                <span className="text-muted-foreground">$</span> cat skillset.json
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {skillGroups.map((g, gi) => (
                  <div key={g.title}>
                    <p className="font-mono-accent text-sm mb-4">
                      <span className="text-primary">{g.title}</span>
                      <span className="text-muted-foreground"> = [</span>
                    </p>
                    <div className="flex flex-wrap gap-2 pl-5">
                      {g.items.map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: gi * 0.05 + i * 0.03 }}
                          className="font-mono-accent text-xs md:text-sm px-3 py-1.5 border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                    <p className="font-mono-accent text-sm mt-3 text-muted-foreground">]</p>
                  </div>
                ))}
              </div>

              <p className="font-mono-accent text-sm text-muted-foreground mt-10">
                <span>$</span> <span className="text-secondary">exit</span>
                <span className="cursor-blink text-primary"> ▊</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
