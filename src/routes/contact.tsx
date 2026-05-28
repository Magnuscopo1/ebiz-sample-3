import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atya Ebiz Solutions LLP" },
      { name: "description", content: "Reach Atya Ebiz Solutions in Bengaluru or Gurugram. Email, phone and contact form for e-commerce and HR enquiries." },
      { property: "og:title", content: "Contact Atya Ebiz Solutions" },
      { property: "og:description", content: "Talk to our team about fulfilment and HR partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            Let's build your <span className="text-gradient">backend together.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Share a few details and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          {/* form */}
          <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="h-14 w-14 mx-auto rounded-full bg-primary-gradient grid place-items-center shadow-glow mb-5">
                  <Send className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message received.</h3>
                <p className="text-muted-foreground">We'll be in touch shortly at the email you provided.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Interested In</label>
                  <select className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
                    <option>E-commerce Fulfilment</option>
                    <option>HR & Recruitment</option>
                    <option>Both Suites</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea rows={5} required className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Tell us about your brand and what you'd like to scale..." />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* info */}
          <div className="lg:col-span-2 space-y-6">
            <InfoCard icon={Mail} title="Email" lines={["info@atyaebizsolutions.com", "atyaebiz@gmail.com"]} />
            <InfoCard icon={Phone} title="Phone" lines={["+91 75440 00929", "+91 93414 56513", "+91 80735 16150"]} />
            <InfoCard icon={MapPin} title="Bengaluru" lines={["Survey No. 133/2, V Begur Hobli,", "Mylasandra, Begur, Bangalore South,", "Karnataka 560068"]} />
            <InfoCard icon={MapPin} title="Gurugram" lines={["Khewat No. 424, Mustil No. 13,", "Killa No. 22/2, Village Kankrola,", "PO Bhangrola, Haryana 122505"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="bg-card-gradient border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-primary-gradient grid place-items-center shadow-glow">
          <Icon size={18} className="text-primary-foreground" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
}
