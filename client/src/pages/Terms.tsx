import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Términos de Servicio</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Última actualización: Enero 2024
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de Prospectos Digitales, usted acepta estar sujeto a estos términos de servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">2. Descripción de los Servicios</h2>
            <p>
              Prospectos Digitales ofrece servicios de marketing digital que incluyen, pero no se limitan a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inteligencia Artificial y Automatización</li>
              <li>SEO y Posicionamiento Web</li>
              <li>Gestión de Publicidad Digital (PPC)</li>
              <li>Marketing en Redes Sociales</li>
              <li>Diseño y Desarrollo Web</li>
              <li>Analítica de Datos</li>
              <li>Email Marketing</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">3. Obligaciones del Cliente</h2>
            <p>
              Al contratar nuestros servicios, el cliente se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información veraz y actualizada</li>
              <li>Colaborar en la implementación de estrategias acordadas</li>
              <li>Realizar los pagos según los términos acordados</li>
              <li>Respetar los plazos de entrega de materiales necesarios</li>
              <li>No utilizar nuestros servicios para fines ilegales</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, diseños, estrategias y materiales creados por Prospectos Digitales permanecen como propiedad intelectual nuestra hasta que se complete el pago total de los servicios. Una vez completado el pago, los derechos de uso se transfieren al cliente según lo acordado en el contrato específico.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">5. Confidencialidad</h2>
            <p>
              Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por nuestros clientes. No divulgaremos información comercial sensible a terceros sin consentimiento previo, excepto cuando sea requerido por ley.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">6. Limitación de Responsabilidad</h2>
            <p>
              Prospectos Digitales no será responsable de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resultados específicos de ventas o conversiones, ya que estos dependen de múltiples factores</li>
              <li>Cambios en algoritmos de plataformas de terceros (Google, Meta, etc.)</li>
              <li>Interrupciones de servicio causadas por factores externos</li>
              <li>Daños indirectos o consecuentes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">7. Pagos y Facturación</h2>
            <p>
              Los términos de pago serán especificados en cada propuesta de servicios. Los pagos atrasados pueden resultar en la suspensión de servicios hasta que se regularice la situación.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">8. Cancelación</h2>
            <p>
              Cualquiera de las partes puede terminar la relación comercial con un aviso previo de 30 días. Los servicios ya pagados serán completados según lo acordado. No se realizarán reembolsos por servicios ya prestados.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio web.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">10. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos términos de servicio, contáctenos en:
            </p>
            <p className="font-medium text-foreground">
              Email: contacto@prospectosdigitales.com<br />
              Teléfono: (909) 709-1281<br />
              Ubicación: Adelanto, CA 92301
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
