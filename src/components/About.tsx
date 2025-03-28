import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SoftSkill {
  name: string;
}

const skills: Skill[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const softSkills: SoftSkill[] = [
  { name: "Comunicação" },
  { name: "Colaboração" },
  { name: "Resolução" },
  { name: "Adaptabilidade" },
  { name: "Pontualidade" },
  { name: "Detalhismo" },
  { name: "Crítica" },
  { name: "Criatividade" },
  { name: "Autodidatismo" },
];

export default function About() {
  return (
    <section id="sobre" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-500 text-xl mb-4">Conheça um pouco</h2>
          <h3 className="text-white text-5xl font-bold">SOBRE MIM</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-3xl font-bold mb-6">
              Olá, me chamo Pedro Henrique
            </h2>
            <p className="text-gray-400 mb-6">
              Sou desenvolvedor web freelancer e empreendedor digital. Com mais de 4
              anos de experiência, tenho um histórico comprovado de transformar
              ideias em soluções digitais eficazes. Além disso, sou criador de conteúdo
              no TikTok, onde ensino e inspiro pessoas a explorarem o freelancing como
              uma carreira viável ou uma fonte de renda extra.
            </p>
            <p className="text-gray-400">
              Atualmente, estou cursando Engenharia de Software para aprofundar
              ainda mais meus conhecimentos. Se você está buscando um parceiro
              para levar seu negócio online ao próximo nível, vamos conversar!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Developer working"
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-500 text-xl mb-4">Conheça um pouco minhas</h2>
          <h3 className="text-white text-5xl font-bold">HABILIDADES</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <p className="text-gray-400 mb-12 max-w-3xl text-justify">
            Tenho experiência prática com as principais tecnologias de
            desenvolvimento web, incluindo HTML5, CSS3, e JavaScript, além de
            frameworks e plataformas como Bootstrap, React, NodeJS, PHP, Java,
            Figma, WordPress, Wix e Shopify. Essas ferramentas me permitem criar
            sites que são não só visualmente atraentes, mas também otimizados para
            desempenho e funcionalidade. Me dedico a desenvolver soluções web que
            atendem perfeitamente as necessidades dos meus clientes, seja em
            projetos simples ou em soluções complexas e personalizadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-8 mb-20">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-2"
              />
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-blue-500 text-2xl mb-8">Soft skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center text-gray-400"
              >
                <ChevronDown className="text-blue-500 mr-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <ChevronDown size={48} className="text-blue-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}