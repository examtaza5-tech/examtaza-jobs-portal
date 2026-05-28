import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "Exam Syllabus & Pattern — Examtaza.in" },
      { name: "description", content: "Detailed syllabus and exam pattern for government recruitment and competitive exams." },
      { property: "og:title", content: "Syllabus — Examtaza.in" },
      { property: "og:description", content: "Detailed exam syllabus and pattern." },
      { property: "og:url", content: "/syllabus" },
    ],
    links: [{ rel: "canonical", href: "/syllabus" }],
  }),
  component: () => (
    <CategoryPage title="Syllabus" description="Detailed syllabus and exam pattern for major government recruitment exams." path="/syllabus" />
  ),
});
