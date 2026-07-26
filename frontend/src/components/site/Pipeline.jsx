import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { pipeline } from "@/data/portfolio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight, Circle } from "lucide-react";

export default function Pipeline() {
  const groups = Object.keys(pipeline);
  return (
    <section id="pipeline" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="06" title="pipeline" className="mb-12" />
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-12 max-w-2xl text-balance">
            What's <span className="text-primary">next</span> — building in public.
          </h2>
        </Reveal>

        <Reveal>
          <Tabs defaultValue={groups[0]} className="w-full">
            <TabsList className="bg-transparent border-b border-border rounded-none p-0 h-auto w-full justify-start gap-6">
              {groups.map((g) => (
                <TabsTrigger
                  key={g}
                  value={g}
                  data-testid={`pipeline-tab-${g.toLowerCase()}`}
                  className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-3 font-mono-accent text-sm tracking-wide text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  {g}
                </TabsTrigger>
              ))}
            </TabsList>

            {groups.map((g) => (
              <TabsContent key={g} value={g} className="mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pipeline[g].map((item, i) => {
                    const Wrap = item.live ? "a" : "div";
                    return (
                      <Wrap
                        key={item.name}
                        {...(item.live
                          ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        data-testid={`pipeline-item-${g.toLowerCase()}-${i}`}
                        className={`group flex items-center justify-between border border-border bg-card p-5 transition-colors ${
                          item.live ? "hover:border-primary/50 cursor-pointer" : "opacity-70"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Circle className={`h-2 w-2 ${item.live ? "fill-secondary text-secondary" : "fill-muted-foreground/40 text-muted-foreground/40"}`} />
                          <span className="font-display font-medium group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                        </div>
                        {item.live ? (
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        ) : (
                          <span className="font-mono-accent text-[10px] text-muted-foreground tracking-wide">SOON</span>
                        )}
                      </Wrap>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
