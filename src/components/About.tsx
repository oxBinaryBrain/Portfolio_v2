import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Cpu, Brain } from "lucide-react";

const About = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <h2 className="section-subtitle">Get To Know</h2>
          <h3 className="section-title">About Me</h3>
          <p className="section-description mx-auto">
            A passionate software developer with a focus on creating elegant and
            efficient solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={2}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 glass rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/30 to-transparent" />
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: "url('/Me.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.9
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={3}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about programming and software development, constantly exploring new technologies and methods to improve my skills. My journey in tech has given me a solid foundation in various programming languages and frameworks.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/30 hover:scale-105">
                <Code className="text-purple mb-4" size={24} />
                <h4 className="text-lg font-semibold mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, React.js, Next.js, CSS
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/30 hover:scale-105">
                <Server className="text-purple mb-4" size={24} />
                <h4 className="text-lg font-semibold mb-2">Programming</h4>
                <p className="text-sm text-muted-foreground">
                  Python, JavaScript, C++
                </p>
              </div>

              <div className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/30 hover:scale-105">
                <Brain className="text-purple mb-4" size={24} />
                <h4 className="text-lg font-semibold mb-2">AI & ML</h4>
                <p className="text-sm text-muted-foreground">
                  Working with artificial intelligence and machine learning
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/30 hover:scale-105">
                <Cpu className="text-purple mb-4" size={24} />
                <h4 className="text-lg font-semibold mb-2">Blockchain</h4>
                <p className="text-sm text-muted-foreground">
                  Exploring blockchain technologies and applications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;