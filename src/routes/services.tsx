import { createFileRoute } from "@tanstack/react-router";
import { Package, Warehouse, Truck, Settings, FileCheck, UserPlus, Users, FileText, BarChart3, Layers } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — E-commerce & HR Solutions | Atya Ebiz" },
      { name: "description", content: "Complete e-commerce fulfilment suite and strategic HR services — onboarding, warehousing, logistics, recruitment, policies and performance." },
      { property: "og:title", content: "Services — Atya Ebiz Solutions" },
      { property: "og:description", content: "Complete e-commerce and HR service suite." },
    ],
  }),
  component: ServicesPage,
});

const ecom = [
  { icon: Package, title: "E-commerce Onboarding & Integration", desc: "Cataloguing, SKU creation, listing optimisation, product data management, categorisation, quality checks and compliance with marketplace guidelines." },
  { icon: Warehouse, title: "Warehousing & Inventory Management", desc: "Secure storage in well-organised warehouses around Bangalore with real-time tracking, FIFO, returns handling, quality checks and repacking." },
  { icon: Truck, title: "Order Fulfilment & Dispatch Logistics", desc: "Receive orders, pick, pack, label and coordinate with courier partners for dispatch across India — COD or prepaid." },
  { icon: Settings, title: "Scalable Infrastructure & Operational Support", desc: "We scale warehousing capacity, manage replenishment, forecast inventory and maintain packaging and logistics relationships." },
  { icon: FileCheck, title: "Compliance & Documentation Support", desc: "Tax, invoicing, returns and packaging norms — fully aligned with legal and marketplace standards." },
];

const hr = [
  { icon: UserPlus, title: "Recruitment & Talent Acquisition", desc: "End-to-end recruitment across entry-level, mid-level, leadership and specialised roles — sourcing to joining follow-up." },
  { icon: Users, title: "HR Operations & Employee Lifecycle", desc: "Onboarding, documentation, attendance, leave, employee records, HR MIS and exit formalities — organised and scalable." },
  { icon: FileText, title: "HR Policies, Documentation & Compliance", desc: "Employee handbooks, codes of conduct, leave and performance policies, plus operational HR governance support." },
  { icon: BarChart3, title: "Performance Management & Org Development", desc: "KPI/KRA frameworks, appraisal systems, role structures, hierarchies and engagement initiatives." },
  { icon: Layers, title: "Scalable HR Infrastructure & Strategic Support", desc: "Long-term HR partnership — scaling hiring, workforce planning and people-process optimisation." },
];

const roadmap = [
  { step: "01", title: "Onboarding & Setup", desc: "You share your product list. We onboard products on marketplaces and set up SKUs, catalogues and listings." },
  { step: "02", title: "Warehousing Intake", desc: "You ship inventory to our warehouse. We receive, inspect and store safely." },
  { step: "03", title: "Order Processing", desc: "Orders received from marketplaces or store. We pick, pack, label and dispatch." },
  { step: "04", title: "Logistics & Shipping", desc: "Courier integration, pickup scheduling, tracking and returns processing." },
  { step: "05", title: "Reporting & Insights", desc: "Periodic reports on stock, sales, returns and damages — with replenishment forecasts." },
  { step: "06", title: "Support & Scaling", desc: "As volumes grow, we scale infrastructure and ensure timely dispatch." },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: typeof Package; title: string; desc: string }) {
  return (
    <div className="bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
      <div className="h-12 w-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5">
        <Icon size={22} className="text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Service Suites</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            Operations, fulfilment & <span className="text-gradient">people — covered.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Two specialised suites designed to handle the complexity behind a growing brand.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12">
            <h2 className="text-4xl font-bold">E-commerce Service Suite</h2>
            <p className="text-sm text-muted-foreground">Onboarding · Warehousing · Fulfilment · Compliance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecom.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12">
            <h2 className="text-4xl font-bold">HR Service Suite</h2>
            <p className="text-sm text-muted-foreground">Recruitment · Operations · Policies · Performance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hr.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Collaborative roadmap</p>
            <h2 className="text-4xl md:text-5xl font-bold">How we work together.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmap.map((r) => (
              <div key={r.step} className="relative bg-card-gradient border border-border rounded-2xl p-8">
                <div className="text-5xl font-display font-bold text-gradient mb-4">{r.step}</div>
                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
