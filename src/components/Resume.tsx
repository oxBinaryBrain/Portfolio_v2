import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Code, Cpu, Database, Globe, Server, GitBranch, Terminal, Layers, Briefcase, Award, ExternalLink } from "lucide-react";

const Resume = () => {
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

  // Skills data
  const programmingSkills = [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "C++", level: 70},
  ];

  const webDevSkills = [
    { name: "Node.js", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "HTML5", level: 95 },
  ];

  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 75 },
    { name: "Git", level: 90 },
    { name: "Firebase", level: 70 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 70 },
    { name: "Teamwork", level: 80 },
    { name: "Time Management", level: 80 },
  ];

  // Tech Stack
  const techStack = [
    { name: "C++", icon: <Code size={32} className="text-purple mb-4" /> },
    { name: "JavaScript", icon: <Cpu size={32} className="text-purple mb-4" /> },
    { name: "TypeScript", icon: <Terminal size={32} className="text-purple mb-4" /> },
    { name: "Python", icon: <Code size={32} className="text-purple mb-4" /> },
    { name: "Node.js", icon: <Server size={32} className="text-purple mb-4" /> },
    { name: "React.js", icon: <Globe size={32} className="text-purple mb-4" /> },
    { name: "MongoDB", icon: <Database size={32} className="text-purple mb-4" /> },
    { name: "MySQL", icon: <Database size={32} className="text-purple mb-4" /> },
    { name: "Next.js", icon: <Layers size={32} className="text-purple mb-4" /> },
    { name: "Git", icon: <GitBranch size={32} className="text-purple mb-4" /> },
    { name: "VS Code", icon: <Terminal size={32} className="text-purple mb-4" /> },
    { name: "Vercel", icon: <Server size={32} className="text-purple mb-4" /> },
  ];

  // Certifications data
  const certifications = [
    {
      title: "API Prototyping Learning Path",
      issuer: "Postman",
      date: "December 2024",
      credentialId: "PST-APL-2024",
      skills: ["API Prototyping", "API Testing", "API Documentation"],
      link: "#"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "November 2024",
      credentialId: "MSLI-GAI-2024",
      skills: ["Generative AI", "Prompt Engineering", "LLM Applications"],
      link: "#"
    },
    {
      title: "Learning Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "November 2024",
      credentialId: "ISB-PBI-2024",
      skills: ["Microsoft Power BI", "Data Visualization", "Business Intelligence"],
      link: "#"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Great Learning",
      date: "January 2024",
      credentialId: "GL-NNDL-2024",
      skills: ["Neural Networks", "Deep Learning", "AI Architecture"],
      link: "#"
    },
    {
      title: "Real Life Machine Learning and Data Science Projects",
      issuer: "Udemy",
      date: "November 2022",
      credentialId: "UC-e1c70903-b810-4b6b-8749-eebd334575",
      skills: ["Machine Learning", "Data Science", "Practical Implementation"],
      link: "#"
    }
  ];

  // Freelance section
  const freelanceSection = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUpVariant}
      custom={2}
      className="glass p-6 rounded-xl mb-12 border border-purple/30 bg-gradient-to-br from-purple/5 to-purple/10"
    >
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Briefcase size={20} className="text-purple mr-2" />
        Freelance Experience
      </h3>
      <p className="mb-4 text-foreground/80">
        I work as a freelance developer specializing in creating custom solutions for clients across various domains. 
        My expertise in AI, machine learning, and web development allows me to deliver high-quality projects tailored to specific needs.
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="text-sm px-3 py-1 rounded-full bg-purple/20 text-foreground/90">AI Solutions</span>
        <span className="text-sm px-3 py-1 rounded-full bg-purple/20 text-foreground/90">Web Development</span>
        <span className="text-sm px-3 py-1 rounded-full bg-purple/20 text-foreground/90">Data Analysis</span>
        <span className="text-sm px-3 py-1 rounded-full bg-purple/20 text-foreground/90">Machine Learning</span>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={1}
          className="mb-16 text-center"
        >
          <h2 className="section-subtitle">My Background</h2>
          <h3 className="section-title">Resume & Skills</h3>
          <p className="section-description mx-auto">
            An overview of my professional skills and experience
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.a
            href="/resume.pdf"
            download="Uday_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-lg px-6 py-3 flex items-center space-x-2 bg-purple/20 hover:bg-purple/30 transition-colors"
          >
            <FileText size={20} />
            <span>Download Resume</span>
            <Download size={16} />
          </motion.a>
        </div>

        {/* Freelance Section */}
        {freelanceSection}

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Programming Languages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={3}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code size={20} className="text-purple mr-2" />
              Programming Languages
            </h3>

            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-dark to-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={4}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Globe size={20} className="text-purple mr-2" />
              Web Development
            </h3>

            <div className="space-y-6">
              {webDevSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple to-purple-light"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Database & Version Control */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={5}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Database size={20} className="text-purple mr-2" />
              Database & Version Control
            </h3>

            <div className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-light to-purple-dark"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariant}
            custom={6}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Cpu size={20} className="text-purple mr-2" />
              Professional Skills
            </h3>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-dark to-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={7}
          className="mb-20"
        >
          <h3 className="text-xl font-bold mb-8 text-center">Technology Stack</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-secondary/30 transition-colors duration-300 tech-card"
              >
                {tech.icon}
                <h4 className="font-medium">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
          custom={8}
          className="mt-20"
        >
          <div className="flex items-center justify-center mb-8">
            <Award size={24} className="text-purple mr-3" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="glass rounded-xl p-6 hover:bg-secondary/20 transition-all duration-300 border border-purple/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 rounded-lg glass hover:bg-purple/20 transition-colors"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={16} className="text-purple" />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2 py-1 rounded-full bg-purple/20 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Credential ID: {cert.credentialId}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;