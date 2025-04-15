import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/img/pedro.jpeg';

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
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "FlutterFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
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
            <p className="text-gray-400 mb-6 text-justify">
            Sou desenvolvedor Full Stack com dois anos de experiência na área de tecnologia. Minha trajetória começou no suporte técnico, onde tive a oportunidade de desenvolver minhas habilidades e, com o tempo, evoluí para a programação.

Sou formado em Análise e Desenvolvimento de Sistemas e atualmente sou estagiário na DF Informática, onde adquiri experiência prática com diversas linguagens e tecnologias. Sempre em busca de aprimoramento, estou estudando Java para expandir meus conhecimentos e continuar evoluindo na carreira.
            </p>
            <p className="text-gray-400 text-justify">
            Minha paixão pela tecnologia me motiva a aprender continuamente e a enfrentar novos desafios, sempre em busca de inovação e crescimento profissional.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video"
          >
            <img
              src={profileImage}
              alt="Pedro Henrique"
              className="rounded-lg w-full h-full object-cover"
              style={{ height: '465px' }}
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
          <div className="text-gray-400 mb-12 max-w-4xl w-full mx-auto text-justify">
  Tenho experiência prática com tecnologias essenciais do desenvolvimento web, como PHP, HTML5, CSS3 e JavaScript, além de frameworks e ferramentas como Laravel, React, Tailwind CSS, TypeScript e FlutterFlow. Também utilizo GitHub para controle de versão e colaboração em projetos. Essas habilidades me permitem criar aplicações web modernas, responsivas e bem estruturadas, oferecendo soluções eficientes e personalizadas para diferentes tipos de projetos, desde páginas simples até sistemas mais robustos.
</div>
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