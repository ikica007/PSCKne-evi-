import { motion } from 'motion/react';
import pgt1 from './pgt1.jpeg';
import pgt2 from './pgt2.jpeg';
import pgt3 from './pgt3.jpeg';
import pgt4 from './pgt4.jpeg';
import pgt5 from './pgt5.jpeg';
import pgt6 from './pgt6.jpeg';

// Uklonjena pgt2 iz slajdera
const images = [pgt1, pgt3, pgt4, pgt5, pgt6];

export default function ImageSlider() {
  return (
    <section className="w-full bg-[#F2F2F2] py-12 overflow-hidden">
      <div className="relative flex w-full overflow-hidden mb-12">
        {/* Gradient overlays for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Dupliramo niz slika kako bi se stvorio efekat beskonačnog skrolovanja */}
          {[...images, ...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="min-w-[280px] md:min-w-[400px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative group"
            >
              <img 
                src={src} 
                alt={`Galerija slika ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A1F44]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <video 
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video%201%20pg.mp4" type="video/mp4" />
            Vaš pretraživač ne podržava video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
