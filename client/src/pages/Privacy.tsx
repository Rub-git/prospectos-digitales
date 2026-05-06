import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Última actualización: Enero 2024
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">1. Información que Recopilamos</h2>
            <p>
              En Prospectos Digitales, recopilamos información que usted nos proporciona directamente cuando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Completa nuestro formulario de contacto</li>
              <li>Se suscribe a nuestro boletín informativo</li>
              <li>Solicita información sobre nuestros servicios</li>
              <li>Se comunica con nosotros por correo electrónico o teléfono</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">2. Uso de la Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Proporcionar los servicios que ha solicitado</li>
              <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">4. Compartir Información</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing sin su consentimiento explícito. Podemos compartir información con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">5. Sus Derechos</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">6. Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">7. Contacto</h2>
            <p>
              Para cualquier pregunta sobre esta política de privacidad o el tratamiento de sus datos, contáctenos en:
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
