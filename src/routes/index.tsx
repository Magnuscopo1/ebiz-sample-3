import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-3d.jpg";
import warehouseImg from "@/assets/warehouse-3d.jpg";
import hrImg from "@/assets/hr-3d.jpg";
import { ArrowRight, Package, Warehouse, Truck, Users, ShieldCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atya Ebiz Solutions — E-commerce Fulfilment & HR Partner" },
      { name: "description", content: "Scale your brand with end-to-end e-commerce onboarding, warehousing, fulfilment and HR solutions from Bengaluru & Gurugram." },
      { property: "og:title", content: "Atya Ebiz Solutions LLP" },
      { property: "og:description", content: "End-to-end e-commerce fulfilment and HR solutions for growing brands." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "2", label: "Strategic Locations" },
  { value: "End-to-End", label: "Operations Coverage" },
  { value: "Pan-India", label: "Logistics Reach" },
  { value: "24/7", label: "Operational Support" },
];

const features = [
  { icon: Package, title: "Marketplace Onboarding", desc: "Cataloguing, SKU creation, listing optimisation and compliance with marketplace guidelines." },
  { icon: Warehouse, title: "Warehousing & Inventory", desc: "Secure storage with real-time tracking, FIFO management and quality checks." },
  { icon: Truck, title: "Order Fulfilment", desc: "Pick, pack, label and dispatch with COD or prepaid courier integration across India." },
  { icon: Users, title: "HR & Recruitment", desc: "Talent acquisition, HR operations, policies and performance management systems." },
  { icon: ShieldCheck, title: "Compliance Support", desc: "Tax, invoicing, returns and packaging norms — fully audit-ready." },
  { icon: TrendingUp, title: "Scalable Infrastructure", desc: "Grow without limits — capacity, forecasting and logistics relationships handled." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              E-commerce Operations · HR Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Backend operations<br />
              built for <span className="text-gradient">brands that scale.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Atya Ebiz Solutions LLP is your reliable back-end operations arm — from marketplace onboarding to warehousing, fulfilment, logistics and strategic HR.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass font-semibold hover:border-primary/50 transition-colors">
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="glass rounded-3xl p-6 shadow-elegant animate-float">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-card/40 rounded-2xl p-5 border border-border">
                      <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold">A complete operations engine for your brand.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group relative bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5">
                  <f.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT 1 */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={warehouseImg} alt="Premium warehousing infrastructure" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">E-commerce Suite</p>
            <h2 className="text-4xl font-bold mb-6">Warehouse-grade fulfilment, marketplace-ready compliance.</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Secure storage in Bengaluru with real-time stock tracking. Pick, pack, label and dispatch with COD or prepaid integration across India — all aligned with marketplace SLAs.
            </p>
            <ul className="space-y-3 text-sm">
              {["Marketplace onboarding & catalogue setup", "FIFO inventory with quality checks", "Pan-India courier coordination", "Returns & compliance handling"].map((i) => (
                <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPLIT 2 */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">HR Suite</p>
            <h2 className="text-4xl font-bold mb-6">Build strong, scalable teams without the overhead.</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From talent acquisition to performance frameworks, we set up the HR backbone start-ups and growing brands need to scale sustainably.
            </p>
            <ul className="space-y-3 text-sm">
              {["End-to-end recruitment across all levels", "HR operations & employee lifecycle", "Policies, documentation & compliance", "KPI / KRA & performance management"].map((i) => (
                <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={hrImg} alt="Strategic HR and talent networks" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tl from-background/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Let's scale your operations.</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">Partner with a team that treats your backend as the foundation of your growth.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                Start the Conversation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
