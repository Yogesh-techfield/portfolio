import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} className="text-primary" /> by Yogesh Malik
        </p>

        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://github.com/yogeshmalik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/yogeshmalik" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:yogesh@example.com" className="hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
