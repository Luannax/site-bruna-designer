import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Send, User } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*Contato recebido pelo site Bruna Jessen*

*Nome:* ${formData.name}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/556547991294328?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Agende seu horário ou tire suas dúvidas. Estamos aqui para ajudar!
          </p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Informações de Contato</h3>
            <p className="contact-info-text">
              Entre em contato conosco através dos canais abaixo ou preencha o formulário ao lado.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telefone</h4>
                  <p>(47) 9 9129-4328</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contato@brunajessen.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>Balneário Camboriú, SC - Brasil</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Seg - Sex: 9h às 18h</p>
                  <p>Sáb: 9h às 14h</p>
                  <p style={{ marginTop: '6px', fontWeight: 600 }}>Atendimento somente com horário agendado</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Siga nas Redes Sociais</h4>
              <a href="https://www.instagram.com/brunajessen_/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
                <span>@brunajessen_</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-header">
              <div className="form-icon">
                <User size={35} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                placeholder="Conte-nos o que você precisa..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
