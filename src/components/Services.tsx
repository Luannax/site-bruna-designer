import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Sparkles size={25} />,
      title: 'Design Personalizado',
      description: 'Técnica personalizada de design para harmonizar e valorizar suas sobrancelhas de forma natural.',
      price: 'R$ 60,00',
    },
    {
      icon: <Sparkles size={25} />,
      title: 'Design com Henna',
      description: 'Coloração com henna que preenche as falhas e traz mais volume as sobrancelhas.',
      price: 'R$ 70,00',
    },
    {
      icon: <Sparkles size={25} />,
      title: 'Design com Coloração',
      description: 'Coloração com tintura que traz cor, volume e preenchimento as sobrancelhas de forma mais natural, a tintura no pelo pode durar até 30 dias.',
      price: 'R$ 80,00',
    },
    {
      icon: <Sparkles size={25} />,
      title: 'Brow Lamination',
      description: 'Técnica de alinhamento dos fios onde conseguimos preencher pequenas falhas, alinhar assimetrias, trazer mais volume e preenchimento as sobrancelhas. Resultados naturais valorizando os seus traços únicos.',
      price: 'R$ 160,00',
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
