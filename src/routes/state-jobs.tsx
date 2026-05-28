import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const Route = createFileRoute("/state-jobs")({
  head: () => ({
    meta: [
      { title: "State Wise Government Jobs — All Indian States | Examtaza.in" },
      { name: "description", content: "Find latest government job updates by Indian state and union territory — UP, Bihar, Maharashtra, Tamil Nadu and more." },
      { property: "og:title", content: "State Wise Government Jobs — Examtaza.in" },
      { property: "og:description", content: "Latest government jobs across all Indian states and union territories." },
      { property: "og:url", content: "/state-jobs" },
    ],
    links: [{ rel: "canonical", href: "/state-jobs" }],
  }),
  component: StateJobs,
});

function StateJobs() {
  return (
    <div className="container mx-auto px-4 py-10">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link to="/" className="hover:text-[var(--brand-blue)]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">State Jobs</span>
      </nav>
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">State Wise Government Jobs</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Find the latest government job notifications by Indian state and union territory.
        </p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {states.map((s) => (
          <Link
            key={s}
            to="/state-jobs/$state"
            params={{ state: slug(s) }}
            className="group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white transition-all"
          >
            <MapPin className="h-4 w-4 text-[var(--brand-green)] group-hover:text-white shrink-0" />
            <span className="truncate">{s}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
