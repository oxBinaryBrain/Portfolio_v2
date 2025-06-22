
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, School, Star } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Academics = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="academics" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <h2 className="section-subtitle">My Educational</h2>
          <h3 className="section-title">Academic Journey</h3>
          <p className="section-description mx-auto">
            My educational background and academic achievements
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bachelor of Technology */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="glass rounded-xl overflow-hidden h-full transition-transform"
          >
            <div className="p-1 bg-gradient-to-r from-purple-dark to-purple">
              <div className="p-6 glass rounded-t-lg">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full glass flex items-center justify-center bg-purple/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <GraduationCap size={28} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Bachelor of Technology</h3>
                <p className="text-center text-foreground/80 text-sm mb-4">2021 - Present</p>
              </div>
            </div>
            
            <div className={`p-6 ${isDarkTheme ? 'bg-transparent' : 'bg-white dark:bg-transparent'}`}>
              <div className="mb-4">
                <p className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Presidency University, Bengaluru</p>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>Computer Science and Technology (AI & ML)</p>
                <p className="text-sm text-purple mt-1">CGPA: 7.8</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Key Courses:</span> Data Structures, Algorithms, Machine Learning
                  </p>
                </div>
                <div className="flex items-start">
                  <Award size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Research:</span> AI/ML projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pre-University College */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="glass rounded-xl overflow-hidden h-full transition-transform"
          >
            <div className="p-1 bg-gradient-to-r from-purple to-purple-light">
              <div className="p-6 glass rounded-t-lg">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full glass flex items-center justify-center bg-purple/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <BookOpen size={28} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Pre-University College</h3>
                <p className="text-center text-foreground/80 text-sm mb-4">2019 - 2021</p>
              </div>
            </div>
            
            <div className={`p-6 ${isDarkTheme ? 'bg-transparent' : 'bg-white dark:bg-transparent'}`}>
              <div className="mb-4">
                <p className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>MES Kishora Kendra, Bengaluru</p>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>Science Stream</p>
                <p className="text-sm text-purple mt-1">CGPA: 8.5</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Subjects:</span> Physics, Mathematics, Chemistry, Computer Science
                  </p>
                </div>
                <div className="flex items-start">
                  <Star size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Highlights:</span> Advanced Mathematics & Computer Science
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary High School */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="glass rounded-xl overflow-hidden h-full transition-transform"
          >
            <div className="p-1 bg-gradient-to-r from-purple-light to-purple-dark">
              <div className="p-6 glass rounded-t-lg">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full glass flex items-center justify-center bg-purple/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <School size={28} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Secondary High School</h3>
                <p className="text-center text-foreground/80 text-sm mb-4">2012 - 2019</p>
              </div>
            </div>
            
            <div className={`p-6 ${isDarkTheme ? 'bg-transparent' : 'bg-white dark:bg-transparent'}`}>
              <div className="mb-4">
                <p className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Nelamangala, Bengaluru</p>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>NCERT-based Curriculum</p>
                <p className="text-sm text-purple mt-1">CGPA: 9.09</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Curriculum:</span> NCERT-based
                  </p>
                </div>
                <div className="flex items-start">
                  <Star size={16} className="mr-2 text-purple mt-1 flex-shrink-0" />
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800 dark:text-white'}`}>Highlights:</span> Strong foundation in Science
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
