import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const links = [
  { to: "#home", label: "Home" },
  { to: "#offerings", label: "What We Offer" },
  { to: "#services", label: "Services" },
  { to: "#about", label: "About" },
  { to: "#contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" onClick={() => scrollTo("#home")} className="flex-shrink-0">
          <img src={logoFull} alt="Bakone Pharmacy" className="h-12" />
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <a
                href={l.to}
                onClick={(e) => { e.preventDefault(); scrollTo(l.to); }}
                className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-card md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo(l.to); }}
                  className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
