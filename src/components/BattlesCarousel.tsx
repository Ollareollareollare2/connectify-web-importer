
import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { Gamepad2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BattleReplay {
  imageUrl: string;
  replayUrl: string;
  title: string;
  description: string;
  player: string;
}

const BattlesCarousel = () => {
  const { translations, locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const battleReplays: BattleReplay[] = [
    {
      imageUrl: "/lovable-uploads/08a845eb-b51d-4060-a584-b546b5f9ef7a.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen9ubers-778767?p2",
      title: locale === "it" ? "Ubers - Turn 26" : "Ubers - Turn 26",
      description: locale === "it" ? "Zapdos vs Zacian" : "Zapdos vs Zacian",
      player: "paispaz"
    },
    {
      imageUrl: "/lovable-uploads/b80c9f4c-e630-41ac-951b-d00392fad22d.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen9ou-781119?p2",
      title: locale === "it" ? "OverUsed - Turn 17" : "OverUsed - Turn 17",
      description: locale === "it" ? "Suicune vs Wolves" : "Suicune vs Wolves",
      player: "vinn0558"
    },
    {
      imageUrl: "/lovable-uploads/5907d0fc-8096-49da-88b6-34e98bb535fa.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen7ou-781034?p2",
      title: locale === "it" ? "Gen 7 OU - Turn 12" : "Gen 7 OU - Turn 12",
      description: locale === "it" ? "Magearna vs Lurantis" : "Magearna vs Lurantis",
      player: "shootouts"
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % battleReplays.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [battleReplays.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % battleReplays.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + battleReplays.length) % battleReplays.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl">
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-all"
        aria-label={locale === "it" ? "Precedente" : "Previous"}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-all"
        aria-label={locale === "it" ? "Successivo" : "Next"}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Carousel items */}
      <div 
        className="flex transition-transform duration-500 h-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {battleReplays.map((battle, index) => (
          <div 
            key={index} 
            className="min-w-full h-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src={battle.imageUrl} 
              alt={battle.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{battle.title}</h2>
              <p className="text-xl mb-4">{battle.description}</p>
              
              {/* Round button with player name on top */}
              <div className="relative mt-4 text-center">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-lg">
                  {battle.player}
                </div>
                <a 
                  href={battle.replayUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="rounded-full w-16 h-16 bg-[#D946EF] hover:bg-[#D946EF]/90 shadow-lg"
                    size="icon"
                  >
                    <Gamepad2 className="h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {battleReplays.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BattlesCarousel;
