import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Automation with N8N",
      excerpt: "Discover how low-code automation tools like N8N are revolutionizing the way businesses handle workflows and data integration.",
      date: "Oct 15, 2023",
      readTime: "5 min read",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable Web Apps with Next.js",
      excerpt: "A deep dive into server-side rendering, static site generation, and how Next.js optimizes performance for modern web applications.",
      date: "Nov 2, 2023",
      readTime: "7 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Why UI/UX Matters in Modern Software",
      excerpt: "User experience is more than just aesthetics. Learn why intuitive design is crucial for user retention and product success.",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts and articles on technology, automation, and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm group flex flex-col">
                <div className="relative overflow-hidden h-48">
                   <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors line-clamp-2 group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3 mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="mt-auto">
                  <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-primary/80 hover:no-underline">
                    <a href="#" className="flex items-center">
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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

export default Blog;
