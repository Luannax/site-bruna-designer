import { motion } from 'framer-motion';
import './Gallery.css';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';

const Gallery = () => {
  const profileUrl = 'https://www.instagram.com/brunajessen_/';
  const images = [
    { src: foto1, alt: 'Design personalizado em sobrancelhas' },
    { src: foto2, alt: 'Design com henna' },
    { src: foto3, alt: 'Design com coloração' },
    { src: foto4, alt: 'Brow lamination alinhado' },
    { src: foto5, alt: 'Resultado de design detalhado' },
    { src: foto6, alt: 'Acabamento natural e simétrico' },
  ];

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
          {images.map((image, index) => (
            <a
              key={image.src}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-link"
              aria-label={`Abrir ${image.alt} no Instagram`}
            >
              <motion.div
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={image.src} alt={image.alt} className="gallery-image" loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-text">Ver mais</span>
                </div>
              </motion.div>
            </a>
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
