import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Independent Full-Stack Developer",
      company: "Self-Employed / Freelance",
      duration: "2024 - Present",
      description: "Designed and developed comprehensive full-stack applications including 'Habit App' and 'Doctor-Appoint'. Managed the entire lifecycle from database schema design (PostgreSQL) to frontend implementation (React/Next.js) and deployment."
    },
    {
      id: 2,
      role: "Automation Specialist",
      company: "Freelance Projects",
      duration: "2023 - 2024",
      description: "Created custom automation workflows using N8N to streamline tasks. Specialized in integrating disparate APIs and services to solve real-world efficiency problems."
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Personal Portfolio & Open Source",
      duration: "2023",
      description: "Mastered modern UI/UX principles using Tailwind CSS and Framer Motion. Focused on building responsive, accessible, and highly interactive web interfaces."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block" />
              
              <div className={`sm:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="hidden sm:block w-5/12" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background z-10 mt-1.5" />

                <div className="w-full sm:w-5/12">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border hover:shadow-elegant transition-all duration-300 hover:border-primary/50 group">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-primary font-medium mb-4">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
