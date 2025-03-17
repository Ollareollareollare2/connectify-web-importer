
import { motion } from "framer-motion";
import PlayerCard from "@/components/PlayerCard";

const TopMembers = () => {
  const topPlayers = [
    {
      id: "player1",
      name: "Empo",
      image: "https://www.smogon.com/forums/data/avatars/m/288/288721.jpg?1730056245",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "September 2015",
      achievements: [
        "Official Smogon Tournament x1", 
        "Smogon Tournament x3", 
        "Smogon Masters x1",
        "Smogon Premier League x2",
        "World Cup of Pokemon x1",
        "Smogon Championship Circuit x1"
      ]
    },
    {
      id: "player2",
      name: "Santu",
      image: "https://www.smogon.com/forums/data/avatars/l/335/335670.jpg?1690812147",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU, Lower Tiers",
      joinDate: "June 2016",
      achievements: [
        "Smogon Grand Slam x1", 
        "World Cup of Pokemon x1",
        "GEN 6 OU Circuit x1"
      ]
    },
    {
      id: "player3",
      name: "Punny",
      image: "https://www.smogon.com/forums/data/avatars/l/310/310107.jpg?1714342133",
      role: "GEN 7 OU, GEN 8 OU, GEN 9 OU, Lower Tiers",
      joinDate: "July 2014",
      achievements: [
        "Smogon Grand Slam x1", 
        "Smogon Premier League x1",
        "World Cup of Pokemon x1"
      ]
    },
    {
      id: "player4",
      name: "Tricking",
      image: "https://www.smogon.com/forums/media/avatars/whiscash.gif.m.1",
      role: "Every Metagame",
      joinDate: "July 2014",
      achievements: [
        "Official Ladder Tournament x2", 
        "Smogon Premier League x2",
        "World Cup of Pokemon x1"
      ]
    },
    {
      id: "player4",
      name: "Will of Fire",
      image: "https://www.smogon.com/forums/media/avatars/skiploom.gif.m.1",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "February 2014",
      achievements: [
        "Ojama Money Tour x1", 
        "Blunder Money Tour x1",
        "World Cup of Pokemon x1",

      ]
    },
    {
      id: "player4",
      name: "Hellpowna",
      image: "https://www.smogon.com/forums/data/avatars/m/42/42105.jpg?1736428854",
      role: "GEN 2 OU, GEN 3 OU, GEN 4 OU",
      joinDate: "November 2009",
      achievements: [
        "Smogon Premier League x1", 
        "Smogon Classic [Playoffs]",
      ]
    },
    {
      id: "player4",
      name: "Mada",
      image: "  https://www.smogon.com/forums/data/avatars/l/513/513753.jpg?1734134095",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "April 2020",
      achievements: [
        "Smogon Premier League x1", 
      ]
    },
    {
      id: "player4",
      name: "Prinz",
      image: "https://www.smogon.com/forums/data/avatars/l/122/122818.jpg?1695033525",
      role: "Every OU",
      joinDate: "January 2012",
      achievements: [
        "World Cup of Pokemon x1",
        "Smogon Premier League x1", 
        "Official Ladder Tournament x1"
      ]
    },
    {
      id: "player4",
      name: "Kebab mlml",
      image: "https://www.smogon.com/forums/data/avatars/m/294/294482.jpg?1533056564",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "October 2015",
      achievements: [
        "World Cup of Pokemon x1",
        "Smogon Premier League x1", 
      ]
    },
    {
      id: "player4",
      name: "Raiza",
      image: "https://www.smogon.com/forums/data/avatars/l/155/155229.jpg?1742158346",
      role: "GEN 5 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "August 2012",
      achievements: [
        "World Cup of Pokemon x1",
        "Smogon Premier League x2",
        "GEN 5 OU Circuit x1" 
      ]
    },
    {
      id: "player4",
      name: "Niko",
      image: "https://www.smogon.com/forums/data/avatars/m/283/283197.jpg?1714264838",
      role: "GEN 6 OU, GEN 7 OU, GEN 8 OU, GEN 9 OU",
      joinDate: "August 2015",
      achievements: [
        "World Cup of Pokemon x1",
        "Smogon Champions League x1",
        
      ]
    },
    {
      id: "player4",
      name: "LuckOverSkill",
      image: "https://www.smogon.com/forums/data/avatars/l/70/70861.jpg?1740989081",
      role: "GEN 5 OU",
      joinDate: "August 2015",
      achievements: [
        "World Cup of Pokemon x1",
       
        
      ]
    },
    {
      id: "player4",
      name: "Laroxyl",
      image: "https://www.smogon.com/forums/data/avatars/l/265/265734.jpg?1612354134",
      role: "Every OU, Little Cup",
      joinDate: "March 2015",
      achievements: [
        "GEN 1 OU Circuit x1",
        "SCL 2023: 8-2",
        "World Cup of Pokemon [Finals]",
        "Smogon Champions League [Semifinals]"

       
        
      ]
    },
    {
      id: "player4",
      name: "Pais",
      image: "https://www.smogon.com/forums/data/avatars/l/268/268987.jpg?1741979721",
      role: "GEN 8 OU, GEN 9 OU",
      joinDate: "April 2015",
      achievements: [
        "WCoP 2024: 5-1",
        "SCL 2024: 6-3",
        "World Cup of Pokemon [Finals]",
        "Smogon Champions League [Semifinals]"
       
        
      ]
    },
  ];
  return (
    <section id="top-players" className="py-16 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">I Nostri <span className="text-[#D946EF]">Giocatori</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">I migliori giocatori della nostra community, pronti a condividere le loro strategie e conoscenze.</p>
        </motion.div>

        

        {/* Player profiles in a grid - all visible at once */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {topPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <PlayerCard {...player} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMembers;
