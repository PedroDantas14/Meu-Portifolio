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
    title: "Copfy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    categories: ["Blog", "E-Commerce", "Institucional"],
    description: "Portal completo que reúne um blog informativo, uma plataforma de vendas online e um diretório de serviços, tudo em um único ambiente.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "#"
  },
  {
    title: "Helo Fernandes",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2670&auto=format&fit=crop",
    categories: ["E-Commerce"],
    description: "Desenvolvido como uma joalheria online, este site exibe as joias elegantes de Helo Fernandes, oferecendo uma experiência de compra luxuosa e intuitiva.",
    technologies: ["HTML", "CSS", "JavaScript", "Wix"],
    link: "#"
  },
  {
    title: "Freelancer de Sucesso",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    categories: ["Landing Page"],
    description: "Este site fornece recursos essenciais e guias práticos para freelancers, oferecendo uma experiência enriquecedora e motivadora para alcançar a liberdade profissional.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#"
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