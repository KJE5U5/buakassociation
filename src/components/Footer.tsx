import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import buakLogo from "@/assets/buak-logo.jpg";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img 
            src={buakLogo} 
            alt="BUAK Logo" 
            className="h-20 w-20 object-contain mb-3"
          />
          <h3 className="text-xl font-bold text-primary text-center">BUAK</h3>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Bio-Energy Umbrella Association of Kyangwali
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/model" className="text-muted-foreground hover:text-primary transition-colors">Our Model</Link></li>
              <li><Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">Stories</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* For Members */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Members</h3>
            <ul className="space-y-2">
              <li><Link to="/join-us" className="text-muted-foreground hover:text-primary transition-colors">Join BUAK</Link></li>
              <li><Link to="/our-model" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/visit-us" className="text-muted-foreground hover:text-primary transition-colors">Site Visits</Link></li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Investors</h3>
            <ul className="space-y-2">
              <li><Link to="/invest" className="text-muted-foreground hover:text-primary transition-colors">Invest</Link></li>
              <li><Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">Financials</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Newsletter</p>
              <Button variant="outline" size="sm" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                <strong>BUAK Bio-Energy Umbrella Association</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Kyangwali Refugee Settlement, Kikuube District, Uganda
              </p>
              <p className="text-sm text-muted-foreground">
                📧 buakassociation@gmail.com | 📱 +256 758998928
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <div className="px-3 py-1 bg-accent/20 rounded-full text-xs font-medium">
                🏆 Ashden Award Winner 2024
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2025 BUAK. All Rights Reserved. | <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link> | <Link to="/terms-of-use" className="hover:text-primary">Terms</Link> | <Link to="/cookie-policy" className="hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
