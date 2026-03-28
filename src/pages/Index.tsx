import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const WHATSAPP_URL = "https://wa.me/27123456789?text=Hi%20Bakone%20Pharmacy%2C%20I'd%20like%20to%20enquire%20about%20your%20services.";

const offerings = [
  { title: "Cold & Flu Treatment", desc: "Effective remedies and expert advice to help you recover quickly from colds, flu, and seasonal illnesses." },
  { title: "Pain Relief", desc: "A wide range of pain management solutions for headaches, muscle pain, joint discomfort, and more." },
  { title: "Vitamins & Immune Support", desc: "Quality supplements and vitamins to boost your immunity and support your overall wellbeing." },
  { title: "Baby & Child Care", desc: "Trusted products and guidance for your little one's health, from infant care to childhood wellness." },
  { title: "General Health Products", desc: "Everyday health essentials including skincare, first aid supplies, and personal care items." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-green-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(145_40%_20%)_0%,_hsl(150_40%_10%)_100%)]" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <img
          src={logoFull}
          alt="Bakone Pharmacy"
          className="mx-auto h-56 md:h-72 lg:h-80 animate-scale-in drop-shadow-2xl"
          width={600}
          height={400}
        />
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/90 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
          Professional pharmaceutical care with a personal touch. We're here to help you and your family stay healthy, every day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20">
            <a href="tel:+27123456789">
              <Phone size={18} className="mr-2" /> Call Now
            </a>
          </Button>
          <Button asChild size="lg" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20">
            <a href="https://maps.google.com/?q=Bakone+Pharmacy+Johannesburg" target="_blank" rel="noopener noreferrer">
              <MapPin size={18} className="mr-2" /> Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Offerings */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">What We Offer</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Quality health products and friendly, knowledgeable service — all under one roof.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-gold/30 bg-gold/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-5 self-start border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <a href={`https://wa.me/27123456789?text=Hi%2C%20I'd%20like%20to%20ask%20about%20${encodeURIComponent(item.title)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={14} className="mr-1.5" /> Ask on WhatsApp
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
