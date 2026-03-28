import { Stethoscope, HeartPulse, FileText, Pill } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const services = [
  { icon: Stethoscope, title: "Health Advice", desc: "Our qualified pharmacists provide personalised health consultations to help you make informed decisions about your wellbeing." },
  { icon: HeartPulse, title: "Blood Pressure Checks", desc: "Quick, accurate blood pressure monitoring available in-store. Walk in anytime — no appointment needed." },
  { icon: FileText, title: "Prescription Assistance", desc: "We'll help you understand your prescriptions, manage refills, and ensure you get the right medication at the right time." },
  { icon: Pill, title: "Over-the-Counter Recommendations", desc: "Not sure what you need? Our team will guide you to the most suitable over-the-counter products for your symptoms." },
];

const Services = () => (
  <>
    <PageHeader title="Our Services" subtitle="More than just a pharmacy — we're a partner in your health journey." />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-3xl gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-lg border border-gold/30 bg-gold/10 p-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
