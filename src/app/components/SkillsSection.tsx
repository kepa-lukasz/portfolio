import { motion } from "motion/react";
import { Award } from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "CSS & HTML",
  "REST Api",
  "WCAG",
  "JAVA",
  "Spring Boot",
  "Git Workflows",
  "OOP",
  ".NET C#"
];

const certifications = [
  "ABK PO - Program Mentoringowy",
  "CG2 – Frontend & WCAG 2.2",
  "Świat SEO – SE(O)krety sukcesu",
  "Softtronic - Wzorce projektowe w inżynierii oprogramowania"
];

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0520] via-[#0a0015] to-[#1a0b2e]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
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
              Skills & <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
          </div>
        </motion.div>

        {/* Skills Constellation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
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
                {/* Glass Pill */}
                <div className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_4px_16px_rgba(139,92,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:shadow-[0_6px_24px_rgba(139,92,246,0.5)]">
                  <span className="text-sm font-medium text-violet-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="inline-block mx-auto">
            <div className="relative p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 backdrop-blur-sm border border-fuchsia-400/20 shadow-[0_4px_12px_rgba(217,70,239,0.2)]">
                      <span className="text-sm font-medium text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors">
                        {cert}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
