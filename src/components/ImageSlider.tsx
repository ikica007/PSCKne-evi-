import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import pgt1 from './pgt1.jpeg';
import pgt2 from './pgt2.jpeg';
import pgt3 from './pgt3.jpeg';
import pgt4 from './pgt4.jpeg';
import pgt5 from './pgt5.jpeg';
import pgt6 from './pgt6.jpeg';

// Uklonjena pgt2 iz slajdera
const images = [pgt1, pgt3, pgt4, pgt5, pgt6];

export default function ImageSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F2F2F2] py-12 overflow-hidden relative">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img 
            src={selectedImage} 
            alt="Uveličana slika" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <div className="relative flex w-full items-center mb-12">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-8 z-20 bg-white/80 hover:bg-white text-[#0A1F44] p-2 md:p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-8 z-20 bg-white/80 hover:bg-white text-[#0A1F44] p-2 md:p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Gradient overlays for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          className="flex gap-6 px-16 md:px-32 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {/* We repeat a few times for sufficient scrolling experience */}
          {[...images, ...images, ...images].map((src, index) => (
            <div 
               key={index} 
               className="snap-center min-w-[280px] md:min-w-[400px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative group cursor-pointer"
               onClick={() => setSelectedImage(src)}
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
        </div>
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
