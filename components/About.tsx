"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 md:py-32 flex items-center bg-midnight relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-moon-white mb-12 tracking-wide"
        >
          WHO IS HORIZON?
        </motion.h2>

        <div className="space-y-8 text-moon-white/80 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "Horizon adalah bagian dari Vayu yang hadir sebagai ruang untuk bertumbuh, mengenal, dan berjalan bersama.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kami bukan sekadar sekumpulan nama dalam satu kelompok. Kami adalah cerita yang sedang dimulai — dengan karakter, perjalanan, dan tujuan yang berbeda.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-ice-blue italic font-medium"
          >
            Karena setiap perjalanan memiliki arah, dan setiap arah memiliki horizon."
          </motion.p>
        </div>
      </div>
    </section>
  );
}
