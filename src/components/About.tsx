import { motion } from 'framer-motion';
import { Briefcase, CreditCard, FileDown, GraduationCap, MapPin, MessageCircle, Monitor, Webhook } from 'lucide-react';
import profileImage from '../assets/img/pedro.webp';
import { perfil } from '../data/perfil';

const stats = [
  { value: "+3", label: "anos desenvolvendo software" },
  { value: "2", label: "sistemas de gestão em produção" },
  { value: "3", label: "adquirentes POS integradas" },
];

const services = [
  {
    icon: Monitor,
    title: "Sistemas web",
    description: "Aplicações de gestão com Angular, React e Node.js, do front-end à API.",
  },
  {
    icon: Webhook,
    title: "Integrações & APIs",
    description: "APIs REST e integrações com plataformas como iFood e meios de pagamento.",
  },
  {
    icon: CreditCard,
    title: "Terminais de pagamento",
    description: "Aplicações Android em Kotlin para maquininhas Cielo, Rede e Stone.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 text-xl mb-4">Conheça um pouco</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold">SOBRE MIM</h3>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm mx-auto"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/40 via-blue-500/5 to-transparent blur-2xl" />
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-blue-500/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-800">
              <img
                src={profileImage}
                alt="Pedro Henrique"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-left-6 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur px-4 py-3 shadow-xl whitespace-nowrap">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Atualmente na Rius Tecnologia</p>
                <p className="text-zinc-400 text-xs">Desenvolvedor Full Stack</p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 lg:mt-0"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Olá, me chamo <span className="text-blue-500">Pedro Henrique</span>
            </h2>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 mb-6">
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-blue-500" />Brasília – DF</span>
              <span className="inline-flex items-center gap-2"><Briefcase size={16} className="text-blue-500" />Rius Tecnologia</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-blue-500" />Análise e Desenvolvimento de Sistemas</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Sou Desenvolvedor Full Stack e hoje desenvolvo e mantenho os sistemas de gestão
              <strong className="text-white font-medium"> Venda+</strong> e
              <strong className="text-white font-medium"> VenderGás</strong>, usados por empresas em todo o Brasil,
              além de integrações como a do iFood e aplicações para terminais de pagamento.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Antes, atuei por 2 anos na DF Informática com PHP, Laravel, React e FlutterFlow. Gosto de
              participar de todo o ciclo do projeto, do requisito ao deploy, com foco em qualidade e em
              entregar valor real para o negócio.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map(stat => (
                <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-blue-500">{stat.value}</p>
                  <p className="text-xs md:text-sm text-zinc-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {perfil.curriculo && (
                <a
                  href={perfil.curriculo}
                  download
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FileDown size={18} />
                  Baixar currículo
                </a>
              )}
              <a
                href={perfil.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-zinc-600 text-white px-6 py-3 rounded-full hover:border-white transition-colors"
              >
                <MessageCircle size={18} />
                Fale comigo
              </a>
            </div>
          </motion.div>
        </div>

        {/* O que eu faço */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                <Icon size={24} />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
