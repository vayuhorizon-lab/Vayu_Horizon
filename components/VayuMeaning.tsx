"use client";

import { motion, Variants } from "framer-motion";

const letters = [
  {
    letter: "V",
    word: "VISION",
    desc: "Melihat lebih jauh dari apa yang ada di depan mata.",
  },
  {
    letter: "A",
    word: "ADVENTURE",
    desc: "Berani mencoba, berani melangkah.",
  },
  {
    letter: "Y",
    word: "YOUTH",
    desc: "Energi untuk menciptakan pengalaman baru.",
  },
  {
    letter: "U",
    word: "UNITY",
    desc: "Berjalan bersama tanpa meninggalkan siapa pun.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function VayuMeaning() {
  return (
    <section className="py-24 md:py-32 bg-deep-navy relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-horizon-blue/20 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {letters.map((item, index) => (
            <motion.div
              key={item.letter}
              variants={itemVariants}
              className="group relative p-8 border border-white/5 bg-midnight/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif font-bold group-hover:scale-110 group-hover:text-ice-blue transition-all duration-700 pointer-events-none">
                {item.letter}
              </div>
              
              <h3 className="font-serif text-3xl text-ice-blue mb-1 group-hover:text-moon-white transition-colors duration-300">
                {item.letter}
              </h3>
              <h4 className="text-moon-white font-medium tracking-widest text-sm mb-6 uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                — {item.word}
              </h4>
              <p className="text-moon-white/70 font-light leading-relaxed group-hover:text-moon-white/90 transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
