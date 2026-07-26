import { useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { submitContact } from "@/lib/api";
import { profile, socials } from "@/data/portfolio";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Loader2 } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

const socialList = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: socials.linkedin, key: "linkedin" },
  { icon: FaGithub, label: "GitHub", href: socials.github, key: "github" },
  { icon: SiHuggingface, label: "Hugging Face", href: socials.huggingface, key: "huggingface" },
  { icon: Mail, label: "Email", href: socials.email, key: "email" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await submitContact(form);
      toast.success("Message sent — I'll be in touch soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel no="07" title="contact" className="mb-12" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* left copy */}
          <Reveal>
            <div className="border border-border bg-card p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                  Let's build<br /><span className="text-primary">something.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Open to AIML, data analytics and capacity-planning roles & collaborations. Drop a message or reach me directly.
                </p>
                <a
                  href={socials.email}
                  data-testid="contact-email-link"
                  className="inline-flex items-center gap-3 mt-8 font-mono-accent text-sm text-primary hover:text-foreground transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" /> {profile.email}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {socialList.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target={s.key === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    data-testid={`social-${s.key}`}
                    aria-label={s.label}
                    className="flex items-center justify-center h-11 w-11 border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} data-testid="contact-form" className="border border-border bg-card p-8 md:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="name" htmlFor="name">
                  <Input id="name" data-testid="contact-name" value={form.name} onChange={set("name")}
                    className="rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-primary" placeholder="Your name" />
                </Field>
                <Field label="email" htmlFor="email">
                  <Input id="email" type="email" data-testid="contact-email" value={form.email} onChange={set("email")}
                    className="rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-primary" placeholder="you@email.com" />
                </Field>
              </div>
              <Field label="subject" htmlFor="subject">
                <Input id="subject" data-testid="contact-subject" value={form.subject} onChange={set("subject")}
                  className="rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-primary" placeholder="What's this about?" />
              </Field>
              <Field label="message" htmlFor="message">
                <Textarea id="message" rows={5} data-testid="contact-message" value={form.message} onChange={set("message")}
                  className="rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-primary resize-none" placeholder="Tell me more…" />
              </Field>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 text-sm font-mono-accent tracking-[0.12em] hover:bg-foreground transition-colors disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {loading ? "SENDING…" : "SEND MESSAGE"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const Field = ({ label, htmlFor, children }) => (
  <div>
    <label htmlFor={htmlFor} className="block font-mono-accent text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label}
    </label>
    {children}
  </div>
);
