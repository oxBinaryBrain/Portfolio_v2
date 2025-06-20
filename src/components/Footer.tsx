
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              UG<span className="text-purple">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-medium mb-3">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/oxBinaryBrain/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple/20 transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/uday-g-601ba9266/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple/20 transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/UdayG6389896490"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple/20 transition-colors hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:ud4yg@yandex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple/20 transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Uday G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
