import { Phone, MessageCircle, MapPin, Clock, Eye, Target, ShieldCheck, Heart, Users, Stethoscope, HeartPulse, FileText, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import aboutBg from "@/assets/about-bg.jpg";
import shop1 from "@/assets/shop-1.jpg";
import shop2 from "@/assets/shop-2.jpg";
import SmartSearch from "@/components/SmartSearch";

const WHATSAPP_NUMBER = "27839982176";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Bakone%20Pharmacy%2C%20I'd%20like%20to%20enquire%20about%20your%20services.`;

const offerings = [
  { title: "Cold & Flu Treatment", desc: "Effective remedies and expert advice to help you recover quickly from colds, flu, and seasonal illnesses.", wa: "Hi, I have flu symptoms. Can you help?" },
  { title: "Pain Relief", desc: "A wide range of pain management solutions for headaches, muscle pain, joint discomfort, and more.", wa: "Hi, I'm experiencing pain. What do you recommend for relief?" },
  { title: "Vitamins & Immune Support", desc: "Quality supplements and vitamins to boost your immunity and support your overall wellbeing.", wa: "Hi, I'm looking for vitamins and immune boosters. What do you have?" },
  { title: "Baby & Child Care", desc: "Trusted products and guidance for your little one's health, from infant care to childhood wellness.", wa: "Hi, I need baby/child care products. Can you advise?" },
  { title: "General Health Products", desc: "Everyday health essentials including skincare, first aid supplies, and personal care items.", wa: "Hi, I'm looking for general health products. What do you recommend?" },
];

const services = [
  { icon: Stethoscope, title: "Health Advice", desc: "Our qualified pharmacists provide personalised health consultations to help you make informed decisions about your wellbeing." },
  { icon: HeartPulse, title: "Blood Pressure Checks", desc: "Quick, accurate blood pressure monitoring available in-store. Walk in anytime — no appointment needed." },
  { icon: FileText, title: "Prescription Assistance", desc: "We'll help you understand your prescriptions, manage refills, and ensure you get the right medication at the right time." },
  { icon: Pill, title: "Over-the-Counter Recommendations", desc: "Not sure what you need? Our team will guide you to the most suitable over-the-counter products for your symptoms." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Trusted Professionals", desc: "Qualified pharmacists with years of experience you can rely on." },
  { icon: Heart, title: "Personalised Care", desc: "We know our customers by name and treat every enquiry with genuine attention." },
  { icon: Users, title: "Community Focused", desc: "Proudly serving Johannesburg with accessible, compassionate healthcare." },
  { icon: Clock, title: "Convenient & Accessible", desc: "Walk-in consultations, quick service, and easy WhatsApp communication." },
];

// Intersection Observer hook for scroll animations
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const children = el.querySelectorAll(".scroll-reveal");
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const offeringsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-background">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <img
            src={logoFull}
            alt="Bakone Pharmacy"
            className="mx-auto h-56 md:h-72 lg:h-80 drop-shadow-2xl animate-hero-logo animate-hero-pulse hover:scale-105 transition-transform duration-500"
            width={600}
            height={400}
          />
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
            Professional pharmaceutical care with a personal touch. We're here to help you and your family stay healthy, every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.7s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+27839982176">
                <Phone size={18} className="mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" onClick={() => scrollTo("contact")}>
              <a href="#contact">
                <MapPin size={18} className="mr-2" /> Get Directions
              </a>
            </Button>
          </div>
          <div className="relative z-20 mt-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.9s" }}>
            <SmartSearch />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="offerings" className="py-16 md:py-24" ref={offeringsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl scroll-reveal scroll-reveal-fade">What We Offer</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.1s" }}>
            Quality health products and friendly, knowledgeable service — all under one roof.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal scroll-reveal-up flex flex-col justify-between rounded-lg border border-gold/30 bg-gold/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 hover:-translate-y-1"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-5 self-start border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.wa)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} className="mr-1.5" /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-muted/50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl scroll-reveal scroll-reveal-fade">Our Services</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.1s" }}>
            More than just a pharmacy — we're a partner in your health journey.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="scroll-reveal scroll-reveal-up flex gap-5 rounded-lg border border-gold/30 bg-gold/10 p-6"
                style={{ transitionDelay: `${0.12 * i}s` }}
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

      {/* About — with product background */}
      <section
        id="about"
        className="relative py-16 md:py-24 overflow-hidden"
        ref={aboutRef}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 bg-green-dark/85 backdrop-blur-sm" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <img src={logoIcon} alt="Bakone Pharmacy" className="mx-auto h-20 w-20 scroll-reveal scroll-reveal-scale" />
            <h2 className="mt-6 text-3xl font-bold text-primary-foreground md:text-4xl scroll-reveal scroll-reveal-fade">About Bakone Pharmacy</h2>
            <p className="mt-4 text-primary-foreground/80 scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.15s" }}>
              Bakone Pharmacy is a community-focused pharmacy based in Johannesburg, South Africa. We are committed to providing professional, accessible, and compassionate pharmaceutical care to every person who walks through our doors.
            </p>
            <p className="mt-4 text-primary-foreground/80 scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.25s" }}>
              Our team of qualified pharmacists brings years of experience and a genuine passion for health and wellness. We believe that good health starts with trust.
            </p>
            <p className="mt-4 font-medium text-gold-light scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.35s" }}>
              Your Partner in Wellness — that's not just our slogan, it's our promise.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="scroll-reveal scroll-reveal-up rounded-lg border border-gold/30 bg-card/10 backdrop-blur-sm p-8" style={{ transitionDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20">
                  <Eye className="text-gold-light" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/75">
                To be Johannesburg's most trusted community pharmacy — a place where every person feels welcome, heard, and empowered to take control of their health.
              </p>
            </div>
            <div className="scroll-reveal scroll-reveal-up rounded-lg border border-gold/30 bg-card/10 backdrop-blur-sm p-8" style={{ transitionDelay: "0.25s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20">
                  <Target className="text-gold-light" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Our Mission</h3>
              </div>
              <p className="text-primary-foreground/75">
                To deliver professional, personalised pharmaceutical care with compassion and integrity — making quality health services accessible to every member of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24" ref={whyRef}>
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl scroll-reveal scroll-reveal-fade">Why Choose Bakone Pharmacy?</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.1s" }}>
            We go beyond dispensing medication — we build lasting relationships built on trust and care.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal scroll-reveal-up flex gap-4 rounded-lg border border-gold/30 bg-gold/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 hover:-translate-y-1"
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
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

      {/* Our Pharmacy Gallery */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Inside Our Pharmacy</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            A glimpse into our well-stocked pharmacy — quality products ready for you.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={shop1} alt="Bakone Pharmacy shelves stocked with cold & flu and pain relief medication" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={shop2} alt="Bakone Pharmacy shelves with vitamins, allergy and general health products" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-muted/50" ref={contactRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl scroll-reveal scroll-reveal-fade">Contact Us</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground scroll-reveal scroll-reveal-fade" style={{ transitionDelay: "0.1s" }}>
            We'd love to hear from you. Reach out via any of the channels below.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="space-y-6 scroll-reveal scroll-reveal-up" style={{ transitionDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 flex-shrink-0 text-primary" size={20} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+27839982176" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+27 83 998 2176</a>
                  <a href="tel:+27648587838" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+27 64 858 7838</a>
              </div>
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 32 32" className="mt-1 h-5 w-5 flex-shrink-0 fill-primary">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.498 1.132 6.738 3.054 9.372L1.054 31.2l6.072-1.946A15.932 15.932 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.098-1.932 2.01-3.162 2.276-.842.18-1.94.322-5.638-1.212-4.734-1.962-7.78-6.766-8.016-7.08-.226-.314-1.9-2.53-1.9-4.826s1.202-3.428 1.63-3.896c.39-.426.852-.534 1.136-.534.282 0 .566.002.812.016.262.012.612-.1.958.73.356.852 1.212 2.95 1.318 3.164.108.214.18.466.036.75-.142.29-.214.468-.428.72-.214.252-.45.562-.642.754-.214.214-.436.446-.188.874.248.428 1.102 1.818 2.368 2.946 1.628 1.452 3 1.902 3.428 2.116.428.214.678.18.926-.108.248-.29 1.068-1.244 1.354-1.672.282-.428.566-.356.958-.214.39.142 2.486 1.174 2.914 1.388.428.214.714.322.822.498.106.178.106 1.028-.284 2.126z"/>
                </svg>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Send us a message</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0 text-primary" size={20} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">Amandla Blvd, Braamfischerville, Johannesburg, 1725</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 flex-shrink-0 text-primary" size={20} />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Mon – Fri: 08:00 – 18:00</p>
                    <p>Saturday: 08:00 – 14:00</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <div className="scroll-reveal scroll-reveal-up overflow-hidden rounded-lg border" style={{ transitionDelay: "0.3s" }}>
              <iframe
                title="Bakone Pharmacy Location"
                src="https://maps.google.com/maps?q=Amandla+Blvd,+Braamfischerville,+Johannesburg,+1725,+South+Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
