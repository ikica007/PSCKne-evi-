import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const touchStartY = useRef(0);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentProgress = progressRef.current;
      if (window.scrollY <= 1) {
        if (e.deltaY > 0 && currentProgress < 1) {
          e.preventDefault();
          setProgress(p => Math.min(1, p + e.deltaY * 0.0015));
        } else if (e.deltaY < 0 && currentProgress > 0) {
          e.preventDefault();
          setProgress(p => Math.max(0, p + e.deltaY * 0.0015));
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentProgress = progressRef.current;
      if (window.scrollY <= 1) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        
        if (deltaY > 0 && currentProgress < 1) {
          e.preventDefault();
          setProgress(p => Math.min(1, p + deltaY * 0.008));
          touchStartY.current = touchY;
        } else if (deltaY < 0 && currentProgress > 0) {
          e.preventDefault();
          setProgress(p => Math.max(0, p + deltaY * 0.008));
          touchStartY.current = touchY;
        }
      }
    };

    // Use non-passive listeners to allow e.preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const isMobile = windowSize.width < 768;
  const targetWidth = isMobile ? windowSize.width : windowSize.width * 0.95;
  const targetHeight = isMobile ? windowSize.height : windowSize.height * 0.85;

  const currentWidth = 300 + (targetWidth - 300) * progress;
  const currentHeight = 400 + (targetHeight - 400) * progress;
  const currentRadius = 12 * (1 - progress);

  return (
    <section id="pocetna" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ opacity: 1 - progress }}
      >
        <img 
          src="https://res.cloudinary.com/de7gefkxl/image/upload/q_auto/f_auto/v1775725594/pgt4_epoxn1.jpg" 
          alt="PSC Knežević Servis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Text PSC */}
      <div 
        className="absolute z-30 w-full flex justify-center pointer-events-none"
        style={{ 
          top: 'calc(50% - 260px)',
          transform: `translateX(${-150 * progress}vw)`
        }}
      >
        <h1 
          className="font-bold uppercase text-blue-200 mix-blend-difference text-4xl md:text-6xl tracking-widest" 
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          PSC
        </h1>
      </div>

      {/* Video Container */}
      <div 
        className="relative z-20 overflow-hidden flex items-center justify-center"
        style={{
          width: `${currentWidth}px`,
          height: `${currentHeight}px`,
          borderRadius: `${currentRadius}px`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${0.5 * (1 - progress)})`
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/novi%20pezo.mov"
        />
        {/* Video Overlay */}
        <div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: 0.3 * (1 - progress) }}
        ></div>
      </div>

      {/* Text KNEŽEVIĆ */}
      <div 
        className="absolute z-30 w-full flex justify-center pointer-events-none"
        style={{ 
          top: 'calc(50% + 210px)',
          transform: `translateX(${150 * progress}vw)`
        }}
      >
        <h1 
          className="font-bold uppercase text-blue-200 mix-blend-difference text-4xl md:text-6xl tracking-widest" 
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          KNEŽEVIĆ
        </h1>
      </div>

      {/* Scroll Instruction */}
      <div 
        className="absolute bottom-8 z-20 flex flex-col items-center text-white/70"
        style={{ 
          opacity: 1 - progress * 3, // fades out faster
          transform: `translateY(${50 * progress}px)`,
          pointerEvents: progress > 0 ? 'none' : 'auto'
        }}
      >
        <span className="text-xs md:text-sm uppercase tracking-widest mb-2 font-medium">Skrolujte za prikaz</span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </section>
  );
}
