import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_56%_/_0.06)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Yogesh Malik</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A passionate Full Stack Web Developer crafting responsive, modern, and interactive web experiences using React, Node.js, and modern technologies.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/yogeshmalik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/yogeshmalik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:yogesh@example.com" className="hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about">
            <ArrowDown className="text-muted-foreground animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
