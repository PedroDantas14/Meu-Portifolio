import { motion } from 'framer-motion';
import { useState } from 'react';
import gestaoComercioImg from '../assets/img/gestao-comercio.webp';
import riusTecnologiaImg from '../assets/img/rius-tecnologia.webp';
import vendergasImg from '../assets/img/vendergas.webp';

interface Project {
  title: string;
  image: string;
  categories: string[];
  description: string;
  technologies: string[];
  link: string;
  details?: string;
  contributions?: string[];
  howToRun?: {
    prerequisites: string[];
    backend: string[];
    frontend: string[];
  };
}

const isGithub = (link: string) => link.includes("github.com");

const projects: Project[] = [
  {
    title: "Vendergás - Sistema para Revendas de Gás",
    image: vendergasImg,
    categories: ["Sistema Comercial", "Profissional"],
    description:
      "Sistema 100% cloud para revendas de gás e água: controle financeiro, estoque, entregas e vendas, multi lojas, emissão de CTe/MDFe, mapa de calor de vendas e aplicativo do entregador integrado às maquininhas Stone e Cielo.",
    technologies: ["angular", "nodejs", "typescript", "kotlin"],
    link: "https://vendergas.com.br/",
    contributions: [
      "Novas funcionalidades, melhorias e correções no sistema web (Angular + Node.js) de vendas, estoque, entregas e financeiro das revendas",
      "Aplicativo do entregador para maquininhas de pagamento em Kotlin + Jetpack Compose, com pagamento integrado e emissão/reimpressão de NFC-e",
      "Fluxos de venda específicos de revendas de gás e água no aplicativo, como fiado, pagamento misto e venda antecipada",
      "APIs REST em Node.js que integram o sistema web, o aplicativo e os serviços de pagamento"
    ]
  },
  {
    title: "Rius Soluções e Tecnologia",
    image: riusTecnologiaImg,
    categories: ["Site Institucional", "Venda+", "Profissional"],
    description:
      "Site institucional da Rius Tecnologia, que desenvolvi em React e TypeScript, e trabalho no ecossistema de gestão da empresa: sistema Venda+, integração com o iFood e aplicações Rius POS para maquininhas Cielo, Rede e Stone.",
    technologies: ["react", "typescript", "angular", "nodejs", "kotlin"],
    link: "https://riustecnologia.com.br/",
    contributions: [
      "Desenvolvimento do site institucional da empresa em React e TypeScript",
      "Novas funcionalidades, melhorias e correções no sistema de gestão Venda+",
      "Integração da API do iFood ao Venda+, conectando os pedidos da plataforma ao sistema",
      "Aplicações Rius POS em Kotlin para terminais de pagamento Cielo, Rede (Itaú) e Stone",
      "Integrações com serviços externos, como meios de pagamento e WhatsApp"
    ]
  },
  {
    title: "Gestão Financeira Pessoal",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    categories: ["Finanças", "Fullstack"],
    description:
      "Aplicação fullstack para controle de gastos e receitas com API REST em Java/Spring Boot e frontend em React/TypeScript: categorias, transações, dashboard, relatórios mensais e exportação em PDF e Excel.",
    technologies: ["java", "spring", "postgresql", "react", "typescript"],
    link: "https://github.com/PedroDantas14/GestaoFinanceira",
    details:
      "A API foi construída com Spring Boot 3, Spring Data JPA/Hibernate e PostgreSQL (ou H2 em memória no perfil dev), autenticação JWT e documentação interativa via Swagger (OpenAPI 3). O relatório mensal traz totais de entradas, saídas, saldo e resumo por categoria, com exportação em PDF (OpenPDF) e Excel (Apache POI). O frontend em React + TypeScript (Vite) consome a API com Axios, possui rotas protegidas e gráficos com Recharts.",
    howToRun: {
      prerequisites: [
        "Java 17 ou superior (recomendado: 21) e Maven 3.8+",
        "Node.js 18+ e npm",
        "PostgreSQL com o banco `gestao_financeira` criado (opcional: usar H2 em memória com o perfil `dev`)"
      ],
      backend: [
        "Navegue até a pasta `gestao-financeira`",
        "Configure usuário e senha do banco em `src/main/resources/application.properties`",
        "Compile o projeto: `mvn clean package`",
        "Inicie a API: `mvn spring-boot:run` (ou `mvn spring-boot:run -Dspring-boot.run.profiles=dev` para usar H2)",
        "API disponível em `http://localhost:8080` e Swagger em `http://localhost:8080/swagger-ui.html`"
      ],
      frontend: [
        "Navegue até a pasta `gestao-financeira/frontend`",
        "Instale as dependências: `npm install`",
        "Inicie o servidor de desenvolvimento: `npm run dev`",
        "Acesse `http://localhost:3000` e faça cadastro/login para começar a usar o sistema"
      ]
    }
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
  },
  {
    title: "EscapeAway Journey",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    categories: ["Portal de Viagens"],
    description: "O EscapeAway é o seu portal completo para planejar viagens inesquecíveis! Encontre destinos turísticos, opções de hospedagem e pacotes promocionais.\n\nObs: Este projeto foi desenvolvido com a ajuda de inteligência artificial.",
    technologies: ["react", "typescript", "tailwindcss"],
    link: "https://projeto-escapeaway-journey.netlify.app"
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
                  loading="lazy"
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
                    {isGithub(project.link) ? "VER NO GITHUB" : "ACESSE O SITE"}
                  </a>

                  {(project.howToRun || project.contributions) && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500/10 transition-colors text-sm"
                    >
                      {project.howToRun ? "COMO EXECUTAR / DETALHES" : "MINHAS CONTRIBUIÇÕES"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              className="relative bg-zinc-900 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 border border-zinc-800"
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 text-zinc-400 hover:text-white"
                aria-label="Fechar"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-blue-400 mb-4">
                {selectedProject.howToRun
                  ? "Projeto fullstack com frontend e backend separados. Siga o passo a passo abaixo para rodar localmente."
                  : "Projeto profissional desenvolvido na Rius Tecnologia. Veja abaixo algumas das minhas contribuições."}
              </p>

              {selectedProject.details && (
                <p className="text-gray-300 mb-6 whitespace-pre-line">
                  {selectedProject.details}
                </p>
              )}

              {selectedProject.contributions && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Minhas contribuições</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                    {selectedProject.contributions.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
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
                  {isGithub(selectedProject.link) ? "ABRIR NO GITHUB" : "ACESSAR O SITE"}
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