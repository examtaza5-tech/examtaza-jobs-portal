import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/latest-jobs")({
  head: () => ({
    meta: [
      { title: "Latest Govt Jobs 2026 — Examtaza.in" },
      { name: "description", content: "Browse the latest government job notifications across India — central, state and PSU openings updated daily." },
      { property: "og:title", content: "Latest Govt Jobs — Examtaza.in" },
      { property: "og:description", content: "Latest central, state and PSU government job notifications updated daily." },
      { property: "og:url", content: "/latest-jobs" },
    ],
    links: [{ rel: "canonical", href: "/latest-jobs" }],
  }),
  component: () => (
    <CategoryPage
      title="Latest Jobs"
      description="Newest government job notifications from central, state and PSU recruiters across India."
      path="/latest-jobs"
    />
  ),
});
