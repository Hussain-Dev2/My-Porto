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
      title: "N8N Automation Simple Accountant",
      description: "A simple accounting automation tool built with N8N, allowing users to automate their financial workflows with ease.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["N8N", "JavaScript", "API Integration"],
  github: "https://github.com/Hussain-Dev2",
  live: "#"
    },
    {
      id: 3,
      title: "Order Management System",
      description: "A responsive weather dashboard displaying real-time weather data, forecasts, and interactive maps with location-based services.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Express.js", "OpenWeather API", "Chart.js"],
  github: "https://github.com/Hussain-Dev2",
  live: "#"
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
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce facility with cart management, payment gateway integration, and order tracking.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/Hussain-Dev2",
      live: "#"
    },
    {
      id: 6,
      title: "Task Management Dashboard",
      description: "Collaborative task management tool for teams, featuring real-time updates, kanban boards, and progress analytics.",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&h=300&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/Hussain-Dev2",
      live: "#"
    },
    {
      id: 7,
      title: "AI Content Generator",
      description: "SaaS application leveraging OpenAI API to help users generate blog posts, social media captions, and marketing copy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tech: ["Next.js", "OpenAI API", "TypeScript", "Vercel"],
      github: "https://github.com/Hussain-Dev2",
      live: "#"
    },
    {
      id: 8,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced filtering, map integration, and virtual tour capabilities for agents and buyers.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tech: ["React", "Google Maps API", "Node.js", "MongoDB"],
      github: "https://github.com/Hussain-Dev2",
      live: "#"
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