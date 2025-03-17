
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
      question: "Che cos'è Judgment Fleet?",
      answer: "Judgment Fleet è una comunità decentralizzata di appassionati del mondo crypto e blockchain che condividono conoscenze, risorse e opportunità nel settore."
    },
    {
      question: "Come posso unirmi alla comunità?",
      answer: "Puoi unirti alla nostra comunità seguendoci su Twitter e partecipando alle discussioni sui nostri canali social. Organizziamo regolarmente eventi e incontri virtuali per i nostri membri."
    },
    {
      question: "Quali sono i benefici di far parte di Judgment Fleet?",
      answer: "I membri di Judgment Fleet hanno accesso a risorse esclusive, analisi di mercato, opportunità di networking e la possibilità di collaborare con altri professionisti del settore blockchain."
    },
    {
      question: "Judgment Fleet offre servizi di consulenza?",
      answer: "Sì, attraverso la nostra rete di esperti, offriamo servizi di consulenza personalizzati su progetti blockchain, strategie di investimento e implementazioni tecnologiche."
    },
    {
      question: "Come posso rimanere aggiornato sulle ultime novità?",
      answer: "Seguici su Twitter e iscriviti alla nostra newsletter per ricevere aggiornamenti regolari sulle nostre attività, eventi imminenti e le ultime tendenze nel mondo blockchain."
    },
    {
      question: "Organizzate eventi dal vivo?",
      answer: "Sì, organizziamo regolarmente sia eventi virtuali che incontri dal vivo nelle principali città. Seguici sui social per conoscere i prossimi appuntamenti."
    },
    {
      question: "Posso contribuire alla comunità con i miei contenuti?",
      answer: "Assolutamente! Accogliamo con piacere contributi da parte dei membri della comunità. Contattaci per condividere i tuoi articoli, analisi o proposte di collaborazione."
    }
  ] : [
    {
      question: "What is Judgment Fleet?",
      answer: "Judgment Fleet is a decentralized community of crypto and blockchain enthusiasts who share knowledge, resources, and opportunities in the sector."
    },
    {
      question: "How can I join the community?",
      answer: "You can join our community by following us on Twitter and participating in discussions on our social channels. We regularly organize events and virtual meetings for our members."
    },
    {
      question: "What are the benefits of being part of Judgment Fleet?",
      answer: "Judgment Fleet members have access to exclusive resources, market analysis, networking opportunities, and the ability to collaborate with other blockchain professionals."
    },
    {
      question: "Does Judgment Fleet offer consulting services?",
      answer: "Yes, through our network of experts, we offer personalized consulting services on blockchain projects, investment strategies, and technological implementations."
    },
    {
      question: "How can I stay updated on the latest news?",
      answer: "Follow us on Twitter and subscribe to our newsletter to receive regular updates on our activities, upcoming events, and the latest trends in the blockchain world."
    },
    {
      question: "Do you organize live events?",
      answer: "Yes, we regularly organize both virtual events and live meetings in major cities. Follow us on social media to find out about upcoming appointments."
    },
    {
      question: "Can I contribute to the community with my content?",
      answer: "Absolutely! We welcome contributions from community members. Contact us to share your articles, analysis, or collaboration proposals."
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
