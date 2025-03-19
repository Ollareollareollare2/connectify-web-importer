import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const [visible, setVisible] = useState(false);
  const { translations, locale } = useLanguage();

  useEffect(() => {
    // Always scroll to top when mounting
    window.scrollTo(0, 0);
  }, []);

  const faqItems = locale === "it" ? [
    {
      question: "Cos'è Judgment Fleet?",
      answer: "Judgment Fleet è una community italiana di giocatori competitivi di Pokémon che opera principalmente su Pokémon Showdown e si ispira agli standard competitivi di Smogon. Il nostro obiettivo è riunire i migliori giocatori italiani e promuovere lo sviluppo della scena competitiva in Italia."
    },
    {
      question: "Come posso unirmi a Judgment Fleet?",
      answer: "L'accesso a Judgment Fleet è selettivo e basato su inviti. Non bisogna essere necessariamente dei giocatori fin troppo esperti, ma bisogna essere interessati ad interfacciarsi alla community. Se sei interessato, contattaci, ti terremo d'occhio."
    },
    {
      question: "Cos'è Smogon?",
      answer: "La Community per il Competitivo Pokemon più longeva e importante al mondo. Rispetto al VGC, offre principalmente dei format dove si gioca in Singolo, anzichè in Doppio. Seppur il VGC sia il formato ufficiale di The Pokémon Company, Smogon vanta all'incirca 500.000 utenti registrati sulla piattaforma e hai ogni torneo a portata di click."
    },
    {
      question: "Come posso migliorare come giocatore competitivo?",
      answer: "Giocando molto e analizzando i Replay dei giocatori più navigati nel gioco."
    }
  ] : [
    {
      question: "What is Judgment Fleet?",
      answer: "Judgment Fleet is an Italian community of competitive Pokémon players who primarily operate on Pokémon Showdown and follow Smogon's competitive standards. Our goal is to bring together the best Italian players and promote the development of the competitive scene in Italy."
    },
    {
      question: "How can I join Judgment Fleet?",
      answer: "Access to Judgment Fleet is selective and invitation-based. You don't necessarily need to be an extremely experienced player, but you need to be interested in engaging with the community. If you're interested, contact us and we'll keep an eye on you."
    },
    {
      question: "What is Smogon?",
      answer: "Smogon is the longest-running and most important competitive Pokémon community in the world. Unlike VGC, it primarily offers single battle formats rather than double battles. Although VGC is the official format of The Pokémon Company, Smogon boasts approximately 500,000 registered users on the platform and you have every tournament just a click away."
    },
    {
      question: "How can I improve as a competitive player?",
      answer: "By playing a lot and analyzing replays from more experienced players in the game."
    }
  ];

  return (
    <div className="min-h-screen bg-jf-dark text-white relative">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-[#D946EF]" />
            <h1 className="text-4xl md:text-5xl font-display font-bold">{translations.frequentlyAskedQuestions}</h1>
          </div>
          
          <p className="text-gray-300 text-lg mb-12">
            {translations.faqDescription}
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-jf-gray/30 border border-white/10 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-xl font-medium py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="py-2">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">{translations.otherQuestions}</p>
            <Button 
              className="bg-[#D946EF] hover:bg-[#D946EF]/90"
              onClick={() => window.open('https://twitter.com/JudgmentFleet', '_blank')}
            >
              {translations.contactTwitter}
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
