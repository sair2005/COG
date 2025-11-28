import { motion } from "framer-motion";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const team = [
    {
      name: "Alexandra Chen",
      role: "Creative Director",
      description: "15+ years crafting iconic brand identities",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Designer",
      description: "Award-winning UI/UX and visual design expert",
    },
    {
      name: "Sofia Andersson",
      role: "Brand Strategist",
      description: "Transforming business visions into powerful brands",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every pixel, every curve, every concept",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision combined with our expertise creates magic",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Designs that don't just look good—they drive results",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We live and breathe creativity, it's not just work—it's our calling",
    },
  ];

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
              About <span className="text-gradient-gold">Clans of Graphics</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              We are a collective of visionary designers, strategists, and storytellers dedicated to
              transforming brands into unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p> Clans of Graphics began as a shared dream between four close friends — <strong>Sai Raswanth</strong>, <strong>Karmugilan</strong>, <strong>Satham Ussen</strong>, and <strong>Dinesh Kumar</strong>. What started inside a college classroom as simple creative experiments slowly transformed into a vision to build something meaningful. Our friendship, passion for design, and belief in creativity brought us together to form a team that thinks, dreams, and creates as one. </p> <p> From day one, we understood that design is more than visuals — it is communication. So we built Clans of Graphics with a clear purpose: to help every brand tell its story with clarity, confidence, and creativity. Each founder brings a unique strength: Sai with modern creative vision, Karmugilan with strategic thinking, Satham with detail-driven perfection, and Dinesh with innovative problem-solving. These different minds coming together shaped the identity of our company. </p> <p> Today, Clans of Graphics stands as a growing design studio built on trust, teamwork, and passion. From logos and branding to websites and visual content, we focus on creating designs that truly connect with people. Our journey, which started with four friends in college, continues with every brand we help build — and we believe this is just the beginning of something much bigger. </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <img src="src/assets/sai.png" alt="SAI RASWANTH RD" className="w-full h-60 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground font-body">SAI RASWANTH RD</p>
              </div>
              <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <img src="src/assets/kar.png" alt="KARMUGILAN T" className="w-full h-60 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground font-body">KARMUGILAN T</p>
              </div>
              <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <img src="src/assets/satham.png" alt="SATHAM USSEN M" className="w-full h-60 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground font-body">SATHAM USSEN M</p>
              </div>
              <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <img src="src/assets/dinesh.png" alt="DINESH KUMAR R" className="w-full h-60 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground font-body">DINESH KUMAR R</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg text-center hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
