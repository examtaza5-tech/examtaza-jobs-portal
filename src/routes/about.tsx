import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Examtaza.in" },
      { name: "description", content: "About Examtaza.in — an independent platform sharing govt jobs, results and admission updates." },
      { property: "og:title", content: "About — Examtaza.in" },
      { property: "og:description", content: "About Examtaza.in — independent govt jobs portal." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Examtaza.in is an independent online portal that publishes the latest government job
        notifications, admit cards, results, answer keys, syllabus and admission updates from
        across India. We aim to help aspirants stay informed in one place.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        We are not affiliated with any government body. Please verify all details from official
        sources before acting on them.
      </p>
    </div>
  ),
});
