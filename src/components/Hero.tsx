import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          PEDRO HENRIQUE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-light text-white mb-8"
        >
          Desenvolvedor <span className="text-blue-500">Full Stack</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href="https://github.com/PedroDFinformatica?tab=repositories"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pedro-alves-37bab9357/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/srpedro12_?igsh=ajl0NW4xenFtdnBo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={32} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://wa.me/5561992715006?text=Ol%C3%A1."
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}