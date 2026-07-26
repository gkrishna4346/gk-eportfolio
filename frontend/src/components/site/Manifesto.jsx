import { motion } from "framer-motion";
import { manifesto } from "@/data/portfolio";

export default function Manifesto() {
  return (
    <section className="relative py-24 md:py-36 border-t border-border overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
        alt=""
        className="pointer-events-none absolute -left-40 -bottom-20 w-[50vw] max-w-[600px] opacity-10 mix-blend-screen"
      />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative z-10">
        <p className="font-mono-accent text-primary text-xs tracking-[0.3em] mb-16">// manifesto</p>
        <div className="space-y-16 md:space-y-24">
          {manifesto.map((m, i) => (
            <motion.div
              key={m.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-16 items-baseline"
            >
              <span className="font-mono-accent text-primary text-xl md:text-2xl">{m.no}</span>
              <div>
                <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                  {m.title}
                </h3>
                <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed text-balance">
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
