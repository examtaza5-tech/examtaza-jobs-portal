import { createFileRoute, Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/latest-jobs", label: "Latest Jobs" },
  { to: "/admit-card", label: "Admit Card" },
  { to: "/results", label: "Results" },
  { to: "/answer-key", label: "Answer Key" },
  { to: "/syllabus", label: "Syllabus" },
  { to: "/admission", label: "Admission" },
  { to: "/state-jobs", label: "State Jobs" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms and Conditions" },
] as const;

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Examtaza.in" },
      { name: "description", content: "Sitemap of all pages on Examtaza.in." },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold">Sitemap</h1>
      <ul className="mt-6 grid sm:grid-cols-2 gap-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-[var(--brand-blue)] hover:underline">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  ),
});
