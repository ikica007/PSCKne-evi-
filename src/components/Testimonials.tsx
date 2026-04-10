import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marko P.",
    text: "Odlična usluga, profesionalno i brzo. Došao sam sa problemom na motoru koji su drugi servisi odbijali, ovdje je riješen u rekordnom roku.",
    rating: 5
  },
  {
    name: "Jelena V.",
    text: "Popravili su auto brzo i spasili moje putovanje. Cijene su bile tačno onakve kako smo se dogovorili na početku. Sve pohvale!",
    rating: 5
  },
  {
    name: "Nikola D.",
    text: "Topla preporuka, veoma profesionalan tim. Vidi se da poznaju Peugeot vozila u dušu. Od sada održavam auto samo kod njih.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2E5BFF] font-bold tracking-wider uppercase text-sm mb-2">Iskustva</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#0A1F44] uppercase tracking-tight">
            Šta kažu naši klijenti
          </h3>
          <div className="w-24 h-1 bg-[#2E5BFF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F2F2F2] p-8 rounded-2xl relative"
            >
              <Quote size={40} className="text-[#0A1F44]/10 absolute top-6 right-6" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FABB05] text-[#FABB05]" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.86C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.86z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.86c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </div>
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <h4 className="font-bold text-[#0A1F44] uppercase tracking-wider text-sm">
                {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
