
import { motion } from "framer-motion";

const Community = () => {
  return (
    <section id="community" className="py-24 px-4 md:px-6 bg-gradient-to-b from-jf-dark to-jf-gray">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-3 py-1 bg-jf-blue/20 text-jf-blue rounded-full text-sm font-medium mb-4">
              La Nostra Community
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">L'Élite del Pokémon Competitivo Italiano</h2>
            <p className="text-lg text-gray-300 mb-6">
              Judgment Fleet non è solo un server Discord – è il punto di riferimento per i migliori giocatori italiani di Pokémon competitivo secondo le regole Smogon. Qui si riuniscono campioni nazionali, esperti di teambuilding e strateghi di alto livello.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                "Tornei settimanali con premi esclusivi",
                "Consulenze di teambuilding da parte di esperti del formato",
                "Analisi approfondite del metagame attuale",
                "Allenamenti con i migliori giocatori italiani"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-jf-blue"></div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-jf-blue/20 rounded-xl blur-xl z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-xl border border-white/10">
                <img 
                  src="https://i.imgur.com/o9MxiHj.png" 
                  alt="Judgment Fleet Discord Community" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-jf-blue/30 rounded-full blur-xl z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;


