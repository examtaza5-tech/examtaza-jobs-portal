import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/answer-key")({
  head: () => ({
    meta: [
      { title: "Answer Key — Official Exam Answer Keys | Examtaza.in" },
      { name: "description", content: "Official and unofficial answer keys for recent government recruitment exams." },
      { property: "og:title", content: "Answer Key — Examtaza.in" },
      { property: "og:description", content: "Latest answer keys for government exams." },
      { property: "og:url", content: "/answer-key" },
    ],
    links: [{ rel: "canonical", href: "/answer-key" }],
  }),
  component: () => (
    <CategoryPage title="Answer Key" description="Official answer keys and solutions for recent government recruitment exams." path="/answer-key" />
  ),
});
