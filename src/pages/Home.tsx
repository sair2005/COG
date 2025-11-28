import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Palette, Lightbulb, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const highlights = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning designs that captivate and inspire",
    },
    {
      icon: Palette,
      title: "Unique Identity",
      description: "Crafting distinctive brands that stand out",
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "Blending creativity with business strategy",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Designs that drive real business results",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Where Creativity
              <br />
              <span className="text-gradient-gold">Becomes Identity</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming visions into stunning visual experiences that elevate your brand
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
                <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-gold-foreground text-lg px-8 py-6"
                >
                <Link to="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary-foreground rounded-full" />
              </div>
            </motion.div>
            </section>

            {/* Highlights Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 rounded-lg bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                  <highlight.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground font-body">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-body">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
