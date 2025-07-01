"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Component for fade-in animation when element is in view
const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-gradient">Lazy Chef</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Our mission is to make cooking accessible, enjoyable, and stress-free for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div className="rounded-lg overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center"
                >
                  <span className="text-6xl">👨‍🍳</span>
                </motion.div>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Lazy Chef was born out of a simple frustration: cooking delicious meals shouldn't require professional training or hours in the kitchen.
                </p>
                <p className="mb-4">
                  Founded in 2023, our team of food enthusiasts and tech innovators came together to create a platform that simplifies the cooking process without sacrificing flavor or nutrition.
                </p>
                <p>
                  We believe that everyone deserves to enjoy homemade meals that are both satisfying and simple to prepare. Our curated recipes focus on minimal ingredients, straightforward techniques, and maximum flavor.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-to-r from-background to-primary/5">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="card text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p>We promote seasonal ingredients and minimal food waste through smart planning and storage tips.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <div className="card text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p>We design recipes that use common ingredients and equipment, making cooking accessible to everyone.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.3}>
              <div className="card text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p>We foster a supportive community where home cooks can share tips, modifications, and cooking wins.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & Head Chef", emoji: "👨‍🍳" },
              { name: "Maya Patel", role: "Nutrition Specialist", emoji: "🥗" },
              { name: "James Wilson", role: "UX Designer", emoji: "🎨" },
              { name: "Sophia Lee", role: "Content Creator", emoji: "📱" }
            ].map((member, index) => (
              <FadeInWhenVisible key={member.name} delay={0.1 * index}>
                <motion.div 
                  className="card text-center"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-3xl mx-auto mb-4">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="opacity-80">{member.role}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-6">Join Our Culinary Journey</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Ready to transform your cooking experience? Explore our recipes and start creating delicious meals with minimal effort.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="/" className="btn btn-primary">
                Explore Recipes
              </a>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
}
