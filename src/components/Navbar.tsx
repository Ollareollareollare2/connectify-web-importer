import { useState, useEffect } from "react";
import { Menu, X, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "top" },
    { name: "Community", href: "community" },
    { name: "Players", href: "top-players" },
    { name: "Resources", href: "resources" },
  ];
/* <img 
src="public/assetsupload/0960f71e-449c-4316-b652-9cff4011d4f4.png" 
alt="Judgment Fleet Logo" 
className="h-10 w-auto"
/> */
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-jf-dark/80 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" onClick={() => scrollToSection('top')}>
           
            <span className="text-2xl font-display font-bold text-white">
              Judgment<span className="text-[#D946EF]">Fleet</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-[#D946EF] hover:bg-[#D946EF]/90"
              onClick={() => window.open('https://twitter.com/JudgmentFleet', '_blank')}
            >
              <Twitter size={18} className="mr-2" />
              Follow on Twitter
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-jf-gray border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className="text-gray-300 hover:text-white py-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-[#D946EF] hover:bg-[#D946EF]/90 w-full"
                onClick={() => window.open('https://twitter.com/JudgmentFleet', '_blank')}
              >
                <Twitter size={18} className="mr-2" />
                Follow on Twitter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
