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
    <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.498 1.132 6.738 3.054 9.372L1.054 31.2l6.072-1.946A15.932 15.932 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.606c-.39 1.098-1.932 2.01-3.162 2.276-.842.18-1.94.322-5.638-1.212-4.734-1.962-7.78-6.766-8.016-7.08-.226-.314-1.9-2.53-1.9-4.826s1.202-3.428 1.63-3.896c.39-.426.852-.534 1.136-.534.282 0 .566.002.812.016.262.012.612-.1.958.73.356.852 1.212 2.95 1.318 3.164.108.214.18.466.036.75-.142.29-.214.468-.428.72-.214.252-.45.562-.642.754-.214.214-.436.446-.188.874.248.428 1.102 1.818 2.368 2.946 1.628 1.452 3 1.902 3.428 2.116.428.214.678.18.926-.108.248-.29 1.068-1.244 1.354-1.672.282-.428.566-.356.958-.214.39.142 2.486 1.174 2.914 1.388.428.214.714.322.822.498.106.178.106 1.028-.284 2.126z"/>
    </svg>
  </a>
);

export default WhatsAppButton;
