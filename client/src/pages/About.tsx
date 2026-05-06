import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import founderImage from "@assets/prospectos_1768915810017.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Somos los arquitectos del <br/>
                <span className="text-gradient">crecimiento digital.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada en 2020, Prospectos Digitales comenzó con una misión simple: ayudar a marcas innovadoras a navegar el complejo panorama digital con claridad y confianza.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos que los datos y la creatividad no deben existir en silos. Al fusionar precisión analítica con innovación artística, creamos campañas que no solo lucen hermosas sino que rinden excepcionalmente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-3xl overflow-hidden bg-secondary"
            >
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                 alt="Equipo trabajando juntos"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              { number: 500, suffix: "+", label: "Proyectos Entregados" },
              { number: 98, suffix: "%", label: "Satisfacción del Cliente" },
              { number: 150, suffix: "M+", label: "Inversión Publicitaria Gestionada" },
              { number: 40, suffix: "+", label: "Expertos en el Equipo" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Conoce al Fundador</h2>
            <p className="text-muted-foreground">La visión detrás de Prospectos Digitales.</p>
          </div>

          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4] mx-auto w-[280px]">
                <img 
                  src={founderImage} 
                  alt="Fundador"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Fundador</h3>
              <p className="text-primary font-medium">Prospectos Digitales</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
