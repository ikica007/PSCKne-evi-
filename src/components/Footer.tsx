import { motion } from 'motion/react';
import { CarFront } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.simpleicons.org/peugeot/FFFFFF" 
              alt="Peugeot Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl tracking-wider leading-none">PSC KNEŽEVIĆ</span>
              <span className="text-[#2E5BFF] text-sm font-medium tracking-widest uppercase mt-1">Peugeot Servis</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#pocetna" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-medium tracking-wider">Početna</a>
            <a href="#usluge" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-medium tracking-wider">Usluge</a>
            <a href="#kontakt" className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-medium tracking-wider">Kontakt</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PSC Knežević. Sva prava zadržana.
          </p>
          <p className="text-gray-500 text-sm">
            Podgorica, Crna Gora
          </p>
        </div>
      </div>

      {/* Animated Cars at the bottom */}
      <div className="absolute bottom-4 left-0 w-full h-10 overflow-hidden opacity-20 pointer-events-none">
        <motion.div
          animate={{ x: ["-100vw", "100vw"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-0 text-[#2E5BFF]"
        >
          <CarFront size={32} />
        </motion.div>
        
        <motion.div
          animate={{ x: ["100vw", "-100vw"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 5 }}
          className="absolute bottom-2 text-white"
        >
          <CarFront size={24} className="transform scale-x-[-1]" />
        </motion.div>
      </div>
    </footer>
  );
}
