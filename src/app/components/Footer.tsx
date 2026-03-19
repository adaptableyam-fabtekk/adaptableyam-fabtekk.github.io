import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">FABtekk Engineering</h3>
            <p className="text-sm mb-4">
              Your trusted partner for food industry engineering solutions. Providing expert maintenance,
              installation, and emergency services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#FF6B35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B35] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[#FF6B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#FF6B35] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Condition Reports</li>
              <li>Preventative Maintenance</li>
              <li>Emergency Call Out</li>
              <li>Installations</li>
              <li>Oven Cleaning</li>
              <li>Fabrication & Spares</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#FF6B35]" />
                <div>
                  <p>+44 (0) 123 456 7890</p>
                  <p className="text-xs text-gray-400">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#FF6B35]" />
                <a href="mailto:info@foodtecheng.com" className="hover:text-[#FF6B35] transition-colors">
                  info@foodtecheng.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#FF6B35]" />
                <p>123 Industrial Estate<br />Manchester, UK</p>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#FF6B35]" />
                <p>Mon-Fri: 8am - 6pm<br />Emergency: 24/7</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FABtekk Engineering Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}