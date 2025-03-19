import { useState, useEffect } from "react";
import { Menu, X, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { translations } = useLanguage();

  // State to track active section in homepage
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track sections when on homepage
      if (isHomePage) {
        const sections = ["top", "community", "top-players", "resources"];
        
        let currentSection = "top";
        let minDistance = Infinity;
        
        // Trova la sezione più vicina al viewport
        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distanceFromTop = Math.abs(rect.top);
            if (distanceFromTop < minDistance) {
              minDistance = distanceFromTop;
              currentSection = sectionId;
            }
          }
        });
        
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = async (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // Piccolo delay per permettere al menu mobile di chiudersi
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: translations.home, href: "top" },
    { name: translations.community, href: "community" },
    { name: translations.players, href: "top-players" },
    { name: translations.resources, href: "resources" },
    { name: "Best Games", path: "/best-games" },
    { name: "FAQ", path: "/faq" },
  ];

  // Helper to check if link is active
  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.path) {
      return location.pathname === link.path;
    } 
    return isHomePage && (activeSection === link.href || location.hash === `#${link.href}`);
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.path && location.pathname === link.path) {
      // If we're already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.path) {
      // Otherwise navigate to the page
      navigate(link.path);
    } else {
      // Handle homepage section navigation
      scrollToSection(link.href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-jf-dark/80 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center">
          {/* Logo - left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-white">
                Judgment<span className="text-[#D946EF]">Fleet</span>
              </span>
            </Link>
          </div>

          {/* Navigation - center */}
          <nav className="hidden md:flex items-center justify-center flex-grow ml-auto">
            <div className="max-w-4xl flex items-center gap-20">
              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative transition-colors ${
                      isLinkActive(link) 
                        ? "text-white font-medium" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                  >
                    {link.name}
                    {isLinkActive(link) && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D946EF]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    className={`relative transition-colors ${
                      isLinkActive(link) 
                        ? "text-white font-medium" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleNavClick(link);
                    }}
                  >
                    {link.name}
                    {isLinkActive(link) && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D946EF]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                )
              ))}
            </div>
          </nav>

          {/* Buttons - right */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <LanguageSelector />
            <Button 
              className="bg-[#D946EF] hover:bg-[#D946EF]/90"
              onClick={() => window.open('https://twitter.com/JudgmentFleet', '_blank')}
            >
              <Twitter size={18} className="mr-2" />
              {translations.followOnTwitter}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <LanguageSelector />
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-gray-300 hover:text-white py-2 transition-colors ${
                      isLinkActive(link) ? "text-white font-medium pl-2 border-l-2 border-[#D946EF]" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    className={`text-gray-300 hover:text-white py-2 transition-colors ${
                      isLinkActive(link) ? "text-white font-medium pl-2 border-l-2 border-[#D946EF]" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button 
                className="bg-[#D946EF] hover:bg-[#D946EF]/90 w-full"
                onClick={() => window.open('https://twitter.com/JudgmentFleet', '_blank')}
              >
                <Twitter size={18} className="mr-2" />
                {translations.followOnTwitter}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
