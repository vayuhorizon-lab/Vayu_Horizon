"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section className="py-24 md:py-32 bg-deep-navy relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-moon-white mb-20 text-center tracking-wide"
        >
          THE JOURNEY
        </motion.h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          
          {journey.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative mb-16 md:mb-24 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Left side (Desktop) */}
                  <div className={`hidden md:flex w-1/2 justify-end pr-12 ${!isEven ? 'md:order-1' : ''}`}>
                    {isEven && (
                      <div className="text-right">
                        <span className="text-ice-blue font-serif text-xl italic block mb-2">{item.step}</span>
                        <h3 className="text-2xl font-bold text-moon-white mb-2 tracking-wider">{item.title}</h3>
                        <p className="text-moon-white/70 font-light">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className={`absolute -left-[5px] md:static md:w-auto md:order-2 flex justify-center z-10 ${!isEven ? 'md:order-2' : ''}`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-ice-blue shadow-[0_0_10px_rgba(94,168,255,0.8)]" />
                  </div>

                  {/* Right side (Desktop) and Mobile content */}
                  <div className={`w-full pl-8 md:pl-12 md:w-1/2 ${!isEven ? 'md:order-3 text-left' : 'md:hidden'}`}>
                    {(!isEven || true) && (
                      <div className={isEven ? 'md:hidden' : ''}>
                        <span className="text-ice-blue font-serif text-xl italic block mb-2">{item.step}</span>
                        <h3 className="text-2xl font-bold text-moon-white mb-2 tracking-wider">{item.title}</h3>
                        <p className="text-moon-white/70 font-light">{item.description}</p>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
