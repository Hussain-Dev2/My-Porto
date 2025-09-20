import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const openEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const to = 'dev.hussain.iq@gmail.com';
    const gmailApp = `googlegmail://co?to=${to}`; // Gmail app deep link
    const mailto = `mailto:${to}`;
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Try opening Gmail app; if it doesn't open within 700ms, fallback to mailto
      window.location.href = gmailApp;
      setTimeout(() => {
        window.location.href = mailto;
      }, 700);
    } else {
      // On desktop open Gmail web compose in a new tab
      window.open(gmailWeb, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Hussain
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting digital experiences through code and design. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Hussain-Dev2" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hussain-alwaily-6a0663357/" },
                { icon: Twitter, label: "Twitter", href: "https://x.com/HussainDev44678" },
                { icon: Mail, label: "Email", href: "mailto:dev.hussain.iq@gmail.com" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={social.label === 'Email' ? openEmail : undefined}
                    target={social.label === 'Email' ? undefined : '_blank'}
                    rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-smooth"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Hussain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;