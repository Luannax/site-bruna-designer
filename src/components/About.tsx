import { motion } from 'framer-motion';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: 'Certificada',
      description: 'Profissional certificada com cursos especializados',
    },
    {
      icon: <Users size={24} />,
      title: '500+ Clientes',
      description: 'Centenas de clientes satisfeitas e fidelizadas',
    },
    {
      icon: <Heart size={24} />,
      title: 'Atendimento',
      description: 'Atendimento personalizado e humanizado',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Tendências',
      description: 'Sempre atualizada com as últimas técnicas',
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-wrapper">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-placeholder">
              <Heart size={60} className="about-icon" />
            </div>
            <div className="about-experience">
              <span className="experience-number">5+</span>
              <span className="experience-text">Anos de Experiência</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Mim</h2>
            <p className="about-text">
              Sou <strong>Bruna Jessen</strong>, especialista em sobrancelhas e Brow Lamination em Balneário Camboriú.
              Com mais de 5 anos de experiência, tenho o prazer de transformar olhares e elevar a autoestima através de
              técnicas modernas que valorizam sua beleza natural.
            </p>
            <p className="about-text">
              Cada rosto é único, e meu trabalho é criar um design personalizado que harmonize com suas características,
              valorizando sua beleza natural. Utilizo técnicas modernas e produtos de alta qualidade para garantir
              resultados incríveis e duradouros.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
