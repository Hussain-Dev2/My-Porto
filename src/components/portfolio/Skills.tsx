import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Server,
  Cloud,
  Zap,
  Mail
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS",]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Next.JS API Routes", "Node.js", "Strapi"]
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Prisma",]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Git", "Docker", "Vercel",]
    },
    {
      title: "Automation & n8n",
      icon: Zap,
      skills: ["n8n Workflows", "Email Automation", "Client Communication", "API Integration", "Process Automation", "Webhook Management"],
      description: "Building automated workflows to streamline business processes, including automated email sequences for client onboarding, lead nurturing, and project updates. Creating seamless integrations between different tools and services."
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-card rounded-lg border hover:shadow-elegant transition-smooth h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {category.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  )}
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-md text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;