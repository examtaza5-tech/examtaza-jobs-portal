import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  path: string;
};

export function CategoryPage({ title, description, path }: Props) {
  // Placeholder list items — in a real WP build these come from posts
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `${title} Update ${i + 1}`,
    date: "Coming soon",
  }));

  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link to="/" className="hover:text-[var(--brand-blue)]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{title}</span>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
      </header>

      <div className="grid gap-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 hover:border-[var(--brand-blue)] hover:shadow-sm transition-all"
          >
            <div>
              <h2 className="font-semibold">{it.title}</h2>
              <p className="text-xs text-muted-foreground mt-1">{it.date}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-blue)] shrink-0">
              View <ArrowRight className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Latest {title.toLowerCase()} updates will appear here. Bookmark <code>{path}</code> for quick access.
      </p>
    </div>
  );
}
