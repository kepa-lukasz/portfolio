import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0b2e] to-[#000000]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[75vh] bg-gradient-to-r from-violet-600/30 via-fuchsia-600/40 to-purple-600/30 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Massive Glass CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Glass Container */}
          <div className="relative p-8 sm:p-12 lg:p-20 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_30px_100px_rgba(139,92,246,0.6),inset_0_2px_4px_rgba(255,255,255,0.3)] overflow-hidden">
            {/* Floating Gradient Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative text-center space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-none">
                  Stwórzmy coś
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    niesamowitego
                  </span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-200/80 italic font-serif max-w-2xl mx-auto px-4">
                  Jestem otwarty na ciekawe projekty i współpracę
                </p>
              </motion.div>

              {/* Email Button - Hero Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2 sm:pt-4"
              >
                <a
                  href="mailto:lukasz.kepa.work@gmail.com"
                  className="group relative inline-flex items-center gap-2 sm:gap-3 lg:gap-4 px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 overflow-hidden rounded-full"
                >
                  {/* Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full shadow-[0_12px_40px_rgba(139,92,246,0.4),inset_0_2px_2px_rgba(255,255,255,0.4)]" />

                  {/* Animated Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-purple-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-110" />

                  {/* Content */}
                  <Mail className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white flex-shrink-0" />
                  <span className="relative text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white break-all">
                    lukasz.kepa.work@gmail.com
                  </span>
                  <Send className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" />
                </a>
              </motion.div>

             
            </div>

            {/* Specular Edge Highlight */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
              <div className="absolute inset-0 rounded-[3rem] border-2 border-white/40" style={{ boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.6)' }} />
            </div>
          </div>

          {/* Massive External Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/40 via-fuchsia-600/40 to-purple-600/40 rounded-[3rem] blur-[80px] opacity-60 -z-10" />
        </motion.div>

       
      </div>
    </section>
  );
}
