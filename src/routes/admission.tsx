import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission Updates — University & College | Examtaza.in" },
      { name: "description", content: "Latest university, college and entrance exam admission updates from across India." },
      { property: "og:title", content: "Admission — Examtaza.in" },
      { property: "og:description", content: "University and college admission updates." },
      { property: "og:url", content: "/admission" },
    ],
    links: [{ rel: "canonical", href: "/admission" }],
  }),
  component: () => (
    <CategoryPage title="Admission" description="Latest university, college and entrance exam admission notifications." path="/admission" />
  ),
});
