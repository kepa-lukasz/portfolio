import { motion } from "motion/react";
import { Award } from "lucide-react";
import { Users, Accessibility, TrendingUp, Puzzle, GraduationCap, Building2 } from "lucide-react";

const skills = [
  "React", "TypeScript", "CSS & HTML", "REST Api", "WCAG",
  "JAVA", "Spring Boot", "Git Workflows", "OOP", ".NET C#"
];

const certifications = [
  {
    title: "Program Mentoringowy",
    issuer: "Akademickie Biuro Karier PO",
    description: "Półroczna praca z mentorem. Planowanie ścieżki kariery, budowanie marki osobistej i autoprezentacja na rynku pracy.",
    tags: ["Mentoring", "Kariera", "Soft skills"],
    accent: "from-violet-500 to-fuchsia-500",
    iconBg: "from-violet-500/20 to-fuchsia-500/20",
    icon: Users,
    duration: "6 miesięcy"
  },
  {
    title: "Architektura nowoczesnych systemów IT",
    issuer: "Softtronic",
    description: "mikrousługi, EDA, DDD, CQRS, Kafka, Kubernetes i świadome decyzje architektoniczne",
    tags: ["REST API", "Microservices", "kafka", "docker"],
    accent: "from-pink-500 to-rose-500",
    iconBg: "from-pink-500/20 to-rose-500/20",
    icon: Building2,
    duration: "2 dni"
  },
  {
    title: "Prowadzenie OOP w .NET C# (13–18 lat)",
    issuer: "Łukasz Kępa x Giganci programowania",
    duration: "9 miesięcy",
    description: "Prowadzenie zajęć stacjonarnych z programowania obiektowego w C#. Praca z młodzieżą, tłumaczenie abstrakcyjnych konceptów w przystępny sposób.",
    tags: [".NET C#", "OOP"],
    accent: "from-cyan-500 to-blue-500",
    iconBg: "from-cyan-500/20 to-blue-500/20",
    icon: GraduationCap,
  },
  {
    title: "Frontend & WCAG 2.2",
    issuer: "CG2 Training",
    description: "Standardy dostępności WCAG 2.2 w praktyce — semantic HTML, role ARIA, kontrast kolorów, nawigacja klawiaturą, czytniki ekranu.",
    tags: ["WCAG 2.2", "ARIA", "Dostępność"],
    accent: "from-emerald-500 to-teal-500",
    iconBg: "from-emerald-500/20 to-teal-500/20",
    icon: Accessibility,

    duration: "1 dzień"
  },
  {
    title: "SE(O)krety sukcesu",
    issuer: "Świat SEO",
    description: "Pozycjonowanie stron, aspekty google crawlera, linkowanie wewnętrzne, analiza słów kluczowych i Google Search Console.",
    tags: ["SEO"],
    accent: "from-amber-500 to-orange-500",
    iconBg: "from-amber-500/20 to-orange-500/20",
    icon: TrendingUp,
    duration: "1 dzień"
  },

];

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0520] via-[#0a0015] to-[#1a0b2e]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Award className="w-8 h-8 text-fuchsia-400" />
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Skills &{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>
        </motion.div>



        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full rounded-[1.5rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_00px_30px_rgba(139,92,246,0.4)]">

                {/* Accent bar na górze */}
                <div className={`h-1 w-full bg-gradient-to-r ${cert.accent}`} />

                <div className="p-6">
                  {/* Ikona + tytuł */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.iconBg} border border-white/10 flex items-center justify-center text-xl flex-shrink-0`}>
                      <cert.icon className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs text-violet-300/70">{cert.issuer}</p>
                        {cert.duration && (
                          <>
                            <span className="text-violet-300/30 text-xs">·</span>
                            <p className="text-xs text-violet-300/50">{cert.duration}</p>
                          </>
                        )}
                      </div>                    </div>
                  </div>

                  {/* Opis */}
                  <p className="text-sm text-violet-200/70 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Tagi */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-violet-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specular */}
                <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4)" }} />
              </div>

              {/* External glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-0 group-hover:opacity-10 rounded-[1.5rem] blur-2xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 mb-16 flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="group relative"
            >
              <div className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_4px_16px_rgba(139,92,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:shadow-[0_6px_24px_rgba(139,92,246,0.5)]">
                <span className="text-sm font-medium text-violet-200 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}