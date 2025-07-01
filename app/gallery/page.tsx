"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Pasta Primavera",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80",
    description: "A light and flavorful pasta dish loaded with fresh spring vegetables."
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?auto=format&fit=crop&q=80",
    description: "Creamy avocado spread on artisanal sourdough with a sprinkle of red pepper flakes."
  },
  {
    id: 3,
    title: "Berry Smoothie Bowl",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1626222628030-fb051dd2e867?auto=format&fit=crop&q=80",
    description: "A refreshing blend of mixed berries topped with granola and fresh fruit."
  },
  {
    id: 4,
    title: "Vegetable Stir Fry",
    category: "Asian",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    description: "A quick and healthy stir fry with seasonal vegetables and a savory sauce."
  },
  {
    id: 5,
    title: "Chocolate Chip Cookies",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
    description: "Classic homemade cookies with the perfect balance of chewy center and crispy edges."
  },
  {
    id: 6,
    title: "Greek Salad",
    category: "Mediterranean",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
    description: "A refreshing mix of cucumber, tomato, olives, and feta cheese with olive oil dressing."
  },
  {
    id: 7,
    title: "Beef Tacos",
    category: "Mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80",
    description: "Seasoned ground beef in soft tortillas with fresh toppings and homemade salsa."
  },
  {
    id: 8,
    title: "Mushroom Risotto",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80",
    description: "Creamy arborio rice slowly cooked with mushrooms and parmesan cheese."
  }
];

// Get unique categories
const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

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

// Gallery item component
const GalleryItem = ({ item }: { item: typeof galleryItems[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden rounded-lg aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-end"
          >
            <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-white/80 text-sm mb-2">{item.category}</p>
            <p className="text-white/90 text-sm">{item.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter gallery items based on active category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              Recipe <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Browse our collection of delicious and easy-to-make recipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-foreground/5 hover:bg-foreground/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Cooking?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Try our easy recipes today and transform your cooking experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/" className="btn btn-primary">
                Get Started
              </Link>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
}
