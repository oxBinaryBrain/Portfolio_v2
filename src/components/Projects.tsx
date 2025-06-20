
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Play, Pause, BarChartHorizontal, Brain, CreditCard, Braces, Bitcoin, } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  icon: React.ReactNode;
  subtitle: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Income Tax Fraud Detection",
    subtitle: "AI & Machine Learning",
    description: "Developed a system to detect fraudulent activities in income tax filings using AI and machine learning techniques. Implemented data preprocessing, feature engineering, and trained models to identify anomalies and suspicious patterns in tax data submissions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"],
    github: "https://github.com/oxBinaryBrain/An_Income_Tax_Fraud_Detection_Using_AI-ML",
    icon: <BarChartHorizontal />,
  },
  {
    id: 2,
    title: "Oral Cancer Classification",
    subtitle: "Neural Networks & Computer Vision",
    description: "Developing a machine learning model to detect and classify oral cancer levels from medical images. The project involves comprehensive data collection, preprocessing, feature extraction, selection, and model building using advanced techniques like CNNs for accurate medical diagnosis.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Python", "TensorFlow", "Neural Networks", "Computer Vision"],
    github: "https://github.com/oxBinaryBrain/Oral_Cancer_Classification",
    icon: <Brain />,
  },
  {
    id: 3,
    title: "Credit Card Fraud Detection",
    subtitle: "Machine Learning & Classification",
    description: "Built a sophisticated machine learning model that analyzes credit card transactions to identify fraudulent activities. The system uses advanced algorithms to detect patterns and anomalies in transaction data, providing real-time fraud detection capabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Python", "Machine Learning", "Data Science", "Classification"],
    github: "https://github.com/oxBinaryBrain/CC-Fraud-Detection",
    icon: <CreditCard />,
  },
  {
    id: 4,
    title: "Contextualized Topic Modeling",
    subtitle: "NLP & Data Processing",
    description: "A comprehensive Python package for running contextualized topic modeling. The system combines contextualized embeddings (like BERT) with topic models to generate coherent and meaningful topics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["Python", "NLP", "Machine Learning", "Flask"],
    github: "https://github.com/oxBinaryBrain/contextualized-topic-models",
    icon: <Braces />,
  },
  {
    id: 5,
    title: "Blockchain Explorer",
    subtitle: "Blockchain & Data Processing",
    description: "A web interface for exploring blockchain data and transactions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "JavaScript", "React", "Blockchain", "Web3.js"],
    github: "https://github.com/oxBinaryBrain/TRACE",
    icon: <Bitcoin />,
  },
  {
    id: 6,
    title: "Smart Home Dashboard",
    subtitle: "Arduino & IoT",
    description: "A dashboard for monitoring and controlling smart home devices.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    tags: ["C", "Arduino", "IoT"],
    github: "https://github.com/oxBinaryBrain/Ardiuno",
    icon: <Braces />,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextProject, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <h2 className="section-subtitle">Featured Projects</h2>
          <h3 className="section-title">Project Work</h3>
          <p className="section-description mx-auto">
            Explore my latest work and see how I bring ideas to life with creativity and technical expertise.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="relative mb-16">
          <div className="flex justify-center items-center mb-8">
            <button
              onClick={prevProject}
              className="glass rounded-full p-3 mr-4 hover:bg-secondary/30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="glass rounded-full p-3 mx-4 hover:bg-purple/20 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={nextProject}
              className="glass rounded-full p-3 ml-4 hover:bg-secondary/30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl overflow-hidden max-w-4xl mx-auto"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                />
                <div className="absolute top-6 left-6 glass rounded-full p-3 z-20">
                  <div className="text-purple">
                    {currentProject.icon}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple/20 text-purple-light mb-2 inline-block">
                    {currentProject.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentProject.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-lg px-6 py-3 flex items-center space-x-2 hover:bg-purple/20 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Project</span>
                  </a>
                  
                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-purple' : 'bg-secondary'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-purple/50 bg-purple/5' : 'hover:bg-secondary/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute top-3 left-3 glass rounded-full p-2 z-20">
                  <div className="text-purple text-sm">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-bold mb-1 text-sm">{project.title}</h4>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/70">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/70">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
