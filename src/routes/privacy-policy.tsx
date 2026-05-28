import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Examtaza.in" },
      { name: "description", content: "Privacy policy for visitors of Examtaza.in." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose-style">
      <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Examtaza.in respects your privacy. We do not collect personally identifiable information
        unless you voluntarily provide it through our contact form. Third-party services such as
        analytics and advertising partners may collect anonymous usage data per their own
        policies.
      </p>
    </div>
  ),
});
