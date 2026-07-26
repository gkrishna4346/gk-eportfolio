import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OTPInputContext } from "input-otp";
import { toast } from "sonner";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { academicProjects } from "@/data/portfolio";
import { verifyPin } from "@/lib/api";
import { InputOTP, InputOTPGroup } from "@/components/ui/input-otp";
import { Lock, LockOpen, FileText, ArrowUpRight } from "lucide-react";

function MaskedSlot({ index, error, ...props }) {
  const ctx = useContext(OTPInputContext);
  const { char, isActive } = ctx.slots[index];
  return (
    <div
      {...props}
      className={`relative flex h-14 w-12 items-center justify-center rounded-none border bg-background text-2xl leading-none transition-colors ${
        error ? "border-destructive" : isActive ? "border-primary" : "border-secondary/40"
      }`}
    >
      {char ? <span className="text-secondary">*</span> : isActive ? <span className="cursor-blink text-secondary">|</span> : null}
    </div>
  );
}


export default function Academic() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const attempt = async (value) => {
    setLoading(true);
    setError(false);
    try {
      const res = await verifyPin(value);
      if (res.success) {
        setUnlocked(true);
        toast.success("Access granted — academic vault unlocked.");
      } else {
        setError(true);
        setPin("");
        toast.error("Access denied. Incorrect PIN.");
      }
    } catch (e) {
      setError(true);
      setPin("");
      toast.error("Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (v) => {
    setPin(v);
    setError(false);
    if (v.length === 4) attempt(v);
  };

  return (
    <section id="academic" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="05" title="academic_vault" className="mb-12" />
        </Reveal>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="lock"
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <Reveal>
                <div className="border border-secondary/30 bg-card overflow-hidden max-w-2xl mx-auto">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-secondary/20 bg-secondary/5">
                    <Lock className="h-4 w-4 text-secondary" />
                    <span className="font-mono-accent text-xs text-secondary tracking-wide">
                      secure://academic-projects — restricted
                    </span>
                  </div>

                  <div className="p-8 md:p-12">
                    <p className="font-mono-accent text-sm text-secondary leading-relaxed">
                      <span className="text-muted-foreground">$</span> access academic_projects/
                    </p>
                    <p className="font-mono-accent text-sm text-muted-foreground mt-2">
                      13 graded PGP projects + capstone locked behind a 4-digit PIN.
                    </p>
                    <p className="font-mono-accent text-sm text-foreground mt-6 mb-4">
                      &gt; ENTER PIN:
                      {loading && <span className="text-secondary"> verifying…</span>}
                    </p>

                    <motion.div
                      animate={error ? { x: [0, -8, 8, -6, 6, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <InputOTP
                        maxLength={4}
                        value={pin}
                        onChange={onChange}
                        disabled={loading}
                        data-testid="pin-input"
                        containerClassName="justify-start"
                      >
                        <InputOTPGroup className="gap-3">
                          {[0, 1, 2, 3].map((idx) => (
                            <MaskedSlot
                              key={idx}
                              index={idx}
                              error={error}
                              data-testid={`pin-slot-${idx}`}
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </motion.div>

                    {error && (
                      <p className="font-mono-accent text-xs text-destructive mt-4">
                        ✕ ACCESS DENIED — invalid credentials.
                      </p>
                    )}
                    <p className="font-mono-accent text-[11px] text-muted-foreground/60 mt-6">
                      Hint: request the PIN from Gopikrishna to review academic coursework.
                    </p>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-8 text-secondary">
                <LockOpen className="h-4 w-4" />
                <span className="font-mono-accent text-xs tracking-wide">
                  vault unlocked — {academicProjects.length} artifacts
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {academicProjects.map((p, i) => (
                  <motion.a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`academic-card-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col justify-between border border-border bg-card p-6 hover:border-secondary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono-accent text-xs px-2 py-0.5 border border-secondary/40 text-secondary">
                        {p.code}
                      </span>
                      {p.link.endsWith(".pdf") ? (
                        <FileText className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-secondary transition-colors">
                        {p.name}
                      </h3>
                      <p className="font-mono-accent text-xs text-muted-foreground mt-2">{p.topic}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
