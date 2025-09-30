import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(19) 99741-1962</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">ana@email.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  
                  R. João Pessoa, 372 - Sala 4 - Centro<br />
                  Leme - SP, 13611-110
                </span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Segunda a Sexta</div>
                  <div className="text-sm text-muted-foreground">09:00 - 20:00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Sábado</div>
                  <div className="text-sm text-muted-foreground">07:00 - 12:00</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Domingo: Fechado
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Tratamento para queda de cabelo</li>
              <li>• Calvície masculina e feminina</li>
              <li>• Alopecia areata</li>
              <li>• Microagulhamento capilar</li>
              <li>• Peelings capilares</li>
            </ul>
          </div>

          {/* Social & Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Instagram className="w-5 h-5 text-primary" />
              </button>
              <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Facebook className="w-5 h-5 text-primary" />
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Ana Carolina Scherma</strong><br />
                Tricologista CRF: 12345
              </p>
              <p>
                Especialista em saúde capilar com foco em tratamentos personalizados 
                e resultados duradouros.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Ana Carolina Scherma - Todos os direitos reservados
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-smooth">
                Política de Privacidade
              </button>
              <button className="hover:text-primary transition-smooth">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;