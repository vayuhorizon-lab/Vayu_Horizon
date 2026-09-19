"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Social() {
  return (
    <section className="py-24 md:py-32 bg-midnight relative flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-horizon-blue/10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h2 className="text-moon-white/60 tracking-[0.2em] text-sm uppercase mb-6">
          Follow Our Journey
        </h2>
        
        <h3 className="font-serif text-3xl md:text-5xl text-moon-white font-bold tracking-widest mb-10">
          VAYU — HORIZON
        </h3>
        
        <a 
          href={siteConfig.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-ice-blue/50 hover:bg-ice-blue/5 transition-all duration-300 text-moon-white group"
        >
          <InstagramIcon className="w-5 h-5 group-hover:text-ice-blue transition-colors" />
          <span className="font-light tracking-wide">{siteConfig.social.instagram}</span>
        </a>
      </motion.div>
    </section>
  );
}
