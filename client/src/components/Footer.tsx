import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import logoImage from "@assets/Prospectos_Digitales_1768914940975.jpg";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Prospectos Digitales" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl tracking-tight">
                Prospectos <span className="text-primary">Digitales</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformamos marcas a través de estrategias digitales basadas en datos y excelencia creativa. Construimos el futuro de la presencia digital.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Empresa</h4>
            <ul className="space-y-3">
              {[
                { label: "Nosotros", href: "/about" },
                { label: "Servicios", href: "/services" },
                { label: "Casos de Éxito", href: "#" },
                { label: "Carreras", href: "#" },
                { label: "Contacto", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Servicios</h4>
            <ul className="space-y-3">
              {[
                "SEO y Posicionamiento",
                "Publicidad Digital",
                "Redes Sociales",
                "Marketing de Contenidos",
                "Diseño Web",
                "Analítica de Datos"
              ].map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Adelanto, CA 92301</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contacto@prospectosdigitales.com" className="hover:text-primary transition-colors">
                  contacto@prospectosdigitales.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+19097091281" className="hover:text-primary transition-colors">
                  (909) 709-1281
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prospectos Digitales. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-foreground">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
