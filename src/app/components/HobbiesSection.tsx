import { motion } from "motion/react";
import { Dumbbell, TentTree, Music } from "lucide-react";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Siłownia",
    description: "Polecam każdemu",
    gradient: "from-purple-500/20 to-violet-500/20",
    glowColor: "from-purple-500/30 to-violet-500/30",
    iconColor: "text-purple-300",
    rotation: "rotate-2",
    position: "lg:translate-x-12"
  },
  {
    icon: TentTree,
    title: "ZHR",
    description: "Jako aktywny instruktor ZHR ciągle się rozwijam – na co dzień zarządzam kilkuosobowym zespołem młodych dorosłych i regularnie koordynuję logistykę poważnych, często ogólnopolskich projektów",
    gradient: "from-green-500/20 to-green-500/20",
    glowColor: "from-green-500/30 to-green-500/30",
    iconColor: "text-green-300",
    rotation: "-rotate-3",
    position: "lg:-translate-x-8 lg:translate-y-16"
  },
  {
    icon: Music,
    title: "Muzyka",
    description: "Długo śpiewałem, czasem coś zagram i jak chyba każdy - dużo słucham",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    glowColor: "from-fuchsia-500/30 to-pink-500/30",
    iconColor: "text-fuchsia-300",
    rotation: "rotate-1",
    position: "lg:translate-x-20 lg:translate-y-8"
  }
];

export default function HobbiesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#0f0520] to-[#0a0015]">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-fuchsia-600/20 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Poza <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent italic font-serif">programowaniem</span>
          </h2>
        </motion.div>

        {/* Scattered Glass Cards */}
        <div className="relative flex flex-wrap justify-center items-center gap-8 lg:gap-0">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: parseInt(hobby.rotation.match(/-?\d+/)?.[0] || '0') }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                rotate: parseInt(hobby.rotation.match(/-?\d+/)?.[0] || '0') * 1.5,
                transition: { duration: 0.3 }
              }}
              className={`group relative ${hobby.position}`}
            >
              {/* Glass Card - Middle one (index 1) is bigger */}
              <div className={`relative w-full ${index === 1 ? 'max-w-md sm:max-w-lg lg:w-96' : 'max-w-sm sm:max-w-md lg:w-80'} ${index === 1 ? 'p-8 sm:p-10' : 'p-6 sm:p-8'} rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${hobby.gradient} backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_2px_2px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.6)] ${hobby.rotation}`}>
                {/* 3D Icon Container */}
                <div className={`relative inline-flex items-center justify-center ${index === 1 ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16 sm:w-20 sm:h-20'} mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${hobby.gradient} backdrop-blur-xl border border-white/30 shadow-[0_12px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)]`}>
                  <hobby.icon className={`${index === 1 ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-8 h-8 sm:w-10 sm:h-10'} ${hobby.iconColor}`} />

                  {/* Inner Glow */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${hobby.glowColor} blur-lg opacity-50`} />
                </div>

                {/* Content */}
                <h3 className={`${index === 1 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} font-bold text-white mb-2 sm:mb-3 leading-tight`}>
                  {hobby.title}
                </h3>
                <p className={`${index === 1 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} text-violet-200/80 leading-relaxed`}>
                  {hobby.description}
                </p>

                {/* Specular Highlight */}
                <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none">
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5)' }} />
                </div>
              </div>

              {/* External Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.glowColor} rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
