import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-3d.jpg";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atya Ebiz Solutions LLP" },
      { name: "description", content: "Atya Ebiz Solutions LLP is a specialised partner for e-commerce sellers and brands offering operations and HR solutions." },
      { property: "og:title", content: "About Atya Ebiz Solutions" },
      { property: "og:description", content: "Reliable back-end operations arm for brands scaling across India." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Cost & Time Efficiency", desc: "A ready-to-use, professional setup instead of building your own infrastructure." },
  { icon: Eye, title: "Transparency", desc: "Clearly defined processes, stock tracking, fulfilment protocols and compliance." },
  { icon: Heart, title: "Long-term Partnership", desc: "Aligned with your growth goals — flexibility and professionalism at every step." },
];

function AboutPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Who we are</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
              A back-end <span className="text-gradient">built for brands</span> that wish to scale.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atya Ebiz Solutions LLP is envisioned as a specialised partner for e-commerce sellers and brands — offering end-to-end support from online onboarding to warehousing, inventory management, order fulfilment and logistics coordination.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={aboutImg} alt="Premium abstract 3D composition" width={1600} height={1024} className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-card-gradient border border-border rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">E-commerce Solutions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We act as a reliable back-end operations arm for brands who wish to scale rapidly but want to avoid the complexity of managing warehousing, inventory, dispatch and marketplace compliance themselves.
            </p>
          </div>
          <div className="bg-card-gradient border border-border rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">HR Solutions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide strategic HR and recruitment services to start-ups, B2B/D2C brands and growing businesses — helping organisations build strong, scalable teams and professional HR frameworks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our commitment</p>
            <h2 className="text-4xl md:text-5xl font-bold">More than a service provider.</h2>
            <p className="text-muted-foreground mt-4">We aim to be a reliable business partner — flexibility, transparency and professionalism at every step.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5">
                  <v.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Bengaluru — Registered Office</p>
              <p className="text-muted-foreground leading-relaxed">Survey No. 133/2, V Begur Hobli, Mylasandra, Begur, Bangalore South, Bengaluru, Karnataka 560068</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Gurugram Operations</p>
              <p className="text-muted-foreground leading-relaxed">Khewat No. 424, Mustil No. 13, Killa No. 22/2, Village Kankrola, PO Bhangrola, Gurugram, Haryana 122505</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
