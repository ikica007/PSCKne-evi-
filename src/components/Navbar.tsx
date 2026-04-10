import { motion } from 'motion/react';
import { Menu, Phone, MapPin, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0A1F44]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="https://cdn.simpleicons.org/peugeot/FFFFFF" 
              alt="Peugeot Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wider leading-none">PSC KNEŽEVIĆ</span>
              <span className="text-[#2E5BFF] text-xs font-medium tracking-widest uppercase mt-1">Peugeot Servis</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pocetna" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Početna</a>
            <a href="#o-nama" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">O nama</a>
            <a href="#usluge" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Usluge</a>
            <a href="#kontakt" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Kontakt</a>
            
            <a href="tel:+38269012239" className="flex items-center gap-2 bg-[#2E5BFF] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium">
              <Phone size={16} />
              <span>Pozovi odmah</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A1F44] border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#pocetna" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Početna</a>
            <a href="#o-nama" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">O nama</a>
            <a href="#usluge" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Usluge</a>
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Kontakt</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
