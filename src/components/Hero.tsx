import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { perfil } from '../data/perfil';

export default function Hero() {
  const socialLinks = [
    { href: perfil.github, label: 'GitHub', icon: Github },
    { href: perfil.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: perfil.email ? `mailto:${perfil.email}` : '', label: 'E-mail', icon: Mail },
  ].filter(link => link.href);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6"
        >
          PEDRO HENRIQUE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-6"
        >
          Desenvolvedor <span className="text-blue-500">Full Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Construo sistemas de gestão web, aplicações para terminais de pagamento (POS)
          e integrações entre sistemas usados por empresas em todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 transition-colors"
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projetos"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Contato
          </a>
          {perfil.curriculo && (
            <a
              href={perfil.curriculo}
              download
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500/10 transition-colors"
            >
              Baixar currículo
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
