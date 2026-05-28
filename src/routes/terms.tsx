import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Examtaza.in" },
      { name: "description", content: "Terms and conditions for using Examtaza.in." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        By accessing Examtaza.in you agree to use the content for informational purposes only.
        We do not guarantee accuracy, completeness or timeliness of any information provided.
      </p>
    </div>
  ),
});
