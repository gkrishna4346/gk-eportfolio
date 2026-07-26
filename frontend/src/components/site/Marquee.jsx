import { marqueeWords } from "@/data/portfolio";

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-card/40" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl md:text-3xl font-medium text-muted-foreground/70 px-8">
              {w}
            </span>
            <span className="text-primary text-xl">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
