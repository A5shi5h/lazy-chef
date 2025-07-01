"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Cooking?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of home cooks who have discovered the joy of effortless cooking.  
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/gallery" className="btn btn-primary">
                Browse Recipes
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/contact" className="btn bg-foreground/10 hover:bg-foreground/20 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
