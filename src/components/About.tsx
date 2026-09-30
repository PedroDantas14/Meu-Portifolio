import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/img/pedro.webp';

interface Skill {
  name: string;
  icon?: string;
  // Ícones escuros que somem no fundo preto (ex.: Next.js)
  invert?: boolean;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML5", icon: devicon("html5/html5-original") },
      { name: "CSS3", icon: devicon("css3/css3-original") },
      { name: "SCSS", icon: devicon("sass/sass-original") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original") },
      { name: "TypeScript", icon: devicon("typescript/typescript-original") },
      { name: "Angular", icon: devicon("angular/angular-original") },
      { name: "React", icon: devicon("react/react-original") },
      { name: "Next.js", icon: devicon("nextjs/nextjs-original"), invert: true },
      { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original") },
      { name: "FlutterFlow", icon: devicon("flutter/flutter-original") },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: devicon("nodejs/nodejs-original") },
      { name: "Java", icon: devicon("java/java-original") },
      { name: "Spring Boot", icon: devicon("spring/spring-original") },
      { name: "PHP", icon: devicon("php/php-original") },
      { name: "Laravel", icon: devicon("laravel/laravel-original") },
      { name: "API REST" },
    ],
  },
  {
    title: "Mobile & Pagamentos",
    skills: [
      { name: "Kotlin", icon: devicon("kotlin/kotlin-original") },
      { name: "Android", icon: devicon("android/android-original") },
      { name: "Jetpack Compose", icon: devicon("jetpackcompose/jetpackcompose-original") },
      { name: "Electron", icon: devicon("electron/electron-original") },
      { name: "Terminais POS (Cielo, Rede, Stone)" },
    ],
  },
  {
    title: "Dados & Ferramentas",
    skills: [
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original") },
      { name: "MySQL", icon: devicon("mysql/mysql-original") },
      { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original") },
      { name: "Firebase", icon: devicon("firebase/firebase-original") },
      { name: "Git", icon: devicon("git/git-original") },
    ],
  },
];

const softSkills = [
  "Comunicação",
  "Colaboração",
  "Resolução de problemas",
  "Adaptabilidade",
  "Pontualidade",
  "Atenção aos detalhes",
  "Pensamento crítico",
  "Criatividade",
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
          <h3 className="text-white text-4xl md:text-5xl font-bold">SOBRE MIM</h3>
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
            <p className="text-gray-400 text-justify mb-4">
              Sou Desenvolvedor Full Stack na Rius Tecnologia, onde desenvolvo e mantenho os sistemas
              de gestão Venda+ e VenderGás com Angular, React, Node.js e TypeScript, integrações como a do
              iFood com o Venda+ e aplicações em Kotlin para terminais de pagamento (POS) Cielo, Rede e Stone.
              Antes, atuei por 2 anos na DF Informática com PHP, Laravel, React e FlutterFlow.
            </p>
            <p className="text-gray-400 text-justify">
              Atuo em todo o ciclo de vida dos projetos, do levantamento de requisitos e definição de
              arquitetura até a implantação e manutenção, com foco em qualidade, boas práticas e entrega
              de valor real para o negócio.
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
              style={{ height: '465px', objectPosition: '50% 20%' }}
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
          <h3 className="text-white text-4xl md:text-5xl font-bold">HABILIDADES</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <div className="text-gray-400 mb-12 max-w-4xl w-full mx-auto text-justify">
            No front-end, desenvolvo interfaces modernas e responsivas com Angular, React, Next.js,
            TypeScript, SCSS e Tailwind CSS. No back-end, construo APIs REST e regras de negócio com
            Node.js, Java/Spring Boot e PHP/Laravel. No mobile, crio aplicações Android nativas em
            Kotlin com Jetpack Compose para terminais de pagamento (POS) Cielo, Rede e Stone, além de apps
            com FlutterFlow e aplicações desktop com Electron. Para dados e deploy, utilizo MongoDB, MySQL,
            PostgreSQL, Firebase e Git/GitHub.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + index * 0.1 }}
              className="bg-zinc-900/60 rounded-xl p-6 shadow-lg border border-zinc-800"
            >
              <h4 className="text-white text-2xl font-semibold mb-4 text-center">
                {group.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => (
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
                        className={`w-10 h-10 ${skill.invert ? "invert" : ""}`}
                      />
                    )}
                    <span className="text-white text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
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
                key={skill}
                className="flex items-center text-gray-400"
              >
                <ChevronDown className="text-blue-500 mr-2 shrink-0" />
                <span>{skill}</span>
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
