import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import profileImage from "../../imports/cv_Zdjecie.jpg"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#1a0b2e] to-[#0f0520]">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/30 via-purple-600/40 to-fuchsia-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 via-indigo-600/40 to-violet-600/30 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-purple-500/20 rounded-full blur-[140px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Floating Glass Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6 sm:space-y-8"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Cześć, jestem <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Łukasz
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-200/90 italic font-serif max-w-2xl"
            >
              Fullstack developer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group relative px-6 sm:px-10 py-4 sm:py-5 rounded-full overflow-hidden">
              {/* Glass Pill Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(139,92,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              {/* Content */}
              <a href="#contact">

                <span className="relative flex items-center gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-semibold text-white">
                  Napisz do mnie
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </button>
          </motion.div>
        </motion.div>

        {/* Profile Photo with Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative flex-1 max-w-md lg:max-w-2xl w-full"
        >
          <div className="relative">
            {/* Main Glass Frame with Photo */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_20px_80px_rgba(139,92,246,0.5),inset_0_2px_2px_rgba(255,255,255,0.3)] p-4 sm:p-8 transform rotate-3">
              {/* Photo with dark overlay for integration */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay to blend with theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-fuchsia-900/40 mix-blend-multiply" />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                {/* Inner glow border */}
                <div className="absolute inset-0 border-2 border-violet-400/20 rounded-2xl sm:rounded-3xl" />
              </div>
            </div>

            {/* Floating Accent Panels */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_rgba(6,182,212,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] transform -rotate-12"
            />

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_rgba(217,70,239,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] transform rotate-6"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
