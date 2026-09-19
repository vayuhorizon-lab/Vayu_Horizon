"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="min-h-screen py-32 flex flex-col justify-center relative bg-midnight overflow-hidden">
      {/* Visual background gradient / glow */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-t from-ice-blue/5 via-horizon-blue/10 to-midnight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-moon-white font-bold leading-tight">
            <span className="block text-moon-white/50">THE HORIZON</span>
            <span className="block">IS NOT THE END.</span>
          </h2>
          <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-ice-blue/50 to-transparent my-8" />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-moon-white/90 leading-tight">
            IT'S THE BEGINNING<br />
            OF SOMETHING<br />
            <span className="italic text-ice-blue">WE HAVEN'T SEEN YET.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4 text-xl md:text-2xl font-light tracking-widest text-moon-white/70"
        >
          <p>LOOK FORWARD.</p>
          <p>WALK TOGETHER.</p>
          <p className="text-ice-blue">LEAVE A STORY.</p>
        </motion.div>
      </div>
    </section>
  );
}
