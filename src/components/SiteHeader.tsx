import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-8 w-8 rounded-lg bg-primary-gradient grid place-items-center shadow-glow">
            <span className="text-primary-foreground font-black">A</span>
          </span>
          <span>Atya<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-primary-gradient text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm py-2" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
