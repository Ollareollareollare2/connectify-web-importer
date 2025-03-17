
import { Github, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  
  const quickLinks = [
    { name: translations.home, url: "https://www.smogon.com" },
    { name: translations.community, url: "https://www.smogon.com" },
    { name: translations.players, url: "https://www.smogon.com" },
    { name: "FAQ", url: "https://www.smogon.com" },
    { name: translations.resources, url: "https://www.smogon.com" }
  ];

  const resources = [
    { name: "Regolamento", url: "https://www.smogon.com" },
    { name: "Privacy Policy", url: "https://www.smogon.com" },
    { name: "Termini di Servizio", url: "https://www.smogon.com" },
    { name: "FAQ", url: "https://www.smogon.com" },
    { name: "Contatti", url: "https://www.smogon.com" }
  ];

  return (
    <footer id="resources" className="bg-jf-dark py-12 px-4 md:px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-display font-bold text-white">
                Judgment<span className="text-[#D946EF]">Fleet</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
            La Community Italiana di Smogon per eccellenza.
            </p>
            <div className="flex space-x-4 mt-6">
            <p className="text-gray-400 max-w-md">
              {translations.contactsFounder}
            </p>
         
            </div>
            <div className="flex space-x-4 mt-6"></div>
            <p className="text-gray-400 max-w-md">
          paispaz
          

            </p>
            <p className="text-gray-400 max-w-md">
            vinn0558

          

            </p>
            <p className="text-gray-400 max-w-md">
            shootouts

          

            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{translations.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{translations.resources}</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Judgment Fleet. {translations.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
