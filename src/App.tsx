import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImageSlider />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
