import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const images = Array(6).fill(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Galeria de Trabalhos</h2>
          <p className="section-subtitle">
            Confira alguns dos nossos trabalhos e se inspire para sua próxima transformação
          </p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="gallery-placeholder">
                <Image size={40} />
              </div>
              <div className="gallery-overlay">
                <span className="gallery-text">Ver Detalhes</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Veja mais trabalhos no Instagram</p>
          <a href="https://www.instagram.com/brunajessen_/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Seguir @brunajessen_
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
