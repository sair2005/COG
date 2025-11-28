import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: <a href="https://chendhuran.ac.in/" target="_blank" rel="noopener noreferrer">AVM.S.KARTHICK</a>,
      role: "CEO, Chendhuran College Of Engineering and Technology",
      content:
        "Clans of Graphics transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The new logo and branding materials have significantly elevated our market presence.",
      rating: 5,
    },
    {
      name: <a href="#" target="_blank" rel="noopener noreferrer">PALANISAMY</a>,
      role: "Founder, Saisaran Academy",
      content:
        "The packaging designs created by this team are absolutely stunning. Our products now stand out on shelves, and customer feedback has been overwhelmingly positive. True professionals who understand both aesthetics and market dynamics.",
      rating: 5,
    },
    {
      name: <a href="#" target="_blank" rel="noopener noreferrer">ABIRAMI GOLD DALS</a>,
      role: "Managing Director",
      content:
        "Working with Clans of Graphics was a seamless experience. They listened to our needs, offered creative solutions, and delivered beyond what we imagined. The UI/UX work they did for our app is exceptional.",
      rating: 5,
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
              Client <span className="text-gradient-gold">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Don't just take our word for it—hear what our clients have to say about working with us
            </p>
          </motion.div>
        </div>
      </section>



      {/* Testimonials Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card hover-lift">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-display font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gold">{testimonial.role}</p>
                  </div>
                </Card>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-body">
              Let's create something amazing together. Your success story starts here.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
