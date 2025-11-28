import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente desde 2022',
      comment: 'A Bruna é simplesmente incrível! Ela transformou completamente minhas sobrancelhas e agora me sinto muito mais confiante. O atendimento é impecável e o resultado sempre perfeito!',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Cliente desde 2021',
      comment: 'Profissional extremamente dedicada e atenciosa. Minhas sobrancelhas nunca ficaram tão bonitas! Recomendo de olhos fechados.',
      rating: 5,
    },
    {
      name: 'Juliana Santos',
      role: 'Cliente desde 2023',
      comment: 'Melhor design de sobrancelhas que já fiz! A Bruna entende exatamente o que cada cliente precisa e entrega um trabalho impecável.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">O Que Dizem Nossas Clientes</h2>
          <p className="section-subtitle">
            Depoimentos reais de clientes satisfeitas com nosso trabalho
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="testimonial-quote" size={40} />
              
              <div className="testimonial-rating">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>

              <p className="testimonial-comment">{testimonial.comment}</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
