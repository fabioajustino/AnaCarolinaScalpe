import { Award, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Especialização",
      description: "Formação em Tricologia e Especialização Capilar"
    },
    {
      icon: BookOpen,
      title: "Atualização",
      description: "Cursos constantes nas mais modernas técnicas"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Mais de 500 pacientes atendidos com sucesso"
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento humanizado e personalizado"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-primary">Ana Carolina</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissional dedicada ao cuidado capilar, com formação especializada e 
            paixão por devolver a autoestima dos meus pacientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Minha História</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Sou farmacêutica apaixonada por cuidar de pessoas e especialista em tricologia e estética capilar.
                Ao longo de mais de 5 anos de atuação, já acompanhei mais de 500 pacientes que buscavam soluções para queda de cabelo, calvície e alopecia, alcançando 98% de satisfação.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Minha abordagem é personalizada: cada paciente recebe um plano de tratamento exclusivo, que une ciência, tecnologia e cuidado humano. Acredito que cabelos saudáveis vão além da estética – são também sobre autoestima, identidade e confiança. 
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Áreas de Especialização:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Tratamento para queda de cabelo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Calvície masculina e feminina</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Alopecia areata e outras alopecias</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Microagulhamento capilar</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Peelings capilares especializados</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-lg shadow-card text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;