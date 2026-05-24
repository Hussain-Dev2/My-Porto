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
    {
      id: 5,
      title: "Super Menu - Digital Restaurant Platform",
      description: "A digital menu platform for Iraqi restaurants enabling customers to browse menus and order via WhatsApp. Built with Next.js and Supabase, featuring real-time data, restaurant management, and SEO-optimized menus for multiple restaurants.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/Hussain-Dev2/Super-Menu",
      live: "https://super-menu-omega.vercel.app/"
    },
    {
      id: 6,
      title: "Wahid Iraq - Media Downloader",
      description: "A multi-platform media downloader supporting YouTube, TikTok, Instagram, Twitter, Facebook, and more. Users can paste any link and download content with a single click.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Hussain-Dev2/RDA",
      live: "https://rda-rust.vercel.app/"
    },
    {
      id: 7,
      title: "Shawarma Nazo Land",
      description: "A restaurant landing page with an interactive digital menu for Shawarma Nazo Land, allowing customers to view the menu and order via WhatsApp seamlessly.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Hussain-Dev2/Shawarma-Nazo-Land",
      live: "https://shawarma-nazo-land.vercel.app/"
    },
    {
      id: 8,
      title: "Tabasco Al Sham",
      description: "A restaurant landing page featuring a digital menu for Tabasco Al Sham, integrated with WhatsApp ordering for a smooth customer experience.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Hussain-Dev2/Tabasco-Al-Sham",
      live: "https://tabasco-al-sham.vercel.app/"
    },
    {
      id: 9,
      title: "Cliker App",
      description: "An interactive clicker/counter application built with Next.js, designed for fun and engagement with a clean, responsive interface.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "CSS"],
      github: "https://github.com/Hussain-Dev2/Clicker-App",
      live: "https://clicker-app-taupe.vercel.app/"
    },
    {
      id: 10,
      title: "TLeg Dashboard - Service Bot",
      description: "A management dashboard for Telegram service bots built with Express.js. Handles user management, service requests, and real-time bot analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Express.js", "JavaScript", "Telegram Bot API"],
      github: "https://github.com/Hussain-Dev2/tleg-dashboard",
      live: "https://github.com/Hussain-Dev2/tleg-dashboard"
    },
    {
      id: 11,
      title: "TLYGRM Services Bot",
      description: "An automated Telegram bot providing various services including media downloading, content management, and user interaction through an intuitive bot interface.",
      image: "https://images.unsplash.com/photo-1611605651278-2cb2b5b540a0?w=500&h=300&fit=crop",
      tech: ["JavaScript", "Node.js", "Telegram Bot API"],
      github: "https://github.com/Hussain-Dev2/tlygrm_serves_bot",
      live: "https://github.com/Hussain-Dev2/tlygrm_serves_bot"
    },
    {
      id: 12,
      title: "Nexa Digital - Social Media Marketing",
      description: "A professional landing page for digital marketing services, showcasing social media management, content creation, and brand strategy offerings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/Hussain-Dev2/Landin_Page-SM",
      live: "https://landin-page-sm.vercel.app/"
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