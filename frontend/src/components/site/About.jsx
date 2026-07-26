import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { profile, languages, education } from "@/data/portfolio";
import { GraduationCap, MapPin, Languages as LangIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="01" title="about" className="mb-12" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-4">
          {/* summary */}
          <Reveal className="lg:col-span-7">
            <div className="h-full border border-border bg-card p-8 md:p-12">
              <p className="font-mono-accent text-primary text-xs tracking-[0.2em] mb-6">// profile.md</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6 text-balance">
                Operations veteran turned{" "}
                <span className="text-primary">machine learning</span> practitioner.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {profile.summary}
              </p>
              <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-mono-accent text-sm tracking-wide">{profile.location}</span>
              </div>
            </div>
          </Reveal>

          {/* languages */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="h-full border border-border bg-card p-8 md:p-10">
              <div className="flex items-center gap-2 mb-8">
                <LangIcon className="h-4 w-4 text-primary" />
                <p className="font-mono-accent text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  languages
                </p>
              </div>
              <div className="space-y-7">
                {languages.map((l, i) => (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display text-lg font-medium">{l.name}</span>
                      <span className="font-mono-accent text-xs text-primary tracking-wide">{l.level}</span>
                    </div>
                    <div className="h-1 w-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* education */}
          {education.map((e, i) => (
            <Reveal key={e.degree} className="lg:col-span-6" delay={0.05 * i}>
              <div className="h-full border border-border bg-card p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-mono-accent text-xs text-primary tracking-wide mb-2">{e.period}</p>
                    <h3 className="font-display text-xl font-semibold leading-snug">{e.degree}</h3>
                    <p className="text-muted-foreground mt-1">{e.school}</p>
                    <p className="text-sm text-muted-foreground/70 mt-2 font-mono-accent">{e.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
