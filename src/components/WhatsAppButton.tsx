import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá Ana Carolina! Vi seu site e gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/5519997411962?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Fixed WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="icon"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-90 opacity-80"
        }`}
        onClick={handleWhatsAppClick}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Floating animation pulse */}
      <div className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500/20 animate-ping"></div>
    </>
  );
};

export default WhatsAppButton;