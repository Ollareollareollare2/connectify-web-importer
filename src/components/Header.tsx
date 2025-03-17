
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="relative z-10 text-xl md:text-2xl font-medium"
        >
          Beautifully Minimal
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 link-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 p-2"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <span 
              className={cn(
                "block h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
              )}
            ></span>
            <span 
              className={cn(
                "block h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "w-4"
              )}
            ></span>
            <span 
              className={cn(
                "block h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-6"
              )}
            ></span>
          </div>
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background z-0 transition-all duration-500 md:hidden",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
