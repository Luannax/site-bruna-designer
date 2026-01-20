import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-name">Bruna Jessen</span>
              <span className="footer-logo-tagline">Especialista em Sobrancelhas</span>
            </div>
            <p className="footer-description">
              Valorizo sua beleza com resultados naturais. Brow Lamination em Balneário Camboriú.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/brunajessen_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="tel:+5547991294328" aria-label="Telefone">
                <Phone size={20} />
              </a>
              <a href="mailto:contato@brunadesign.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Localização">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>   
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services">Design Personalizado</a></li>
              <li><a href="#services">Design com Henna</a></li>
              <li><a href="#services">Design com Coloração</a></li>
              <li><a href="#services">Brow Lamination</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} />
                <span>(47) 9 9129-4328</span>
              </li>
              <li>
                <Mail size={16} />
                <span>contato@brunajessen.com</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Balneário Camboriú, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Bruna Jessen - Especialista em Sobrancelhas. Todos os direitos reservados.
          </p>
          <p className="footer-credits">
            Feito com <Heart size={14} fill="var(--primary)" color="var(--primary)" /> para realçar sua beleza
          </p>
          <p className="footer-developer">
            Desenvolvido por <a href="https://instagram.com/dev.luanna" target="_blank" rel="noopener noreferrer">Luanna</a> • <a href="https://instagram.com/dev.luanna" target="_blank" rel="noopener noreferrer">@dev.luanna</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
