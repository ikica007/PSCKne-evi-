import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="pocetna" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/de7gefkxl/image/upload/q_auto/f_auto/v1775725594/pgt4_epoxn1.jpg" 
          alt="PSC Knežević Servis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
        <h1 
          className="font-bold uppercase text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest drop-shadow-2xl max-w-full break-words" 
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          PSC KNEŽEVIĆ
        </h1>
      </div>

      {/* Scroll Instruction */}
      <div className="absolute bottom-8 z-20 flex flex-col items-center text-white/70">
        <span 
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-2 font-medium"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Skrolujte za prikaz
        </span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </section>
  );
}
