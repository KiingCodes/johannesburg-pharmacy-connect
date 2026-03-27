import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex-shrink-0">
          <img src={logoFull} alt="Bakone Pharmacy" className="h-12" />
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
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
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
