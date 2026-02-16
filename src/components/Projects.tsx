import { motion } from 'framer-motion';
import { useState } from 'react';
import gestaoComercioImg from '../assets/img/gestao-comercio.png';

interface Project {
  title: string;
  image: string;
  categories: string[];
  description: string;
  technologies: string[];
  link: string;
  details?: string;
  howToRun?: {
    prerequisites: string[];
    backend: string[];
    frontend: string[];
  };
}

const projects: Project[] = [
  {
    title: "EscapeAway Journey",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    categories: ["Portal de Viagens"],
    description: "O EscapeAway é o seu portal completo para planejar viagens inesquecíveis! Encontre destinos turísticos, opções de hospedagem e pacotes promocionais.\n\nObs: Este projeto foi desenvolvido com a ajuda de inteligência artificial.",
    technologies: ["react", "typescript", "tailwindcss"],
    link: "https://projeto-escapeaway-journey.netlify.app"
  },
  {
    title: "Gestão de Comércio - Sistema Completo",
    image: gestaoComercioImg,
    categories: ["Sistema Comercial", "Fullstack"],
    description:
      "Sistema completo de gestão comercial com frontend em React/TypeScript e backend em Node.js/Express, permitindo administrar empresas, produtos, clientes e pedidos com autenticação JWT e dashboard completo.",
    technologies: ["react", "typescript", "nodejs"],
    link: "https://github.com/PedroDantas14/gestao-de-comercio",
    details:
      "O sistema de Gestão de Comércio foi desenvolvido com arquitetura moderna, separando frontend e backend. Ele oferece autenticação JWT, gestão completa de empresas, produtos, clientes e pedidos, além de um dashboard com métricas em tempo real como faturamento, quantidade de pedidos e indicadores de estoque.",
    howToRun: {
      prerequisites: [
        "Node.js (versão 14 ou superior) instalado",
        "MongoDB (local ou Atlas) configurado e em execução"
      ],
      backend: [
        "Navegue até a pasta `backend`",
        "Instale as dependências: `npm install`",
        "Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente (URL do MongoDB, JWT_SECRET, etc.)",
        "Opcional: execute `node scripts/migracao-usuario.js` para associar dados existentes aos usuários",
        "Inicie o servidor: `npm run dev` (API disponível em `http://localhost:3000`)"
      ],
      frontend: [
        "Navegue até a pasta `frontend`",
        "Instale as dependências: `npm install`",
        "Inicie o servidor de desenvolvimento: `npm run dev`",
        "Acesse o frontend em `http://localhost:5174` e faça login/cadastro para começar a usar o sistema"
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map(category => (
                    <span
                      key={category}
                      className="text-blue-500 text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 mb-6 whitespace-pre-line">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="inline-block"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                        alt={tech}
                        className="w-6 h-6"
                      />
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {project.link.includes("github.com") ? "VER NO GITHUB" : "ACESSE O SITE"}
                  </a>

                  {project.howToRun && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500/10 transition-colors text-sm"
                    >
                      COMO EXECUTAR / DETALHES
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="relative bg-zinc-900 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 border border-zinc-800">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 text-zinc-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-blue-400 mb-4">
                Projeto fullstack com frontend e backend separados. Siga o passo a passo abaixo para rodar localmente.
              </p>

              {selectedProject.details && (
                <p className="text-gray-300 mb-6 whitespace-pre-line">
                  {selectedProject.details}
                </p>
              )}

              {selectedProject.howToRun && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pré-requisitos</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {selectedProject.howToRun.prerequisites.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Backend</h4>
                      <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1">
                        {selectedProject.howToRun.backend.map(step => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Frontend</h4>
                      <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1">
                        {selectedProject.howToRun.frontend.map(step => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-col md:flex-row gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  ABRIR NO GITHUB
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 text-center border border-zinc-600 text-zinc-300 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-sm"
                >
                  FECHAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}