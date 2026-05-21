import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "27839982176";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Bakone%20Pharmacy%2C%20I'd%20like%20to%20enquire%20about%20your%20services.`;

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 animate-float"
    style={{ backgroundColor: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon className="h-7 w-7 fill-white" />
  </a>
);

export default WhatsAppButton;
