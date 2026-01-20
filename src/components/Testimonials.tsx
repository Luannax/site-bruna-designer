import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    {
      name: 'Fabiana Silva',
      role: 'Cliente desde 2023',
      comment: '100% recomendado a melhor de todo Brasil.. Eu amei como você deixou minhas sobrancelhas, grande diferença.. Muita obrigada.',
      rating: 5,
    },
    {
      name: 'Samanta',
      role: 'Cliente desde 2024',
      comment: 'Bruuu eu amei, ficou demais, que perfeição. Encontrei alguém que realmente vai saber fazer minha sobrancelha aqui em BC. Obrigadaaaaa.',
      rating: 5,
    },
    {
      name: 'Priscila',
      role: 'Cliente desde 2025',
      comment: 'Amiga tô apaixonada na minha sobrancelha, tu fez do jeitinho que eu gosto kkkk não te troco por nada maisss.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

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

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" type="button" onClick={prev} aria-label="Anterior">
            ‹
          </button>

          <div className="carousel-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <Quote className="testimonial-quote" size={40} />

                <div className="testimonial-rating">
                  {Array(testimonials[activeIndex].rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />
                    ))}
                </div>

                <p className="testimonial-comment">{testimonials[activeIndex].comment}</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonials[activeIndex].name.charAt(0)}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                    <p className="author-role">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" type="button" onClick={next} aria-label="Próximo">
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Navegação de depoimentos">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Mostrar depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
