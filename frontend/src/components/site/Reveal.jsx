import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionLabel = ({ no, title, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <span className="font-mono-accent text-primary text-xs tracking-[0.3em]">
      {no}
    </span>
    <span className="font-mono-accent text-muted-foreground text-xs uppercase tracking-[0.3em]">
      {title}
    </span>
    <span className="h-px flex-1 bg-border" />
  </div>
);
