import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary">Ana Carolina Scherma</h1>
            <p className="text-sm text-muted-foreground">Tricologista e Especialista Capilar</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("resultados")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Resultados
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.open("https://wa.me/5519997411962?text=Olá, gostaria de agendar uma consulta", "_blank")}
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Resultados
              </button>
              <Button
                variant="hero"
                size="sm"
                className="self-start"
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta", "_blank")}
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;