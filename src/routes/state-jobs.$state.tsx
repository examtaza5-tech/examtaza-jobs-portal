import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const unslug = (s: string) =>
  s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

export const Route = createFileRoute("/state-jobs/$state")({
  head: ({ params }) => {
    const name = unslug(params.state);
    return {
      meta: [
        { title: `${name} Government Jobs — Latest Updates | Examtaza.in` },
        { name: "description", content: `Latest government job notifications, results and admit cards from ${name}.` },
        { property: "og:title", content: `${name} Govt Jobs — Examtaza.in` },
        { property: "og:description", content: `Latest government jobs in ${name}.` },
        { property: "og:url", content: `/state-jobs/${params.state}` },
      ],
      links: [{ rel: "canonical", href: `/state-jobs/${params.state}` }],
    };
  },
  component: StateDetail,
});

function StateDetail() {
  const { state } = Route.useParams();
  const name = unslug(state);
  const items = Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: `${name} Recruitment ${i + 1}` }));

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link to="/" className="hover:text-[var(--brand-blue)]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/state-jobs" className="hover:text-[var(--brand-blue)]">State Jobs</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{name}</span>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{name} Government Jobs</h1>
        <p className="mt-2 text-muted-foreground">Latest job notifications, results and admit cards from {name}.</p>
      </header>
      <div className="grid gap-3">
        {items.map((it) => (
          <article key={it.id} className="flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-[var(--brand-blue)] transition-all">
            <h2 className="font-semibold">{it.title}</h2>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-blue)]">
              View <ArrowRight className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
