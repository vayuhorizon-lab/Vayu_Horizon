"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { members } from "@/data/members";

export default function Members() {
  // Jika data anggota masih sedikit, kita gandakan agar efek infinite scroll tidak kosong di tengah jalan.
  // Jika anggota sudah mencapai 30 orang, kita cukup pakai datanya as is (atau duplikasi sekali saja jika butuh).
  const displayMembers = members.length < 10 
    ? [...members, ...members, ...members, ...members, ...members]
    : members;

  return (
    <section className="py-24 md:py-32 bg-deep-navy relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-moon-white mb-4"
        >
          MEET THE HORIZON
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-ice-blue italic font-serif text-xl"
        >
          "Different stories. One journey."
        </motion.p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Kontainer marquee yang bergerak ke kiri. 
            Menambahkan class 'pause-animation' pada utility css jika ingin berhenti saat hover. */}
        <div className="flex w-max animate-marquee group-hover:pause-animation">
          
          {/* Loop pertama */}
          <div className="flex gap-6 px-3">
            {displayMembers.map((member, index) => (
              <div
                key={`loop1-${member.id}-${index}`}
                className="group/card relative overflow-hidden rounded-xl bg-midnight shrink-0 w-[260px] md:w-[320px] aspect-[3/4]"
              >
                {/* Ukuran foto disamakan menggunakan fill & object-cover */}
                <Image 
                  src={member.imageUrl} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 260px, 320px"
                  className="object-cover opacity-70 group-hover/card:opacity-40 transition-opacity duration-700 group-hover/card:scale-105"
                  priority={index < 4}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-moon-white font-bold mb-1 relative z-10">
                    {member.name}
                  </h3>
                  <p className="text-ice-blue text-sm uppercase tracking-wider mb-4 opacity-100 transition-opacity duration-300 relative z-10">
                    {member.role}
                  </p>
                  <div className="h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 overflow-hidden relative z-10">
                    <p className="text-moon-white/80 font-light text-sm italic">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loop kedua untuk ilusi infinite scroll */}
          <div className="flex gap-6 px-3">
            {displayMembers.map((member, index) => (
              <div
                key={`loop2-${member.id}-${index}`}
                className="group/card relative overflow-hidden rounded-xl bg-midnight shrink-0 w-[260px] md:w-[320px] aspect-[3/4]"
              >
                <Image 
                  src={member.imageUrl} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 260px, 320px"
                  className="object-cover opacity-70 group-hover/card:opacity-40 transition-opacity duration-700 group-hover/card:scale-105"
                  priority={false}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-moon-white font-bold mb-1 relative z-10">
                    {member.name}
                  </h3>
                  <p className="text-ice-blue text-sm uppercase tracking-wider mb-4 opacity-100 transition-opacity duration-300 relative z-10">
                    {member.role}
                  </p>
                  <div className="h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 overflow-hidden relative z-10">
                    <p className="text-moon-white/80 font-light text-sm italic">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
