import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Doctor-Appoint",
      description: "A modern appointment scheduling solution built with React, Node.js, and Stripe integration. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Next.js", "Postgress", "Strapi"],
      github: "https://github.com/Hussain-Dev2",
      live: "https://doctorapp-kohl.vercel.app/"
    },
    {
      id: 2,
      title: "NexaDigital - Image & PDF Tools",
      description: "A comprehensive suite of free, in-browser tools for compressing, converting, editing images, and managing PDFs.",
      image: "/Nexa-Digital.png",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/Hussain-Dev2/nexa-next.git",
      live: "https://nexadigital.dev/"
    },
    {
      id: 3,
      title: "DebtTrack - Client Management",
      description: "A client management dashboard enabling users to track clients, monitor payments, and manage active projects efficiently.",
      image: "/debttrack-dashboard.png",
      tech: ["Next.js", "React", "Dashboard"],
      github: "https://github.com/Hussain-Dev2/DashBord.git",
      live: "https://dashboard.nexadigital.dev/"
    },
    {
      id: 4,
      title: "Habit App",
      description: "A comprehensive habit tracking application to help you build and maintain positive habits.",
      image: "/habitapp.png",
      tech: ["React", "Next.js", "Tailwind"],
      github: "https://github.com/Hussain-Dev2/habit-app-",
      live: "https://habit-app-tawny.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase our skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm group flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </Button>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3 pt-0 mt-auto">
                  <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild className="flex-1 group/btn">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;