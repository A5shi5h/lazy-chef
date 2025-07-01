"use client";

import { useRef } from "react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

export default function HowItWorksSection() {
  // Refs for scroll animations
  const targetRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      className="section parallax" 
      ref={targetRef} 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80')" 
      }}
    >
      <div className="container text-text-light">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInWhenVisible delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Choose Recipes</h3>
              <p className="text-white/80">Browse our extensive collection of easy-to-make recipes</p>
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Get Ingredients</h3>
              <p className="text-white/80">Use our auto-generated shopping list for a quick grocery run</p>
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Cook & Enjoy</h3>
              <p className="text-white/80">Follow our simple step-by-step instructions and enjoy your meal</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
