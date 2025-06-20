
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative glass p-2 rounded-full flex items-center justify-center overflow-hidden h-10 w-10 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{ 
        background: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0,
          y: theme === "dark" ? 0 : -20
        }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute"
      >
        <Sun size={20} className="text-yellow-300" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0,
          scale: theme === "light" ? 1 : 0,
          y: theme === "light" ? 0 : 20
        }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute"
      >
        <Moon size={20} className="text-purple-300" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
