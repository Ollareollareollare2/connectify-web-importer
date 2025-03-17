
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition * 0.002);
      const translateY = scrollPosition * 0.4;
      
      if (opacity >= 0) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div 
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 transition-all duration-200"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs md:text-sm font-medium animate-fade-in">
              Beautifully crafted experiences
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in text-balance">
            Elegant design meets intuitive functionality
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up text-balance">
            Experience the perfect harmony of form and function, where every detail is thoughtfully considered.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <a
              href="#products"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Products
            </a>
            <a
              href="#features"
              className="px-8 py-3 border border-border rounded-full font-medium transition-all duration-300 hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.1) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Backdrop Circles */}
      <div className="absolute top-1/4 -left-32 md:-left-48 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl animate-subtle-float" />
      <div className="absolute bottom-1/4 -right-32 md:-right-48 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl animate-subtle-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
