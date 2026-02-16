import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/img/pedro.jpeg';

interface Skill {
  name: string;
  icon?: string;
}

interface SoftSkill {
  name: string;
}

const frontEndSkills: Skill[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FlutterFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
];

const backEndSkills: Skill[] = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "API REST" },
];

const databaseSkills: Skill[] = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
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
            <p className="text-gray-400 text-justify">
              Sou Desenvolvedor Fullstack com experiência no desenvolvimento e manutenção de aplicações web, mobile e sistemas corporativos. Atuo em todo o ciclo de vida dos projetos — desde o levantamento de requisitos e definição de arquitetura até a implantação e manutenção — sempre com foco em qualidade, escalabilidade, boas práticas e entrega de valor real ao negócio.
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
            Minhas habilidades técnicas estão organizadas em três pilares: front-end, back-end e banco de dados. No front-end, atuo com HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS e FlutterFlow para criar interfaces modernas e responsivas. No back-end, trabalho com Java, Kotlin, Spring Boot, PHP, Laravel, Node.js e APIs REST, integrando serviços e garantindo regras de negócio bem definidas. Para persistência de dados, utilizo bancos como MongoDB, MySQL e PostgreSQL, construindo aplicações escaláveis, seguras e bem estruturadas de ponta a ponta.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/60 rounded-xl p-6 shadow-lg border border-zinc-800"
          >
            <h4 className="text-white text-2xl font-semibold mb-4 text-center">
              Front-end
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {frontEndSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  )}
                  <span className="text-white text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900/60 rounded-xl p-6 shadow-lg border border-zinc-800"
          >
            <h4 className="text-white text-2xl font-semibold mb-4 text-center">
              Back-end
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {backEndSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center justify-center gap-2 ${
                    !skill.icon ? "col-span-2 mt-2" : ""
                  }`}
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  )}
                  <span className="text-white text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/60 rounded-xl p-6 shadow-lg border border-zinc-800"
          >
            <h4 className="text-white text-2xl font-semibold mb-4 text-center">
              Banco de Dados
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {databaseSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  )}
                  <span className="text-white text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
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