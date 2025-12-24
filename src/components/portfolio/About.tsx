import { motion } from "framer-motion";
import logoImage from "@/assets/nexa-logo.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating seamless digital experiences through code and design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={logoImage}
                alt="NEXA-DIGITAL Logo"
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant border border-white/10"
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Hello! I'm Hussain
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer and N8N Automation Expert with 1 year of experience 
                creating digital solutions that combine beautiful design with robust functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in tech started with a curiosity for how things work, and it has evolved into 
                a career focused on building user-centered applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical writing and mentorship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 bg-card rounded-lg border hover:shadow-glow transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-2xl font-bold text-foreground">1 Year</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-card rounded-lg border hover:shadow-glow transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-semibold text-primary mb-2">Projects</h4>
                <p className="text-2xl font-bold text-foreground">3 Completed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;