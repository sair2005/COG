import { motion } from "framer-motion";
import { Palette, Package, Smartphone, Share2, FileText, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description:
        "Crafting memorable logos that embody your brand's essence and leave a lasting impression.",
      features: ["Custom concepts", "Multiple revisions", "Vector files", "Brand guide"],
    },
    {
      icon: Layers,
      title: "Branding & Identity",
      description:
        "Complete brand identity systems that tell your story and connect with your audience.",
      features: ["Brand strategy", "Visual identity", "Color palette", "Typography system"],
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "Eye-catching packaging that makes your products stand out on shelves and online.",
      features: ["3D mockups", "Print-ready files", "Structural design", "Label design"],
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description:
        "Intuitive digital experiences that delight users and drive engagement.",
      features: ["User research", "Wireframes", "Prototypes", "User testing"],
    },
    {
      icon: Share2,
      title: "Social Media Graphics",
      description:
        "Scroll-stopping visuals that amplify your social presence and boost engagement.",
      features: ["Post templates", "Story designs", "Ad creatives", "Brand consistency"],
    },
    {
      icon: FileText,
      title: "Marketing Materials",
      description:
        "Professional print and digital materials that communicate your message effectively.",
      features: ["Brochures", "Flyers", "Posters", "Business cards"],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Comprehensive design solutions tailored to elevate your brand and captivate your audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-body mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-body text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "01", title: "Discovery", description: "Understanding your vision and goals" },
              { number: "02", title: "Strategy", description: "Crafting a creative roadmap" },
              { number: "03", title: "Design", description: "Bringing concepts to life" },
              { number: "04", title: "Delivery", description: "Polished, ready-to-use assets" },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-display font-bold text-gold/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-body">
              Let's discuss your project and create something amazing together
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
