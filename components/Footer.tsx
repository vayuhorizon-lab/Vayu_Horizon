"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="py-24 bg-midnight relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-ice-blue/10 via-midnight to-midnight opacity-60 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="z-10 px-6"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-moon-white font-bold leading-tight mb-8">
          THE HORIZON<br />
          IS STILL AHEAD.
        </h2>
        
        <p className="font-serif italic text-moon-white/70 text-xl md:text-2xl mb-16">
          "And our story<br />has only just begun."
        </p>

        <div className="text-ice-blue mb-8">✦</div>

        <div className="tracking-[0.2em] text-sm text-moon-white/50 flex flex-col items-center gap-2">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.year}</span>
        </div>
      </motion.div>
    </footer>
  );
}
