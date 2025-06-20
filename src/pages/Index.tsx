import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-500 ease-in-out ${theme === 'light' ? 'light-theme creative-light-theme' : ''}`}>
      {/* Global particles background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground 
          opacity={0.4} 
          particleCount={120} 
          particleSize={2}
          speed={0.3}
          connectionDistance={100}
          showConnections={true}
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <section className="relative">
            <ParticlesBackground 
              opacity={0.6} 
              particleCount={80} 
              particleSize={3}
              speed={0.4}
              connectionDistance={120}
              showConnections={false}
            />
            <div className="relative z-10">
              <About />
            </div>
          </section>
          
          <section className="relative">
            <ParticlesBackground 
              opacity={0.5} 
              particleCount={90} 
              particleSize={2.5}
              speed={0.5}
              connectionDistance={110}
              showConnections={true}
            />
            <div className="relative z-10">
              <Academics />
            </div>
          </section>
          
          <section className="relative">
            <ParticlesBackground 
              opacity={0.7} 
              particleCount={100} 
              particleSize={3.5}
              speed={0.6}
              connectionDistance={130}
              showConnections={true}
            />
            <div className="relative z-10">
              <Projects />
            </div>
          </section>
          
          <section className="relative">
            <ParticlesBackground 
              opacity={0.5} 
              particleCount={85} 
              particleSize={2.8}
              speed={0.4}
              connectionDistance={115}
              showConnections={false}
            />
            <div className="relative z-10">
              <Resume />
            </div>
          </section>
          
          <section className="relative">
            <ParticlesBackground 
              opacity={0.6} 
              particleCount={95} 
              particleSize={3.2}
              speed={0.5}
              connectionDistance={125}
              showConnections={true}
            />
            <div className="relative z-10">
              <Contact />
            </div>
          </section>
        </main>
        
        <Footer />

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-purple/20 transition-colors z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;