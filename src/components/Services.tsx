import { motion } from 'motion/react';
import { Wrench, Settings, Zap, ShieldCheck, Clock, Car } from 'lucide-react';

const services = [
  {
    title: "Kompjuterska Dijagnostika",
    description: "Precizno očitavanje grešaka i analiza rada motora najsavremenijim uređajima za Peugeot vozila.",
    icon: <Zap size={32} className="text-[#2E5BFF]" />
  },
  {
    title: "Popravka Motora",
    description: "Generalne i parcijalne popravke motora, zamjena zupčastog kaiša i rješavanje kompleksnih kvarova.",
    icon: <Settings size={32} className="text-[#2E5BFF]" />
  },
  {
    title: "Injektori i Sistem Goriva",
    description: "Čišćenje, popravka i zamjena injektora, kao i kompletno održavanje sistema za ubrizgavanje.",
    icon: <Wrench size={32} className="text-[#2E5BFF]" />
  },
  {
    title: "Redovno Održavanje",
    description: "Mali i veliki servis, zamjena ulja, filtera, kočnica i priprema vozila za tehnički pregled.",
    icon: <ShieldCheck size={32} className="text-[#2E5BFF]" />
  },
  {
    title: "Hitne Popravke",
    description: "Brza reakcija i rješavanje hitnih kvarova kako biste što prije nastavili svoje putovanje.",
    icon: <Clock size={32} className="text-[#2E5BFF]" />
  },
  {
    title: "Specijalizovani Servis",
    description: "Ekspertiza isključivo za Peugeot grupaciju garantuje najbolje poznavanje vašeg vozila.",
    icon: <Car size={32} className="text-[#2E5BFF]" />
  }
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2E5BFF] font-bold tracking-wider uppercase text-sm mb-2">Naša Ekspertiza</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#0A1F44] uppercase tracking-tight">
            Usluge koje nudimo
          </h3>
          <div className="w-24 h-1 bg-[#2E5BFF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-[#F2F2F2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2E5BFF]/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-[#0A1F44] mb-3 uppercase tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
