import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "IT Administrator",
    company: "5 Żywiołów",
    period: "2025 – teraz",
    startYear: 2025,
    description: "Obsługa eventów, praca z klientem, tworzenie oprogramowania dla klientów instytucjonalnych",
  },
  {
    type: "work",
    title: "Trener Programowania",
    company: "Giganci programowania",
    period: "2023 – 2025",
    startYear: 2023,
    description: "Prowadzenie zajęć stacjonarnych obejmujących OOP, .NET C#",
  },
  {
    type: "work",
    title: "Junior Frontend Developer",
    company: "Techsquare Wrocław",
    period: "2023 – 2024",
    startYear: 2023,
    description: "Projekt i realizacja aplikacji internetowych w React i Angular w oparciu o metodykę zwinną Scrum.",
  },
  {
    type: "education",
    title: "Technik Informatyk & programista",
    company: "Elektryczniak Opole",
    period: "2019 – 2023",
    startYear: 2019,
    description: "Najlepsze technikum na opolszczyźnie",
  },
  {
    type: "education",
    title: "Studia inż. Informatyki",
    company: "Politechnika Opolska",
    period: "2023 – 2027",
    startYear: 2019,
    description: "Zdobywanie wiedzy i twardych umiejętności, w lutym 2027 tytuł inżyniera",
  },
];

// Sortowanie: starsze na koniec listy → flex-col-reverse wyrzuca je na dół
const workItems = experiences
  .filter((e) => e.type === "work")
  .sort((a, b) => b.startYear - a.startYear);

const eduItems = experiences
  .filter((e) => e.type === "education")
  .sort((a, b) => b.startYear - a.startYear);

interface ExperienceCardProps {
  exp: (typeof experiences)[number];
  align: "left" | "right";
  index: number;
}

function ExperienceCard({ exp, align, index }: ExperienceCardProps) {
  const isWork = exp.type === "work";
  const dotColor = isWork
    ? "from-violet-400 to-fuchsia-400"
    : "from-cyan-400 to-blue-400";
  const glowColor = isWork
    ? "from-violet-500/30 to-fuchsia-500/30"
    : "from-cyan-500/30 to-blue-500/30";
  const iconBg = isWork
    ? "from-violet-500/20 to-fuchsia-500/20"
    : "from-cyan-500/20 to-blue-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative "
    >
      {/* Dot na krawędzi karty przy linii */}
      <div
        className={`absolute top-8 ${align === "left" ? "-right-[1.85rem]" : "-left-[1.85rem]"
          } z-10 flex items-center justify-center`}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.25 }}
          className="relative w-5 h-5"
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${dotColor} blur-sm animate-pulse`}
          />
          <div
            className={`relative w-full h-full rounded-full bg-gradient-to-r ${dotColor}`}
          />
        </motion.div>
      </div>

      {/* Karta */}
      <div className="relative">
        <div
          className={`relative p-5 sm:p-7 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-white/5
            backdrop-blur-xl border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]
            transition-all duration-500
            hover:shadow-[0_30px_80px_rgba(139,92,246,0.5)] hover:scale-[1.03]
            ${align === "left" ? "text-right" : "text-left"}`}
        >
          {/* Ikona */}
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl
              bg-gradient-to-br ${iconBg} backdrop-blur-xl border border-white/20
              mb-4 shadow-[0_8px_16px_rgba(0,0,0,0.2)]
              ${align === "left" ? "ml-auto" : ""}`}
          >
            {isWork ? (
              <Briefcase className="w-6 h-6 text-violet-300" />
            ) : (
              <GraduationCap className="w-6 h-6 text-cyan-300" />
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            {exp.title}
          </h3>
          <p className="text-base text-violet-300 mb-1">{exp.company}</p>
          <p className="text-xs text-cyan-400/80 mb-3 font-mono">{exp.period}</p>
          <p className="text-sm text-violet-200/70 leading-relaxed">
            {exp.description}
          </p>

          {/* Specular */}
          <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none">
            <div
              className="absolute inset-0 rounded-[1.5rem] border border-white/20
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4)" }}
            />
          </div>
        </div>

        {/* External glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${glowColor}
            rounded-[1.5rem] blur-2xl opacity-0 group-hover:opacity-40
            transition-opacity duration-500 -z-10`}
        />
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0b2e] to-[#0f0520]">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Tytuł */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20 text-center"
        >
           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Edukacja i <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent italic font-serif">doświadczenie</span>
          </h2>
        </motion.div>

        {/* ──── GŁÓWNY LAYOUT ──── */}
        <div className="relative flex flex-wrap gap-0 items-stretch">

          {/* PRACA – lewa kolumna */}
          <div className="flex-1 flex flex-col-reverse flex-wrap gap-10 pr-8 md:pr-12">
            {workItems.reverse().map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} align="left" index={i} />
            ))}
            {/* Etykieta kolumny */}
            <div className="text-center mb-4">
              <span className="px-4 py-1 text-xs font-mono tracking-widest text-violet-300/60 border border-violet-500/20 rounded-full">
                praca
              </span>
            </div>
          </div>

          {/* LINIA ŚRODKOWA */}
          <div className="hidden sm:block  relative flex flex-col items-center flex-shrink-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 opacity-20 blur-[2px]" />
            <div
              className="h-100% absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            />
          </div>

          {/* EDUKACJA – prawa kolumna */}
          <div className=" flex-1 flex flex-col-reverse gap-10 pl-8 sm:pl-12">

           
            {eduItems.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} align="right" index={i} />
            ))}
            {/* Etykieta kolumny */}

            <div className="text-center mb-4">

              <span className="px-4 py-1 text-xs font-mono tracking-widest text-cyan-300/60 border border-cyan-500/20 rounded-full">
                edukacja
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}