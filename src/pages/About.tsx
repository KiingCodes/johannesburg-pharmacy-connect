import { Eye, Target, ShieldCheck, Heart, Users, Clock } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import PageHeader from "@/components/PageHeader";

const whyChoose = [
  { icon: ShieldCheck, title: "Trusted Professionals", desc: "Qualified pharmacists with years of experience you can rely on." },
  { icon: Heart, title: "Personalised Care", desc: "We know our customers by name and treat every enquiry with genuine attention." },
  { icon: Users, title: "Community Focused", desc: "Proudly serving Johannesburg with accessible, compassionate healthcare." },
  { icon: Clock, title: "Convenient & Accessible", desc: "Walk-in consultations, quick service, and easy WhatsApp communication." },
];

const About = () => (
  <>
    <PageHeader title="About Bakone Pharmacy" subtitle="Your Partner in Wellness since day one." />

    {/* Who We Are */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="flex justify-center animate-scale-in">
          <img src={logoIcon} alt="Bakone Pharmacy" className="h-20 w-20" />
        </div>
        <div className="mt-8 space-y-5 text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <p>
            Bakone Pharmacy is a community-focused pharmacy based in Johannesburg, South Africa. We are committed to providing professional, accessible, and compassionate pharmaceutical care to every person who walks through our doors.
          </p>
          <p>
            Our team of qualified pharmacists brings years of experience and a genuine passion for health and wellness. We believe that good health starts with trust — trust in your pharmacist, trust in the products you use, and trust in the advice you receive.
          </p>
          <p>
            Whether you need help managing a chronic condition, advice on everyday wellness, or simply a friendly face you can rely on, Bakone Pharmacy is here for you. We take pride in knowing our customers by name and treating every enquiry with the care and attention it deserves.
          </p>
          <p className="font-medium text-foreground">
            Your Partner in Wellness — that's not just our slogan, it's our promise.
          </p>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-16 md:py-24 bg-gold/5">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gold/30 bg-gold/10 p-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Eye className="text-primary" size={22} />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              To be Johannesburg's most trusted community pharmacy — a place where every person feels welcome, heard, and empowered to take control of their health and wellbeing.
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-gold/10 p-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.25s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Target className="text-primary" size={22} />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              To deliver professional, personalised pharmaceutical care with compassion and integrity — making quality health services accessible to every member of our community.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl animate-fade-in">Why Choose Bakone Pharmacy?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: "0.15s" }}>
          We go beyond dispensing medication — we build lasting relationships built on trust and care.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyChoose.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-gold/30 bg-gold/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
