import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const results = [
    {
      id: 1,
      image: beforeAfter1,
      title: "Tratamento para Queda Capilar",
      description: "Resultado após 6 meses de tratamento personalizado"
    },
    {
      id: 2,
      image: beforeAfter2,
      title: "Recuperação de Alopecia",
      description: "Regeneração completa em 8 meses de acompanhamento"
    },
    {
      id: 3,
      image: beforeAfter1,
      title: "Microagulhamento Capilar",
      description: "Crescimento notável após 4 meses de sessões"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % results.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section id="resultados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados <span className="text-primary">Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos resultados obtidos com nossos tratamentos especializados. 
            Cada caso é único e tratado de forma personalizada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={results[currentImage].image}
                alt={results[currentImage].title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {results[currentImage].title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {results[currentImage].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {results.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentImage ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="gradient-card rounded-xl p-8 mt-12 text-center shadow-card">
            <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4">
              "A Ana Carolina mudou minha vida! Depois de anos sofrendo com queda de cabelo, 
              finalmente encontrei uma profissional que entende e trata com carinho. 
              Os resultados superaram minhas expectativas."
            </blockquote>
            <div className="text-sm text-primary font-medium">
              — Maria Silva, Paciente
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://wa.me/5519997411962?text=Vi os resultados e gostaria de agendar minha consulta", "_blank")}
            >
              Quero Resultados Como Estes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;