import { motion } from 'motion/react';
import { Timer, Users, BadgeEuro, Globe } from 'lucide-react';

const reasons = [
  {
    title: "Brza Usluga",
    description: "Cijenimo vaše vrijeme. Mogućnost popravke isti dan za većinu standardnih kvarova i servisa.",
    icon: <Timer size={40} className="text-white" />
  },
  {
    title: "Iskusan Tim",
    description: "Naši mehaničari su visoko obučeni profesionalci sa specifičnim znanjem o Peugeot vozilima.",
    icon: <Users size={40} className="text-white" />
  },
  {
    title: "Transparentne Cijene",
    description: "Nema skrivenih troškova. Poštene cijene i detaljan predračun prije početka bilo kakvih radova.",
    icon: <BadgeEuro size={40} className="text-white" />
  },
  {
    title: "Povjerenje Klijenata",
    description: "Ponosni smo na veliki broj zadovoljnih lokalnih i stranih klijenata koji nam se redovno vraćaju.",
    icon: <Globe size={40} className="text-white" />
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0A1F44] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2E5BFF] font-bold tracking-wider uppercase text-sm mb-2">Prednosti</h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Zašto odabrati nas?
          </h3>
          <div className="w-24 h-1 bg-[#2E5BFF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-[#2E5BFF] rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-lg shadow-[#2E5BFF]/20">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{reason.title}</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
