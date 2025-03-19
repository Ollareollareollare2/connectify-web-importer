
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JudgmentFleetBanner from "../components/JudgmentFleetBanner";

interface GameData {
  id: number;
  imageUrl: string;
  replayUrl: string;
  tournament: string;
  phase: string;
  format: string;
  players: string;
  description: string;
}

const BestGames = () => {
  const { locale } = useLanguage();
  
  // Ensure scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const games: GameData[] = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/08a845eb-b51d-4060-a584-b546b5f9ef7a.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen9ubers-778767?p2",
      tournament: "Smogon Tour",
      phase: "Semifinals",
      format: "Gen 9 Ubers",
      players: "paispaz vs Opponent",
      description: locale === "it" 
        ? "Un intenso match della fase finale dove Zapdos e Zacian si affrontano in uno scontro decisivo al turn 26." 
        : "An intense match in the final phase where Zapdos and Zacian face off in a decisive battle at turn 26."
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/b80c9f4c-e630-41ac-951b-d00392fad22d.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen9ou-781119?p2",
      tournament: "Smogon Tour",
      phase: "Quarterfinals",
      format: "Gen 9 OU",
      players: "vinn0558 vs Challenger",
      description: locale === "it" 
        ? "Match strategico di OverUsed con Suicune che affronta i Wolves in una partita tattica al turn 17." 
        : "Strategic OverUsed match with Suicune facing off against Wolves in a tactical game at turn 17."
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/5907d0fc-8096-49da-88b6-34e98bb535fa.png",
      replayUrl: "https://replay.pokemonshowdown.com/smogtours-gen7ou-781034?p2",
      tournament: "Gen 7 Championship",
      phase: "Group Stage",
      format: "Gen 7 OU",
      players: "shootouts vs Rival",
      description: locale === "it" 
        ? "Una classica battaglia di Gen 7 OU con Magearna contro Lurantis che dimostra la profondità strategica del metagame al turn 12." 
        : "A classic Gen 7 OU battle featuring Magearna against Lurantis showcasing the strategic depth of the metagame at turn 12."
    }
  ];

  return (
    <div className="min-h-screen bg-jf-dark text-white">
      <Navbar />
      <JudgmentFleetBanner />
      
      <div className="pt-32 pb-24 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Best <span className="text-[#D946EF]">Games</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {locale === "it" 
                ? "Una selezione dei migliori match giocati dai membri di Judgment Fleet nei tornei competitivi." 
                : "A selection of the best matches played by Judgment Fleet members in competitive tournaments."}
            </p>
          </motion.div>

          <div className="space-y-24">
            {games.map((game, index) => (
              <motion.div 
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Game Screenshot */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#D946EF]/20 rounded-xl blur-xl z-0 opacity-70"></div>
                    <a 
                      href={game.replayUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative block z-10 overflow-hidden rounded-xl border border-white/10"
                    >
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-[#D946EF] rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform">
                          <ExternalLink size={28} />
                        </div>
                      </div>
                      <img 
                        src={game.imageUrl} 
                        alt={`${game.tournament} - ${game.players}`} 
                        className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                  </div>
                </div>
                
                {/* Game Info */}
                <div className="lg:w-1/2">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-block px-3 py-1 bg-jf-blue/20 text-jf-blue rounded-full text-sm font-medium">
                        {game.tournament}
                      </span>
                      <span className="inline-block px-3 py-1 bg-[#D946EF]/20 text-[#D946EF] rounded-full text-sm font-medium">
                        {game.phase}
                      </span>
                      <span className="inline-block px-3 py-1 bg-jf-purple/20 text-jf-purple rounded-full text-sm font-medium">
                        {game.format}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold">
                      {game.players}
                    </h2>
                    
                    <p className="text-lg text-gray-300">
                      {game.description}
                    </p>
                    
                    <a 
                      href={game.replayUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#D946EF] hover:text-[#D946EF]/80 transition-colors mt-4"
                    >
                      {locale === "it" ? "Guarda il replay" : "Watch replay"} 
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BestGames;
