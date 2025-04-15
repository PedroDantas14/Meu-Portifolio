import { motion } from 'framer-motion';

interface Project {
  title: string;
  image: string;
  categories: string[];
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
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

                <p className="text-gray-400 mb-6">{project.description}</p>

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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  ACESSE O SITE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}