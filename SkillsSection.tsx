import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3 / Tailwind", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "Python", level: 70 },
  { name: "TypeScript", level: 65 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">My expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
