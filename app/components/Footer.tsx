"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-bold mb-4 md:mb-0">
            <span className="text-gradient">Lazy Chef</span>
          </p>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm opacity-70">
          <p>© {new Date().getFullYear()} Lazy Chef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
