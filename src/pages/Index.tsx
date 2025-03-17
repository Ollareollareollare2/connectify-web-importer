
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Community from "../components/Community";
import TopMembers from "../components/TopMembers";
import Footer from "../components/Footer";
import JudgmentFleetBanner from "../components/JudgmentFleetBanner";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-jf-dark text-white relative">
      <Navbar />
      <JudgmentFleetBanner />
      <main id="top">
        <Hero />
        <Community />
        <TopMembers />
      </main>
      <Footer />
      
      {/* Persistent navigation button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: visible ? 1 : 0.7, 
          scale: visible ? 1 : 0.9,
          y: visible ? 0 : 10 
        }}
        transition={{ duration: 0.3 }}
      >
        <Button 
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 bg-[#D946EF] hover:bg-[#D946EF]/90 shadow-lg"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
