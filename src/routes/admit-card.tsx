import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/admit-card")({
  head: () => ({
    meta: [
      { title: "Admit Card — Download Hall Tickets | Examtaza.in" },
      { name: "description", content: "Download admit cards and hall tickets for upcoming government recruitment exams." },
      { property: "og:title", content: "Admit Card — Examtaza.in" },
      { property: "og:description", content: "Download admit cards for upcoming government exams." },
      { property: "og:url", content: "/admit-card" },
    ],
    links: [{ rel: "canonical", href: "/admit-card" }],
  }),
  component: () => (
    <CategoryPage title="Admit Card" description="Download admit cards and hall tickets for upcoming government recruitment exams." path="/admit-card" />
  ),
});
