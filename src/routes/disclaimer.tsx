import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Examtaza.in" },
      { name: "description", content: "Disclaimer for content published on Examtaza.in." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Examtaza.in is an independent platform and is not associated with any official or
        government organization. All information provided here is for general informational
        purposes only and cannot be used for legal purposes. We strongly advise all visitors to
        verify details through official government notifications before relying on them. If you
        spot any errors or inaccuracies in our content, please notify us immediately through our
        Contact Us page.
      </p>
    </div>
  ),
});
