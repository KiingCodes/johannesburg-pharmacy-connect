import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/27123456789?text=Hi%20Bakone%20Pharmacy%2C%20I'd%20like%20to%20enquire%20about%20your%20services.";

const Contact = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Contact Us</h1>
      <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
        We'd love to hear from you. Reach out via any of the channels below.
      </p>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="mt-1 flex-shrink-0 text-primary" size={20} />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+27123456789" className="text-sm text-muted-foreground hover:text-primary">+27 12 345 6789</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MessageCircle className="mt-1 flex-shrink-0 text-primary" size={20} />
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Send us a message</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 flex-shrink-0 text-primary" size={20} />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-sm text-muted-foreground">123 Main Street, Johannesburg, South Africa</p>
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

        {/* Map */}
        <div className="overflow-hidden rounded-lg border">
          <iframe
            title="Bakone Pharmacy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114561.66645040916!2d28.0023!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1"
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
);

export default Contact;
