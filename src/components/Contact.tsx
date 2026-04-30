import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2E5BFF] font-bold tracking-wider uppercase text-sm mb-2">Kontaktirajte nas</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#0A1F44] uppercase tracking-tight">
            Zakažite svoj termin
          </h3>
          <div className="w-24 h-1 bg-[#2E5BFF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          
          {/* Contact Info & Form */}
          <div className="p-8 md:p-12">
            <h4 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-6 uppercase tracking-tight text-center">Ponuda za servis i djelove</h4>
            <p className="text-gray-600 text-sm md:text-base mb-4 uppercase tracking-wide font-medium text-center">Ovdje možete zatražiti ponudu za potrebni servis vozila i rezervne djelove</p>
            <p className="text-gray-800 text-sm md:text-base mb-10 uppercase tracking-wide font-bold text-center">Popunite formular i očekujte naš poziv ili odgovor</p>
            
            <form className="space-y-6 mb-12" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const sasija = formData.get('Broj šasije') || '';
              const model = formData.get('Model automobila') || '';
              const godina = formData.get('Godina proizvodnje') || '';
              const ime = formData.get('Ime i prezime') || '';
              const telefon = formData.get('Broj telefona') || '';
              const email = formData.get('Email') || '';
              const poruka = formData.get('Poruka') || '';

              const text = `Novi upit za servis/djelove:\n\n*Broj šasije:* ${sasija}\n*Model automobila:* ${model}\n*Godina proizvodnje:* ${godina}\n*Ime i prezime:* ${ime}\n*Broj telefona:* ${telefon}\n*Email:* ${email}\n*Poruka:* ${poruka}`;
              const encodedText = encodeURIComponent(text);
              window.open(`https://wa.me/38269012239?text=${encodedText}`, '_blank');
            }}>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Unesi broj šasije:(OBAVEZNO POLJE)</label>
                <input type="text" name="Broj šasije" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Model automobila:</label>
                <input type="text" name="Model automobila" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Godina proizvodnje:</label>
                <input type="text" name="Godina proizvodnje" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Vaše ime i prezime:</label>
                <input type="text" name="Ime i prezime" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Vaš broj telefona:</label>
                <input type="tel" name="Broj telefona" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Vaša e-mail adresa:</label>
                <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[15px] text-gray-500 mb-2">Unesite vašu poruku:</label>
                <textarea name="Poruka" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent outline-none transition-all bg-white resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#0078d4] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm transition-colors duration-300">
                Pošaljite
              </button>
            </form>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center shrink-0 text-[#2E5BFF]">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:+38269012239" className="text-lg font-bold text-[#0A1F44] hover:text-[#2E5BFF] transition-colors">+382 69 012 239</a>
                  <a href="tel:+38220603050" className="text-lg font-bold text-[#0A1F44] hover:text-[#2E5BFF] transition-colors">+382 20 60 30 50</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center shrink-0 text-[#2E5BFF]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:peugeotsknezevic@t-com.me" className="text-lg font-bold text-[#0A1F44] hover:text-[#2E5BFF] transition-colors">peugeotsknezevic@t-com.me</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center shrink-0 text-[#2E5BFF]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Radno Vrijeme</p>
                  <p className="text-lg font-bold text-[#0A1F44]">Pon - Pet: 08:00 - 16:00</p>
                  <p className="text-lg font-bold text-[#0A1F44]">Subota: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto relative bg-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=PSC%20Knezevic%20Podgorica&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
               <div className="w-10 h-10 bg-[#2E5BFF] rounded-full flex items-center justify-center shrink-0 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#0A1F44]">PSC Knežević</p>
                  <p className="text-sm text-gray-600">Podgorica, Crna Gora</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
