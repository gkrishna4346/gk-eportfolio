import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import headshot from "@/assets/headshot.png";

const sphere =
  "https://images.unsplash.com/photo-1718844054440-22acf5d5c8f0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MaskLine = ({ children, i }) => (
  <span className="block overflow-hidden">
    <motion.span variants={line} custom={i} initial="hidden" animate="show" className="block">
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 grid-lines opacity-40" />
      <motion.img
        src={sphere}
        alt=""
        style={{ y: yImg }}
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[70vw] max-w-[820px] opacity-20 mix-blend-screen select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <motion.div style={{ y: yText, opacity }} className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-mono-accent text-primary text-xs md:text-sm tracking-[0.3em] mb-6"
        >
          $ whoami — {profile.location.toUpperCase()}
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="font-display font-extrabold tracking-tighter leading-[0.92] text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              <MaskLine i={0}>{profile.firstName}</MaskLine>
              <MaskLine i={1}>
                <span className="text-primary">{profile.lastName}</span>
              </MaskLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 font-mono-accent text-sm md:text-base text-muted-foreground tracking-wide"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground/90 leading-relaxed text-balance"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                data-testid="hero-view-work"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-mono-accent tracking-[0.12em] hover:bg-foreground transition-colors"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                data-testid="hero-contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-mono-accent tracking-[0.12em] hover:border-primary hover:text-primary transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto lg:mx-0 w-56 h-56 md:w-72 md:h-72"
          >
            <div className="absolute inset-0 rounded-full border border-primary/40" />
            <div className="absolute -inset-4 rounded-full border border-border animate-[spin_28s_linear_infinite]" style={{ borderStyle: "dashed" }} />
            <div className="absolute inset-3 rounded-full bg-primary/10 blur-2xl" />
            <img
              src={headshot}
              alt={profile.name}
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="border-b border-r border-border p-5">
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground">{s.value}</div>
              <div className="font-mono-accent text-[11px] uppercase tracking-[0.15em] text-primary mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
