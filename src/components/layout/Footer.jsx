import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/BlankSlate.IT' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/blankslate.it/' },
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/blankslate.IT' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com' },
];

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-border transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={isDark ? '/images/Blank Slate IT Logo-02.png' : '/images/logo-dark.png'} 
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
                    className={`w-9 h-9 rounded-full border flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-[#3366ff] hover:bg-[#3366ff]/20'
                        : 'bg-neutral-200/60 border-neutral-300 text-neutral-700 hover:text-neutral-950 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><a href="https://blankslateinstitute.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Institute</a></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Advanced Technology</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Design & Creative</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@blankslatetechnology.com" className="hover:text-primary transition-colors">hello@blankslatetechnology.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary">
          <p>© {new Date().getFullYear()} Blank Slate Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
