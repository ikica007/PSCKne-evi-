import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import pgt2 from './pgt2.jpeg';

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Lively animated background blob */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-64 h-64 bg-[#2E5BFF]/20 rounded-full blur-3xl z-0"
            />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] z-10 border border-white/20">
              <img 
                src={pgt2} 
                alt="PSC Knežević zgrada" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-[#2E5BFF] text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-5xl font-bold mb-1">15+</p>
              <p className="text-sm uppercase tracking-wider font-medium">Godina<br/>Iskustva</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-[#2E5BFF] font-bold tracking-wider uppercase text-sm mb-2">O Nama</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0A1F44] mb-6 uppercase tracking-tight">
              Vaš pouzdan partner na putu
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              PSC Knežević je ovlašćeni servis u Podgorici sa dugogodišnjim iskustvom u održavanju i popravci Peugeot vozila. Naša misija je da vašem automobilu pružimo vrhunsku njegu koristeći najsavremeniju opremu i originalne djelove.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Stručni majstori specijalizovani za Peugeot",
                "Najsavremenija kompjuterska dijagnostika",
                "Dugogodišnje povjerenje klijenata širom Crne Gore",
                "Garancija na ugrađene djelove i izvršene usluge"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2E5BFF] shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#kontakt" 
              className="inline-block bg-[#0A1F44] hover:bg-[#153266] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300"
            >
              Upoznajte naš tim
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
