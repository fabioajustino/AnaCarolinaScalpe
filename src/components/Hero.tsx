import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hair-care.jpg";
import profileImage from "@/assets/ana-carolina-profile.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-16 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images - Mobile First */}
          <div className="relative order-1 lg:order-2 w-full max-w-sm lg:max-w-none mx-auto">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Tratamento capilar profissional"
                className="rounded-2xl shadow-elegant w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-accent rounded-full opacity-50"></div>
            <div className="absolute -bottom-2 right-4 lg:-bottom-4 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-primary/20 rounded-full opacity-50"></div>
          </div>

          {/* Content - Mobile First */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Farmacêutica especialista em{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  tricologia, saúde capilar e estética
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                Com mais de 5 anos de experiência em tratamentos personalizados. Minha missão é devolver a saúde dos fios e a confiança de cada paciente, combatendo queda de cabelo, calvície e alopecia de forma eficaz e individualizada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5519997411962?text=Olá, gostaria de agendar uma consulta", "_blank")}
              >
                Agende sua Consulta
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça meu trabalho
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">96%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;