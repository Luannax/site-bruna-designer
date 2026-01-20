import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import brunaHeroImg from '../assets/Perfil.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Brow Lamination • Balneário Camboriú</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Valorizo sua beleza com
            <span className="gradient-text"> resultados naturais</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Especialista em Brow Lamination e Design de Sobrancelhas em Balneário Camboriú.
            Técnicas exclusivas para realçar sua beleza natural.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              Agendar Horário
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Ver Serviços
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="stat">
              <span className="stat-number">+1000</span>
              <span className="stat-label">Clientes Satisfeitas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">+5</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedicação</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-wrapper">
            <img src={brunaHeroImg} alt="Bruna Jessen - Especialista em Sobrancelhas" className="hero-main-image" />
            <div className="hero-image-decoration decoration-1"></div>
            <div className="hero-image-decoration decoration-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
