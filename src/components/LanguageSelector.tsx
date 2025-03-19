
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "it" ? "en" : "it");
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-white transition-colors bg-transparent hover:bg-transparent"
      title={locale === "it" ? "Switch to English" : "Passa all'italiano"}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 text-xs font-bold">{locale.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSelector;
