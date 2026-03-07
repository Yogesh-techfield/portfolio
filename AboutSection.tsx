import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech CSE from Lovely Professional University, Phagwara, Punjab.",
  },
  {
    icon: Code2,
    title: "Developer",
    description: "Experienced in React.js, Node.js, Express.js, MongoDB, and modern web technologies.",
  },
  {
    icon: Target,
    title: "Goal",
    description: "Building scalable, user-centric applications and growing as a full-stack engineer.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed text-center"
          >
            I'm Yogesh Malik, a B.Tech CSE student at Lovely Professional University. During my internship at SparkIIT (IIT Madras), I developed a professional portfolio website using full-stack technologies. I'm passionate about creating beautiful, performant, and accessible web applications that solve real-world problems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors card-shadow group"
            >
              <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
