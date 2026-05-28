import { Link } from "@tanstack/react-router";
import { MessageCircle, Send } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg border-l-4 border-[var(--brand-blue)] bg-background p-5 shadow-sm">
          <h2 className="text-sm font-bold text-[var(--brand-blue)] mb-2">Disclaimer</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Examtaza.in is an independent platform and is not associated with any official or
            government organization. All information provided here is for general informational
            purposes only and cannot be used for legal purposes. We strongly advise all visitors
            to verify details through official government notifications before relying on them.
            If you spot any errors or inaccuracies in our content, please notify us immediately
            through our Contact Us page.
          </p>
        </div>
      </div>
    </section>
  );
}

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/sitemap", label: "Sitemap" },
] as const;

const categoryLinks = [
const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms & Conditions" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.02_250)] text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--brand-blue)] text-white font-bold">
                E
              </div>
              <span className="text-lg font-bold text-white">
                Exam<span className="text-[var(--brand-green)]">taza</span>.in
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              ExamTaza.in is your trusted destination for latest government jobs, admit cards,
              results, answer keys, syllabus and admission updates from across India — published
              quickly and accurately.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--brand-green)]" />
                <span>contact@examtaza.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--brand-green)]" />
                <span>India</span>
              </div>
            </p>

                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Categories</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categoryLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Join Our Community</h3>
            <p className="mt-4 text-sm text-slate-400">
              Get instant alerts for new jobs, results and admit cards directly on your phone.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" /> Join WhatsApp
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--telegram)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Send className="h-4 w-4" /> Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Examtaza.in. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
