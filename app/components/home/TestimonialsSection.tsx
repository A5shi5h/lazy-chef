"use client";

import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

// Testimonial component
const Testimonial = ({ quote, author, role }: { quote: string, author: string, role: string }) => {
  return (
    <motion.div 
      className="card mb-6"
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm opacity-70">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInWhenVisible delay={0.1}>
            <Testimonial 
              quote="Lazy Chef has completely transformed my weeknight dinners. I can now make delicious meals in half the time!" 
              author="Sarah Johnson"
              role="Busy Parent"
            />
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <Testimonial 
              quote="As a college student, I never thought I could cook proper meals. Lazy Chef made it possible and affordable." 
              author="Mike Chen"
              role="Student"
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
