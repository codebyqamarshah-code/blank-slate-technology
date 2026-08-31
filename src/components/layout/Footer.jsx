import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import Container from '../ui/Container';

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com' },
];

const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/images/Blank Slate IT Logo-02.png" 
                alt="Blank Slate Technologies" 
                className="h-16 md:h-20 object-contain opacity-95 hover:opacity-100 transition-all duration-300" 
              />
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-xs mb-6">
              We design and build digital products, intelligent systems, and technology solutions that help ambitious businesses move forward.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#3366ff] hover:bg-[#3366ff]/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><a href="https://blankslateinstitute.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Institute</a></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/services" className="hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Advanced Technology</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Design & Creative</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
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
