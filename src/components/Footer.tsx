import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container-luxury section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="Royal Fort Logo" className="h-16 mb-4 rounded" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            TMA Approved luxury housing scheme in Sahiwal. A project by Al-Kareem Associates Burewala.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-6">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {[
              { path: "/about", label: "About Us" },
              { path: "/gallery", label: "Gallery" },
              { path: "/amenities", label: "Amenities" },
              { path: "/plot-plans", label: "Plot Plans" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Plot Sizes */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-6">Available Plots</h3>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <span>4 Marla Residential</span>
            <span>5 Marla Residential</span>
            <span>6 Marla Residential</span>
            <span>7 Marla Residential</span>
            <span>10 Marla Residential</span>
            <span>20 Marla Residential</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-6">Contact Us</h3>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="tel:03004968586" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone size={16} className="text-primary shrink-0" />
              0300-4968586
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary shrink-0 mt-1" />
              Old Harappa Road, In Front of APS School, Sahiwal
            </div>
            <a
              href="https://www.facebook.com/royalforthousingscheme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Facebook size={16} className="text-primary shrink-0" />
              royalforthousingscheme
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border">
      <div className="container-luxury py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Royal Fort Housing Scheme Sahiwal. All rights reserved.</p>
        <p>A Project of Al-Kareem Associates Burewala</p>
      </div>
    </div>
  </footer>
);

export default Footer;
