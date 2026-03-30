import { Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import jeweliqLogo from "@/assets/jeweliq-logo.png";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <img src={logoIcon} alt="Bakone Pharmacy" className="h-10 w-10" />
          <p className="text-sm text-muted-foreground">Your Partner in Wellness</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <h4 className="font-display text-base font-semibold text-foreground">Quick Links</h4>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }} className="hover:text-primary transition-colors">Services</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("#about"); }} className="hover:text-primary transition-colors">About Us</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <h4 className="font-display text-base font-semibold text-foreground">Contact</h4>
          <p className="flex items-center gap-2"><Phone size={14} /> +27 83 998 2176</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> Amandla Blvd, Braamfischerville, Johannesburg, 1725</p>
        </div>
      </div>

      <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Bakone Pharmacy. All rights reserved.</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span>Site managed by</span>
          <a href="https://www.jeweliq.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity">
            <img src={jeweliqLogo} alt="JewelIQ" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
