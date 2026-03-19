import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/2b991ac760a10accfc9f6346414c28b3faec0c9f.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#0A1628] shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="FABtekk Engineering Limited" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#FF6B35]"
                    : "text-gray-300 hover:text-[#FF6B35]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+441234567890"
              className="bg-[#FF6B35] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#E55A2B] transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-[#1A2638]"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? "text-[#FF6B35]"
                    : "text-gray-300 hover:text-[#FF6B35]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+441234567890"
              className="block mt-4 bg-[#FF6B35] text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-[#E55A2B] transition-colors"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}