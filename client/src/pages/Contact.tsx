import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="flex-1 py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Hablemos de tu próximo proyecto.</h1>
                <p className="text-lg text-muted-foreground">
                  Si necesitas información o quieres iniciar una colaboración, puedes escribirnos directamente por correo o WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Correo</h3>
                    <a href="mailto:contacto@prospectosdigitales.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contacto@prospectosdigitales.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Teléfono</h3>
                    <a href="tel:+19097091281" className="text-muted-foreground hover:text-primary transition-colors">
                      (909) 709-1281
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ubicación</h3>
                    <p className="text-muted-foreground">Adelanto, CA 92301</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-3xl p-8 shadow-xl border border-border/50"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Contacto</p>
                  <h2 className="text-2xl font-bold">Estamos listos para ayudarte.</h2>
                </div>

                <p className="text-muted-foreground">
                  Para una consulta rápida, te recomendamos escribir por correo o comunicarte por teléfono. Este sitio está pensado como una landing informativa y no depende de base de datos ni de formularios dinámicos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="rounded-xl">
                    <a href="mailto:contacto@prospectosdigitales.com">
                      Enviar correo <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-xl">
                    <a href="tel:+19097091281">Llamar ahora</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
