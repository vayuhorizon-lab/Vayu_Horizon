"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-midnight">
      {/* Background with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-horizon-blue/30 opacity-70" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-ice-blue/10 to-transparent" />
        {/* Subtle glowing horizon line at bottom */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ice-blue/30 to-transparent shadow-[0_0_20px_rgba(94,168,255,0.3)]" />
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="z-10 text-center px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center"
        >
          <h2 className="text-moon-white/70 tracking-[0.3em] text-sm md:text-base font-light mb-2">VAYU</h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-moon-white font-bold tracking-widest text-glow">
            HORIZON
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-8 md:mt-12 flex flex-col items-center"
        >
          <h3 className="text-ice-blue tracking-[0.2em] font-medium text-lg md:text-xl mb-4 uppercase">
            Beyond The Horizon
          </h3>
          <p className="font-serif italic text-moon-white/80 text-xl md:text-2xl max-w-lg">
            "A journey begins where the comfort ends."
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 z-20 flex flex-col items-center cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs tracking-widest text-moon-white/60 mb-2 uppercase">Explore Horizon</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-moon-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
