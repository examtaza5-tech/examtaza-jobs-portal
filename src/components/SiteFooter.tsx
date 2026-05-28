import { Link } from "@tanstack/react-router";

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

const footerLinks = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms and Conditions" },
  { to: "/sitemap", label: "Sitemap" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--brand-blue)] text-white font-bold text-sm">
              E
            </div>
            <span className="font-bold">
              <span className="text-[var(--brand-blue)]">Exam</span>
              <span className="text-[var(--brand-green)]">taza</span>
              <span className="text-muted-foreground">.in</span>
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {footerLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-[var(--brand-blue)]">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © Examtaza.in. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
