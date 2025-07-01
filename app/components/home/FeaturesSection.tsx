"use client";

import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <motion.div 
      className="card w-full md:w-[calc(33.333%-1rem)] mb-6"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section id="features" className="section bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-gradient">Lazy Chef</span>
          </h2>
        </FadeInWhenVisible>
        
        <div className="flex flex-wrap justify-between gap-6">
          <FadeInWhenVisible delay={0.1}>
            <FeatureCard 
              icon="🍳" 
              title="Quick Recipes" 
              description="Delicious meals ready in 30 minutes or less. Perfect for busy weeknights when you need something fast."
            />
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <FeatureCard 
              icon="📱" 
              title="Smart Shopping Lists" 
              description="Automatically generate shopping lists from your selected recipes. Never forget an ingredient again."
            />
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.3}>
            <FeatureCard 
              icon="🥗" 
              title="Dietary Options" 
              description="Filter recipes by dietary preferences including vegetarian, vegan, gluten-free, and more."
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
