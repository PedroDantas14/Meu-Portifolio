import { AnimatePresence, motion } from 'framer-motion';
import { Check, CreditCard, Webhook, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

type Category = "Front-end" | "Back-end" | "Mobile & Pagamentos" | "Dados & Ferramentas";

interface Skill {
  name: string;
  category: Category;
  icon?: string;
  // Para itens sem logo no devicon
  lucideIcon?: LucideIcon;
  // Texto menor abaixo do nome
  note?: string;
  // Stack usada no dia a dia na Rius
  daily?: boolean;
  // Ícones escuros que somem no fundo preto (ex.: Next.js)
  invert?: boolean;
}

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

const categories: Category[] = ["Front-end", "Back-end", "Mobile & Pagamentos", "Dados & Ferramentas"];

const skills: Skill[] = [
  { name: "Angular", category: "Front-end", icon: devicon("angular/angular-original"), daily: true },
  { name: "React", category: "Front-end", icon: devicon("react/react-original"), daily: true },
  { name: "TypeScript", category: "Front-end", icon: devicon("typescript/typescript-original"), daily: true },
  { name: "Next.js", category: "Front-end", icon: devicon("nextjs/nextjs-original"), invert: true },
  { name: "JavaScript", category: "Front-end", icon: devicon("javascript/javascript-original") },
  { name: "HTML5", category: "Front-end", icon: devicon("html5/html5-original") },
  { name: "CSS3", category: "Front-end", icon: devicon("css3/css3-original") },
  { name: "SCSS", category: "Front-end", icon: devicon("sass/sass-original") },
  { name: "Tailwind CSS", category: "Front-end", icon: devicon("tailwindcss/tailwindcss-original") },
  { name: "FlutterFlow", category: "Front-end", icon: devicon("flutter/flutter-original") },

  { name: "Node.js", category: "Back-end", icon: devicon("nodejs/nodejs-original"), daily: true },
  { name: "API REST", category: "Back-end", lucideIcon: Webhook, note: "Arquitetura MVC", daily: true },
  { name: "Java", category: "Back-end", icon: devicon("java/java-original") },
  { name: "Spring Boot", category: "Back-end", icon: devicon("spring/spring-original") },
  { name: "PHP", category: "Back-end", icon: devicon("php/php-original") },
  { name: "Laravel", category: "Back-end", icon: devicon("laravel/laravel-original") },

  { name: "Kotlin", category: "Mobile & Pagamentos", icon: devicon("kotlin/kotlin-original"), daily: true },
  { name: "Terminais POS", category: "Mobile & Pagamentos", lucideIcon: CreditCard, note: "Cielo, Rede e Stone", daily: true },
  { name: "Jetpack Compose", category: "Mobile & Pagamentos", icon: devicon("jetpackcompose/jetpackcompose-original") },
  { name: "Android", category: "Mobile & Pagamentos", icon: devicon("android/android-original") },
  { name: "Electron", category: "Mobile & Pagamentos", icon: devicon("electron/electron-original") },

  { name: "MongoDB", category: "Dados & Ferramentas", icon: devicon("mongodb/mongodb-original"), daily: true },
  { name: "Git", category: "Dados & Ferramentas", icon: devicon("git/git-original"), daily: true },
  { name: "Firebase", category: "Dados & Ferramentas", icon: devicon("firebase/firebase-original") },
  { name: "MySQL", category: "Dados & Ferramentas", icon: devicon("mysql/mysql-original") },
  { name: "PostgreSQL", category: "Dados & Ferramentas", icon: devicon("postgresql/postgresql-original") },
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

type Filter = "Todas" | Category;

export default function Skills() {
  const [filter, setFilter] = useState<Filter>("Todas");
  const visibleSkills = filter === "Todas" ? skills : skills.filter(skill => skill.category === filter);

  return (
    <section id="habilidades" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-blue-500 text-xl mb-4">Conheça um pouco minhas</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">HABILIDADES</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Do front-end ao terminal de pagamento: as tecnologias que uso para construir sistemas
            de ponta a ponta.
          </p>
        </motion.div>

        {/* Abas de categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-4" role="tablist" aria-label="Categorias de habilidades">
          {(["Todas", ...categories] as Filter[]).map(item => {
            const active = filter === item;
            const count = item === "Todas" ? skills.length : skills.filter(skill => skill.category === item).length;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`relative px-4 py-2 rounded-full text-sm transition-colors ${
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skills-tab"
                    className="absolute inset-0 rounded-full bg-blue-500"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {item} <span className={active ? "text-blue-100" : "text-zinc-600"}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Uso no dia a dia na Rius
        </p>

        {/* Grade de habilidades */}
        <motion.div layout className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map(skill => {
              const Icon = skill.lucideIcon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="group relative w-[calc(50%-0.5rem)] sm:w-44 flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]"
                >
                  {skill.daily && (
                    <span
                      className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                      title="Uso no dia a dia"
                    />
                  )}

                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt=""
                        loading="lazy"
                        className={`w-9 h-9 ${skill.invert ? "invert" : ""}`}
                      />
                    ) : (
                      Icon && <Icon size={30} className="text-blue-400" />
                    )}
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">{skill.name}</p>
                    <p className="text-zinc-500 text-xs mt-1">
                      {skill.note ?? (filter === "Todas" ? skill.category : " ")}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-blue-500 text-2xl mb-8">Soft skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map(skill => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-gray-300 hover:border-blue-500/60 transition-colors"
              >
                <Check size={16} className="text-blue-500" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
