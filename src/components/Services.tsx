import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import serviceHairLoss from "@/assets/service-hair-loss.jpg";
import serviceBaldness from "@/assets/service-baldness.jpg";

const Services = () => {
  const services = [
    {
      title: "Queda de Cabelo",
      description: "Tratamento especializado para diferentes tipos de queda capilar, identificando as causas e aplicando terapias personalizadas.",
      image: serviceHairLoss,
      features: ["Diagnóstico preciso", "Tratamento personalizado", "Acompanhamento contínuo"]
    },
    {
      title: "Calvície",
      description: "Abordagem completa para calvície masculina e feminina, com técnicas modernas para estimular o crescimento capilar.",
      image: serviceBaldness,
      features: ["Análise detalhada", "Técnicas avançadas", "Resultados duradouros"]
    },
    {
      title: "Alopecia", 
      description: "Tratamento especializado para alopecia areata e outros tipos de alopecia, com foco na regeneração capilar.",
      image: serviceHairLoss,
      features: ["Diagnóstico especializado", "Terapias inovadoras", "Suporte emocional"]
    },
    {
      title: "Microagulhamento Capilar",
      description: "Técnica de estimulação do couro cabeludo através de microagulhas, promovendo a vascularização e crescimento dos fios.",
      image: serviceBaldness,
      features: ["Técnica minimamente invasiva", "Estimula crescimento", "Melhora da circulação"]
    },
    {
      title: "Peelings Capilares",
      description: "Tratamento de limpeza profunda do couro cabeludo, removendo impurezas e promovendo um ambiente saudável para os fios.",
      image: serviceHairLoss,
      features: ["Limpeza profunda", "Remoção de toxinas", "Renovação celular"]
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tratamentos especializados e personalizados para cada tipo de 
            problema capilar, sempre com as técnicas mais modernas e eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth group"
            >
              {/* <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div> */}

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  onClick={() => window.open(`https://wa.me/5519997411962?text=Gostaria de saber mais sobre ${service.title}`, "_blank")}
                >
                  Saiba Mais
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://wa.me/5519997411962?text=Gostaria de agendar uma avaliação", "_blank")}
          >
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;