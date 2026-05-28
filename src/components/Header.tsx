import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/latest-jobs", label: "Latest Jobs" },
  { to: "/admit-card", label: "Admit Card" },
  { to: "/results", label: "Results" },
  { to: "/answer-key", label: "Answer Key" },
  { to: "/syllabus", label: "Syllabus" },
  { to: "/admission", label: "Admission" },
  { to: "/state-jobs", label: "State Jobs" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--brand-blue)] text-white font-bold">
              E
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[var(--brand-blue)]">Exam</span>
              <span className="text-[var(--brand-green)]">taza</span>
              <span className="text-muted-foreground text-sm font-medium">.in</span>
            </span>
          </Link>

          <form className="hidden md:flex flex-1 max-w-md mx-4" role="search">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search jobs, results, admit cards..."
                className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
                aria-label="Search"
              />
            </div>
          </form>

          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-1 h-11 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-[var(--brand-blue)] hover:bg-secondary rounded-md whitespace-nowrap transition-colors"
              activeProps={{ className: "px-3 py-1.5 text-sm font-medium text-[var(--brand-blue)] bg-secondary rounded-md whitespace-nowrap" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {open && (
          <div className="md:hidden pb-4">
            <form className="mb-3" role="search">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm"
                />
              </div>
            </form>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
