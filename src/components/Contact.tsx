import { motion } from 'framer-motion';
import { FileDown, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { perfil } from '../data/perfil';

const contacts = [
  { label: 'WhatsApp', description: 'Resposta mais rápida', href: perfil.whatsapp, icon: MessageCircle },
  { label: 'E-mail', description: perfil.email, href: perfil.email ? `mailto:${perfil.email}` : '', icon: Mail },
  { label: 'LinkedIn', description: 'Pedro Alves', href: perfil.linkedin, icon: Linkedin },
  { label: 'GitHub', description: 'PedroDantas14', href: perfil.github, icon: Github },
].filter(contact => contact.href);

export default function Contact() {
  return (
    <section id="contato" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-500 text-xl mb-4">Vamos conversar?</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">CONTATO</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estou aberto a novas oportunidades, projetos e parcerias. Escolha o canal que preferir.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {contacts.map(({ label, description, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full sm:w-64 flex flex-col items-center text-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-blue-500 transition-colors"
            >
              <Icon size={32} className="text-blue-500" />
              <span className="text-white font-semibold">{label}</span>
              <span className="text-gray-400 text-sm break-words">{description}</span>
            </motion.a>
          ))}
        </div>

        {perfil.curriculo && (
          <div className="flex justify-center mt-10">
            <a
              href={perfil.curriculo}
              download
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FileDown size={20} />
              Baixar currículo (PDF)
            </a>
          </div>
        )}
      </div>

      <footer className="container mx-auto px-6 mt-20 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} {perfil.nome}. Todos os direitos reservados.</span>
        <div className="flex gap-4">
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={perfil.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </footer>
    </section>
  );
}
