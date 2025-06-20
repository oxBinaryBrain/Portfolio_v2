import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Globe, Database, Briefcase } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground 
        opacity={0.9} 
        particleCount={200} 
        particleSize={4}
        speed={0.8}
        connectionDistance={150}
        showConnections={true}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="section-subtitle">Web Developer & Freelancer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-light via-purple to-purple-dark animate-gradient bg-300%"
        >
          UDAY G
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10"
        >
          Passionate developer specializing in creating innovative digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="glass rounded-xl px-6 py-4 flex items-center space-x-3">
            <Code size={20} className="text-purple" />
            <span>Python</span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center space-x-3">
            <Globe size={20} className="text-purple" />
            <span>React.js</span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center space-x-3">
            <Database size={20} className="text-purple" />
            <span>AI & ML</span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center space-x-3">
            <Briefcase size={20} className="text-purple" />
            <span>Freelancer</span>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block glass rounded-full p-3 hover:bg-secondary/50 transition-colors animate-float"
        >
          <ChevronDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;