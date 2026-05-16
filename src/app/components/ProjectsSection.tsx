import { motion, } from "motion/react";
import { ExternalLink, Clock, Badge } from "lucide-react";
import german from "../../imports/german_crosswords.jpg"
import ai from "../../imports/ai.jpg"
import akademia from "../../imports/akademia.jpg"
import muzeum from "../../imports/muzeum.jpg"
import oca from "../../imports/oca.jpg"
import ebiura from "../../imports/ebiura.jpg"

// Badge variants — dodaj tu nowe typy jeśli pojawią się kolejne
const BADGE_STYLES = {
  "W realizacji": "bg-emerald-500/20 border-emerald-400/40 text-emerald-300",
  "MVP":               "bg-amber-500/20  border-amber-400/40  text-amber-300",
};

const projects = [
  {
    title: "German Crosswords",
    description: "Interactive learning platform",
    image: german,
    tags: ["Java", "spring boot", "REST Api"],
    gradient: "from-blue-500/30 to-cyan-500/30",
    link: "https://germancrosswords.lukaszkepa.pl/",
    badge: "MVP",
  },
  {
    title: "Interaktywne muzeum w Białej",
    description: "System sterujący kioskami wspierającymi zwiedzanie",
    image: muzeum,
    tags: ["Python", "Ubuntu"],
    gradient: "from-violet-500/30 to-purple-500/30",
    status: "realizowane",
    badge: "W realizacji"
  },
  {
    title: "Asystent teamleda AI",
    description: "Praca inżynierska",
    image: ai,
    tags: ["Herbert", "ML",],
    gradient: "from-fuchsia-500/30 to-pink-500/30",
    status: "realizowane",
    badge: "W realizacji"
  },
  {
    title: "Akademia przedszkolaka",
    description: "Strona zgodna z wymaganiami i duchem WCAG2.2",
    image: akademia,
    tags: ["WCAG 2.2", "Wordpress"],
    gradient: "from-emerald-500/30 to-teal-500/30",
    link: "https://akademiaprzedszkolakasiewierz.pl/",
  },
  {
    title: "E-biura opole",
    description: "Projekt i wdrożenie cyfrowej platformy wizerunkowej dla e-biura.",
    image: ebiura,
    tags: ["Wordpress"],
    gradient: "from-orange-500/30 to-amber-500/30",
    link: "https://e-biura.opole.pl/",
  },
  {
    title: "Orzeł Ciszowski Adwokaci",
    description: "Projekt i wdrożenie cyfrowej platformy wizerunkowej dla kancelarii prawnej.",
    image: oca,
    tags: [],
    gradient: "from-rose-500/30 to-red-500/30",
    status: "realizowane",
    badge: "W realizacji"
  }
];
// Zamień całą funkcję CardWrapper na to:

interface CardWrapperProps {
  link?: string;
  status?: string;
  className?: string;
  children: React.ReactNode;
}

function CardWrapper({ link, status, className, children }: CardWrapperProps) {
  const isClickable = link && status !== "w trakcie realizacji";

  if (isClickable) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return <div className={className}>{children}</div>;
}

export default function ProjectsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0520] via-[#1a0b2e] to-[#0a0015]">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-violet-600/20 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-4">
            Moje <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Projekty</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-violet-200/70 italic font-serif">Coś co robię, bo lubię</p>
        </motion.div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const isClickable = project.link && project.status !== "realizowane";
            const isInProgress = project.status === "realizowane";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                className={`group relative ${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 3 === 2 ? 'lg:mt-32' : ''}`}
              >
                <CardWrapper
                  link={project.link}
                  status={project.status}
                  className={`block ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {/* Glass Card */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(139,92,246,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.6)]">

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Ikona w rogu — ExternalLink lub Clock dla "realizowane" */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {isInProgress
                          ? <Clock className="w-6 h-6 text-violet-300" />
                          : <ExternalLink className="w-6 h-6 text-white" />
                        }
                      </div>

                      {/* Badge "realizowane" w lewym górnym rogu */}
                      {(isInProgress || project.badge === "MVP") && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/80 border border-violet-400/80 text-violet-200 backdrop-blur-sm">
                            {project.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-violet-200/70">{project.description}</p>

                      {/* Tagi */}
                      <div className="flex flex-wrap gap-2">
                        {/* Specjalny badge (MVP / aktywnie rozwijane itp.) */}
                        {project.badge && (
                          <span className={`px-3 py-1 text-xs font-semibold border rounded-full backdrop-blur-sm ${BADGE_STYLES[project.badge] ?? "bg-white/10 border-white/20 text-white"}`}>
                            {project.badge}
                          </span>
                        )}

                        {/* Zwykłe tagi technologiczne */}
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-violet-200/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specular Edge */}
                    <div className="absolute inset-0 rounded-[2rem] pointer-events-none">
                      <div className="absolute inset-0 rounded-[2rem] border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5)' }} />
                    </div>
                  </div>

                  {/* External Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}