import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, BarChart3, Users, ShieldCheck, Target, Bot } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBg from "@assets/bg_3_1768916422907.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-background/80" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Transforma Tu <br />
              <span className="text-gradient">Presencia Digital</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creamos estrategias digitales y experiencias que convierten visitantes en clientes leales.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300" data-testid="button-cta-contact">
                  Agenda una llamada estratégica sin costo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50" data-testid="button-view-services">
                  Ver Servicios
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Por Qué Elegirnos</h2>
            <p className="text-lg text-muted-foreground">No solo entregamos servicios; entregamos crecimiento medible y resultados sostenibles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Estrategia Basada en Datos",
                desc: "Tomamos decisiones basadas en datos reales, no en suposiciones. Nuestro enfoque analítico optimiza cada inversión."
              },
              {
                icon: ShieldCheck,
                title: "Resultados Comprobados",
                desc: "Con más de 500 proyectos exitosos, tenemos un historial de duplicar el ROI de nuestros clientes en el primer año."
              },
              {
                icon: Users,
                title: "Equipo Experto",
                desc: "Trabaja con talento de primer nivel. Nuestro equipo está formado por veteranos de la industria digital."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Nuestros Servicios</h2>
              <p className="text-lg text-muted-foreground">Soluciones digitales completas adaptadas a tus objetivos de negocio.</p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="group" data-testid="button-all-services">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Bot}
              title="Inteligencia Artificial"
              description="Implementamos soluciones de IA para automatizar procesos, chatbots y generación de contenido inteligente."
            />
            <ServiceCard 
              icon={Globe}
              title="SEO y Posicionamiento"
              description="Domina los rankings de búsqueda y atrae tráfico orgánico con nuestras estrategias de SEO técnico."
            />
            <ServiceCard 
              icon={Zap}
              title="Publicidad Digital"
              description="Campañas de alto rendimiento en Google, Meta y LinkedIn que maximizan tu retorno de inversión."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-primary px-8 py-20 md:p-20 text-center text-primary-foreground">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-bold shadow-2xl hover:scale-105 transition-transform" data-testid="button-cta-bottom">
                  Agenda una llamada estratégica sin costo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
