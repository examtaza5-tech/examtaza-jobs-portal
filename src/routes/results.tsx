import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Latest Exam Results — Govt Jobs Results | Examtaza.in" },
      { name: "description", content: "Check the latest government exam results, merit lists and cut-offs from across India." },
      { property: "og:title", content: "Results — Examtaza.in" },
      { property: "og:description", content: "Latest government exam results and merit lists." },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: () => (
    <CategoryPage title="Results" description="Latest government exam results, merit lists and cut-off updates." path="/results" />
  ),
});
