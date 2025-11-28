import { useState } from 'react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Sobre', href: '#about' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-name">Bruna Jessen</span>
            <span className="logo-tagline">Especialista em Sobrancelhas</span>
          </motion.div>

          <div className="nav-desktop">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Agendar
            </motion.a>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick('#contact');
                }}
              >
                Agendar
              </a>
              <div className="nav-mobile-social">
                <a href="https://www.instagram.com/brunajessen_/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="tel:+5511999999999">
                  <Phone size={20} />
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <MapPin size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
