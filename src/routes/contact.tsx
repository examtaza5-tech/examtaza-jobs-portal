import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Examtaza.in" },
      { name: "description", content: "Get in touch with the Examtaza.in team for queries, corrections or feedback." },
      { property: "og:title", content: "Contact — Examtaza.in" },
      { property: "og:description", content: "Contact the Examtaza.in team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">
        Have a question, correction or suggestion? Send us a message and we'll get back to you.
      </p>
      <form className="mt-8 grid gap-4">
        <input type="text" placeholder="Your name" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm" />
        <input type="email" placeholder="Your email" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm" />
        <textarea rows={5} placeholder="Your message" className="rounded-md border border-border bg-background px-4 py-2.5 text-sm" />
        <button type="submit" className="justify-self-start rounded-md bg-[var(--brand-blue)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-blue-dark)]">
          Send Message
        </button>
      </form>
    </div>
  ),
});
