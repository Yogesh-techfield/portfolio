import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio built with React.js and Tailwind CSS, showcasing skills, projects, and contact functionality.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/yogeshmalik/portfolio",
    live: "#",
  },
  {
    title: "Virtual Exam Trainer",
    description: "An interactive web application designed to help students prepare for exams with timed quizzes, instant feedback, and progress tracking.",
    tech: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    github: "https://github.com/yogeshmalik/virtual-exam-trainer",
    live: "#",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management application with CRUD operations, authentication, and a clean dashboard interface.",
    tech: ["React.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/yogeshmalik/task-manager",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 card-shadow hover:-translate-y-1"
            >
              {/* Color strip */}
              <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
