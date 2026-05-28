import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-8 w-8 rounded-lg bg-primary-gradient grid place-items-center">
              <span className="text-primary-foreground font-black">A</span>
            </span>
            Atya Ebiz Solutions LLP
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Your reliable back-end operations partner for e-commerce growth and strategic HR solutions across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Mail size={14} className="text-primary mt-1 shrink-0" /> info@atyaebizsolutions.com</li>
            <li className="flex gap-2"><Phone size={14} className="text-primary mt-1 shrink-0" /> +91 75440 00929</li>
            <li className="flex gap-2"><MapPin size={14} className="text-primary mt-1 shrink-0" /> Bengaluru · Gurugram</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Atya Ebiz Solutions LLP. All rights reserved.
      </div>
    </footer>
  );
}
