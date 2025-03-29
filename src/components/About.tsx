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
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://devicon-website.vercel.app/api/laravel/plain.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
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
            Sou desenvolvedor Full Stack com dois anos de experiência na área de tecnologia. Minha trajetória começou no suporte técnico, onde tive a oportunidade de desenvolver minhas habilidades e, com o tempo, evoluí para a programação.

Sou formado em Análise e Desenvolvimento de Sistemas e atualmente sou estagiário na DF Informática, onde adquiri experiência prática com diversas linguagens e tecnologias. Sempre em busca de aprimoramento, estou estudando Java para expandir meus conhecimentos e continuar evoluindo na carreira.
            </p>
            <p className="text-gray-400">
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
          <p className="text-gray-400 mb-12 max-w-3xl text-justify">
          Front-end: Possuo experiência avançada com HTML e CSS, garantindo interfaces responsivas e bem estruturadas. Além disso, utilizo JavaScript para tornar as aplicações mais dinâmicas e interativas. Tenho conhecimentos básicos em React, o que me permite criar componentes reutilizáveis e escaláveis.

Back-end: Desenvolvo aplicações utilizando PHP, linguagem na qual tenho experiência avançada. Também possuo conhecimentos em Laravel, que facilita a criação de sistemas robustos e bem estruturados. Além disso, já trabalhei com Node.js, ampliando minha capacidade de desenvolvimento para o lado do servidor.

Criação de Aplicativos: Utilizo o FlutterFlow para desenvolver aplicativos móveis de forma eficiente, explorando a praticidade da ferramenta para criar experiências fluidas e intuitiva
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