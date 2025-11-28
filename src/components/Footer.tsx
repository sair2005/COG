import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-primary-foreground">Clans of</span>{" "}
              <span className="text-gold">Graphics</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4 font-body">
              Where Creativity Becomes Identity. Transforming visions into stunning visual experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/home" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gold">Our Services</h4>
            <ul className="space-y-2 font-body">
              <li className="text-primary-foreground/80">Logo Design</li>
              <li className="text-primary-foreground/80">Digital Marketing</li>
              <li className="text-primary-foreground/80">Packaging Design</li>
              <li className="text-primary-foreground/80">UI/UX Design</li>
              <li className="text-primary-foreground/80">Website Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>No 7, Ayyanarpuram middle Street , Pudukkottai</span>
              </li>
              <li className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone size={20} className="flex-shrink-0" />
                <span>7358877515</span>
              </li>
              <li className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail size={20} className="flex-shrink-0" />
                <span>clansofgraphics@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 font-body">
            &copy; {currentYear} Clans of Graphics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
