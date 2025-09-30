import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import beforeAfter3 from "@/assets/before-after-3.png";
import beforeAfter4 from "@/assets/before-after-4.png";
import beforeAfter5 from "@/assets/before-after-5.png";
import beforeAfter6 from "@/assets/before-after-6.png";



const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      image: beforeAfter3,
      title: "Microagulhamento Capilar",
      description: "Crescimento notável após 4 meses de sessões"
    },
    {
      id: 4,
      image: beforeAfter4,
      title: "Microagulhamento Capilar",
      description: "Crescimento notável após 4 meses de sessões"
    },
    {
      id: 5,
      image: beforeAfter5,
      title: "Microagulhamento Capilar",
      description: "Crescimento notável após 4 meses de sessões"
    },
    {
      id: 6,
      image: beforeAfter6,
      title: "Microagulhamento Capilar",
      description: "Crescimento notável após 4 meses de sessões"
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % results.length);
    }, 5000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, [results.length]);

  const testimonials = [
    {
      id: 1,
      text: "Oi Doutora! O resultado esta muito bom mesmo! Estamos muito felizes. Você está de parabéns!\nUse mesmo o caso dele como modelo, porque está ficando muito bom!",
      author: "Maria Silva",
      title: "Paciente"
    },
    {
      id: 2,
      text: "Oi Carolina. Muito obrigado pelo tratamento que você está fazendo nos meus cabelos, eu já estava ficando careca e hoje meus cabelos estão voltando ao normal.\nEstou muito feliz, meus cabelos pararam de cair e estão aumentando, graças a Deus e a você!",
      author: "João Santos",
      title: "Paciente"
    },
    {
      id: 3,
      text: "Carol, quero agradecer pelo sucesso do tratamento capilar, estou muito feliz com o resultado, meus cabelos estão visivelmente diferentes.\nA sua atenção, seu cuidado e seu profissionalismo fizeram toda a diferença.\nGratidão eterna!",
      author: "Carla Oliveira",
      title: "Paciente"
    },
    {
      id: 4,
      text: "Estou admirada com a mudança dos meus cabelos. O tratamento capilar surtiu efeito em pouco tempo.\nMeus amigos notaram a diferença.\nEstou bastante satisfeita com meu novo visual, com cabelos fortes e saudáveis!",
      author: "Ricardo Lima",
      title: "Paciente"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % results.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + results.length) % results.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

        <div className="max-w-2xl mx-auto">
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

          {/* Testimonial Carousel */}
          <div className="gradient-card rounded-xl p-8 mt-12 text-center shadow-card relative">
            <div className="relative overflow-hidden">
              <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4 min-h-[120px] flex items-center justify-center">
                {testimonials[currentTestimonial].text.split('\n').map((line, idx) => (
                  <>
                    {line}<br />
                  </>
                ))}
              </blockquote>
              <div className="text-sm text-primary font-medium">
                — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].title}
              </div>
            </div>
            
            {/* Navigation Arrows for Testimonials */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary"
              onClick={nextTestimonial}
            >
              <ChevronRight size={20} />
            </Button>

            {/* Dots Indicator for Testimonials */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
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