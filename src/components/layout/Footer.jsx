import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/images/logo.png" 
                alt="Blank Slate Technologies" 
                className="h-10 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              We design and build digital products, intelligent systems, and technology solutions that help ambitious businesses move forward.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/services/custom-development" className="hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link to="/services/advanced-technology" className="hover:text-white transition-colors">Advanced Technology</Link></li>
              <li><Link to="/services/design-creative" className="hover:text-white transition-colors">Design & Creative</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-white transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@blankslatetechnology.com" className="hover:text-white transition-colors">hello@blankslatetechnology.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary">
          <p>© {new Date().getFullYear()} Blank Slate Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
