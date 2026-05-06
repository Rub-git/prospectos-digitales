import { motion } from "framer-motion";
import { 
  Search, 
  MousePointer2, 
  Share2, 
  PenTool, 
  Monitor, 
  LineChart, 
  Mail, 
  Smartphone,
  Bot,
  Cpu
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones de IA para automatizar procesos, chatbots inteligentes, generación de contenido y análisis predictivo para tu negocio."
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description: "Optimiza tus operaciones con automatizaciones inteligentes. Desde atención al cliente hasta análisis de datos, la IA trabaja para ti 24/7."
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento",
    description: "Nuestras estrategias de SEO integrales aseguran que tu marca aparezca exactamente donde tus clientes están buscando. Manejamos SEO técnico, optimización de contenido y link building."
  },
  {
    icon: MousePointer2,
    title: "Gestión de PPC",
    description: "Deja de desperdiciar presupuesto en clics que no convierten. Nuestros expertos certificados gestionan campañas optimizadas en Google Ads, Bing y redes sociales."
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description: "Construye una comunidad alrededor de tu marca. Creamos contenido atractivo y gestionamos tu presencia en Instagram, LinkedIn, Twitter y TikTok."
  },
  {
    icon: PenTool,
    title: "Marketing de Contenidos",
    description: "Contamos historias que venden. Desde blogs hasta whitepapers, nuestros redactores crean narrativas convincentes que establecen tu autoridad."
  },
  {
    icon: Monitor,
    title: "Diseño y Desarrollo Web",
    description: "Tu sitio web es tu escaparate digital. Construimos sitios rápidos, responsivos y atractivos optimizados para la conversión y experiencia de usuario."
  },
  {
    icon: LineChart,
    title: "Analítica de Datos",
    description: "Convertimos datos complejos en insights claros. Dashboards personalizados e informes regulares te mantienen informado sobre tu ROI y métricas de crecimiento."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nutre leads y retén clientes con flujos de email automatizados y newsletters personalizados que impulsan el negocio recurrente."
  },
  {
    icon: Smartphone,
    title: "Marketing de Apps",
    description: "Lanza tu app móvil con impacto. Manejamos ASO (App Store Optimization) y campañas de adquisición de usuarios para escalar en los rankings."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Nuestra Experiencia a <span className="text-primary">Tu Servicio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Ofrecemos un conjunto completo de servicios de marketing digital diseñados para trabajar juntos y maximizar el impacto.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Cómo Trabajamos</h2>
            <p className="text-muted-foreground">Nuestra metodología probada para resultados consistentes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Descubrimiento", desc: "Profundizamos en tus objetivos de negocio, audiencia y competidores." },
              { step: "02", title: "Estrategia", desc: "Construimos una hoja de ruta personalizada adaptada a tus objetivos específicos." },
              { step: "03", title: "Ejecución", desc: "Nuestros expertos implementan la estrategia con precisión y creatividad." },
              { step: "04", title: "Optimización", desc: "Monitoreo continuo y refinamiento para maximizar el rendimiento." }
            ].map((item, i) => (
              <div key={i} className="relative p-6">
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-[1px] bg-border -translate-y-1/2 translate-x-4" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10" data-testid="button-start-project">Inicia Tu Proyecto</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
