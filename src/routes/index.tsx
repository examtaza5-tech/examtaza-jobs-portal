import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase, FileText, Trophy, CheckSquare, BookOpen, GraduationCap,
  MapPin, Search, MessageCircle, Send, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Examtaza.in — Latest Govt Jobs, Admit Card, Results & Admission Updates" },
      { name: "description", content: "Get latest government jobs, admit cards, results, answer keys, syllabus and admission updates across all Indian states at Examtaza.in." },
      { property: "og:title", content: "Examtaza.in — Latest Govt Jobs & Updates" },
      { property: "og:description", content: "Latest government jobs, admit cards, results, syllabus and admission updates for all Indian states." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { to: "/latest-jobs", title: "Latest Jobs", desc: "Newest government job notifications across India.", icon: Briefcase, color: "var(--brand-blue)" },
  { to: "/admit-card", title: "Admit Card", desc: "Download admit cards for upcoming exams.", icon: FileText, color: "var(--brand-green)" },
  { to: "/results", title: "Results", desc: "Latest exam results and merit lists.", icon: Trophy, color: "var(--brand-blue)" },
  { to: "/answer-key", title: "Answer Key", desc: "Official answer keys for recent exams.", icon: CheckSquare, color: "var(--brand-green)" },
  { to: "/syllabus", title: "Syllabus", desc: "Detailed exam syllabus and patterns.", icon: BookOpen, color: "var(--brand-blue)" },
  { to: "/admission", title: "Admission", desc: "University and college admission updates.", icon: GraduationCap, color: "var(--brand-green)" },
] as const;

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[oklch(0.97_0.02_240)] to-background border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Latest Govt Jobs, Admit Card,{" "}
            <span className="text-[var(--brand-blue)]">Results</span> &{" "}
            <span className="text-[var(--brand-green)]">Admission</span> Updates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Your one-stop destination for government job notifications, admit cards, results,
            answer keys, syllabus and admission updates across India.
          </p>

          <form className="mt-6 max-w-xl mx-auto" role="search">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search for jobs, results, admit cards..."
                className="w-full rounded-full border border-border bg-background pl-12 pr-32 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-blue)] px-5 py-2 text-sm font-medium text-white hover:bg-[var(--brand-blue-dark)]"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Join WhatsApp
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--telegram)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Latest Updates Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Updates</h2>
          <p className="text-muted-foreground mt-2">Browse the most recent updates by category</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-[var(--brand-blue)] transition-all"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white mb-4"
                style={{ backgroundColor: c.color }}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-blue)] group-hover:gap-2 transition-all">
                View Updates <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp & Telegram CTA */}
      <section className="container mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-green)] p-8 md:p-10 text-white text-center shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold">Never Miss an Update</h2>
          <p className="mt-2 max-w-2xl mx-auto opacity-95">
            Get instant updates for latest jobs, admit cards, results and admissions directly on
            your phone.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue)] hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" /> Join WhatsApp Channel
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25"
            >
              <Send className="h-4 w-4" /> Join Telegram Channel
            </a>
          </div>
        </div>
      </section>

      {/* State Jobs - premium section */}
      <section className="relative border-y border-border bg-[oklch(0.98_0.015_230)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--brand-blue) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-4 py-14 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-blue)]">
              <MapPin className="h-3.5 w-3.5" /> Across India
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold">State Wise Government Jobs</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Find latest government job updates by Indian state and union territory.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {states.map((s) => (
              <Link
                key={s}
                to="/state-jobs/$state"
                params={{ state: slug(s) }}
                className="group flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white transition-all"
              >
                <MapPin className="h-3.5 w-3.5 text-[var(--brand-green)] group-hover:text-white shrink-0" />
                <span className="truncate">{s}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
