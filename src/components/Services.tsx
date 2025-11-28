import { motion } from 'framer-motion';
import { Scissors, Sparkles, Eye, Clock } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Scissors size={32} />,
      title: 'Design de Sobrancelhas',
      description: 'Técnica personalizada para desenhar e modelar suas sobrancelhas de acordo com seu formato de rosto.',
      price: 'R$ 80',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Micropigmentação',
      description: 'Preenchimento natural e duradouro com pigmentos de alta qualidade para sobrancelhas perfeitas.',
      price: 'R$ 350',
    },
    {
      icon: <Eye size={32} />,
      title: 'Henna',
      description: 'Coloração natural com henna para dar mais volume e cor às suas sobrancelhas.',
      price: 'R$ 60',
    },
    {
      icon: <Clock size={32} />,
      title: 'Manutenção',
      description: 'Mantenha suas sobrancelhas sempre impecáveis com nosso serviço de manutenção periódica.',
      price: 'R$ 50',
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos uma variedade de serviços especializados para realçar sua beleza
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <a href="#contact" className="service-link">
                Agendar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
