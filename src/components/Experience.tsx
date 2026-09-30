import { motion } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  period: string;
  link?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Rius Soluções e Tecnologia",
    role: "Desenvolvedor Full Stack Júnior",
    period: "Jul 2025 – Atual",
    link: "https://riustecnologia.com.br/",
    summary:
      "Desenvolvimento e manutenção dos sistemas de gestão da Rius, como o Venda+ e o VenderGás, usados por empresas em todo o Brasil, e das aplicações para terminais de pagamento.",
    highlights: [
      "Desenvolvimento e manutenção dos sistemas VenderGás (revendas de gás e água) e Venda+, com novas funcionalidades, melhorias e correções em Angular, React, Node.js e TypeScript.",
      "Desenvolvimento do site institucional da Rius em React e TypeScript.",
      "Integração da API do iFood ao Venda+, conectando os pedidos da plataforma ao sistema.",
      "Aplicações para terminais de pagamento (POS) em Kotlin no projeto Rius POS, integradas aos dispositivos Cielo, Rede (Itaú) e Stone.",
      "APIs REST em arquitetura MVC e integrações com serviços externos, como meios de pagamento e plataformas de terceiros.",
      "Deploy e gerenciamento de versões com Firebase, com versionamento e colaboração via Git e GitHub.",
    ],
    technologies: ["Angular", "React", "TypeScript", "Node.js", "Kotlin", "Jetpack Compose", "MongoDB", "Firebase", "Git"],
  },
  {
    company: "DF Informática",
    role: "Desenvolvedor Júnior",
    period: "2 anos",
    summary:
      "Desenvolvimento de aplicações web e mobile para clientes, do banco de dados ao deploy em produção.",
    highlights: [
      "Aplicações web com PHP, Laravel, React e TypeScript seguindo arquitetura MVC.",
      "Interfaces responsivas com JavaScript, HTML5 e CSS3.",
      "Aplicações mobile com FlutterFlow e modelagem de bancos de dados MySQL.",
      "Correção de bugs, refatoração e otimização de performance de sistemas em produção.",
      "Deploy e gerenciamento de aplicações em Hostinger e KingHost, com versionamento via Git/GitHub.",
    ],
    technologies: ["PHP", "Laravel", "React", "TypeScript", "JavaScript", "FlutterFlow", "MySQL", "Git"],
  },
];

const education = [
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Estácio",
    status: "Concluído",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 text-xl mb-4">Minha trajetória</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold">EXPERIÊNCIA</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto border-l-2 border-blue-500/40 pl-8 space-y-12">
          {experiences.map((experience) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black" />

              <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-white text-2xl font-bold">{experience.role}</h4>
                    {experience.link ? (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <span className="text-blue-400">{experience.company}</span>
                    )}
                  </div>
                  <span className="text-sm text-zinc-400 border border-zinc-700 rounded-full px-4 py-1 self-start md:self-auto">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{experience.summary}</p>

                <ul className="space-y-2 mb-6">
                  {experience.highlights.map(item => (
                    <li key={item} className="flex gap-3 text-gray-400">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h4 className="text-blue-500 text-2xl mb-6">Formação</h4>
          {education.map(item => (
            <div
              key={item.course}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-zinc-900/60 rounded-xl p-6 border border-zinc-800"
            >
              <div>
                <p className="text-white text-lg font-semibold">{item.course}</p>
                <p className="text-gray-400">{item.institution}</p>
              </div>
              <span className="text-sm text-zinc-400 border border-zinc-700 rounded-full px-4 py-1 self-start md:self-auto">
                {item.status}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
