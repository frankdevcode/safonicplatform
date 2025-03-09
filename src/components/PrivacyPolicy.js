import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../style-sheet/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // Animaciones para los elementos de la página
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Safonic Colombia</title>
        <meta name="description" content="Política de privacidad de Safonic Colombia. Conoce cómo recopilamos, utilizamos y protegemos tu información personal." />
      </Helmet>

      <section className="privacy-policy-section">
        <div className="container">
          <motion.div 
            className="privacy-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Política de Privacidad</h1>
            <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>

          <motion.div 
            className="privacy-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="privacy-section">
              <h2>1. Introducción</h2>
              <p>En Safonic Colombia, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.</p>
              <p>Al utilizar nuestro sitio web, usted acepta las prácticas descritas en esta política. Le recomendamos que lea esta política detenidamente para comprender nuestras prácticas con respecto a su información personal.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Información que recopilamos</h2>
              <p>Podemos recopilar varios tipos de información, incluyendo:</p>
              <ul>
                <li><strong>Información personal:</strong> Nombre, dirección de correo electrónico, número de teléfono, dirección postal y otros datos similares que usted nos proporciona voluntariamente.</li>
                <li><strong>Información de uso:</strong> Datos sobre cómo interactúa con nuestro sitio web, incluyendo las páginas visitadas, el tiempo de permanencia y las acciones realizadas.</li>
                <li><strong>Información del dispositivo:</strong> Datos técnicos como su dirección IP, tipo de navegador, proveedor de servicios de Internet y sistema operativo.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Cómo utilizamos su información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul>
                <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                <li>Procesar y completar transacciones.</li>
                <li>Enviar información sobre productos, servicios y promociones.</li>
                <li>Responder a sus consultas y solicitudes.</li>
                <li>Personalizar su experiencia en nuestro sitio web.</li>
                <li>Analizar tendencias y estadísticas para mejorar nuestro sitio web y servicios.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Compartir su información</h2>
              <p>No vendemos ni alquilamos su información personal a terceros. Sin embargo, podemos compartir su información en las siguientes circunstancias:</p>
              <ul>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio.</li>
                <li>Para cumplir con obligaciones legales o responder a solicitudes legales.</li>
                <li>Para proteger nuestros derechos, privacidad, seguridad o propiedad.</li>
                <li>En relación con una fusión, adquisición o venta de activos.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Seguridad de la información</h2>
              <p>Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información personal contra acceso no autorizado, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.</p>
            </div>

            <div className="privacy-section">
              <h2>6. Sus derechos y opciones</h2>
              <p>Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, incluyendo:</p>
              <ul>
                <li>Acceder a su información personal.</li>
                <li>Corregir información inexacta o incompleta.</li>
                <li>Solicitar la eliminación de su información personal.</li>
                <li>Oponerse al procesamiento de su información personal.</li>
                <li>Retirar su consentimiento en cualquier momento.</li>
              </ul>
              <p>Para ejercer estos derechos, contáctenos a través de la información proporcionada al final de esta política.</p>
            </div>

            <div className="privacy-section">
              <h2>7. Cookies y tecnologías similares</h2>
              <p>Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie. Sin embargo, algunas funciones de nuestro sitio web pueden no funcionar correctamente sin cookies.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Enlaces a sitios de terceros</h2>
              <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio que visite.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Cambios a esta política</h2>
              <p>Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará disponible en nuestro sitio web con la fecha de "última actualización". Le recomendamos revisar esta política regularmente para estar informado sobre cómo protegemos su información.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Contacto</h2>
              <p>Si tiene preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctenos en:</p>
              <address>
                Safonic Colombia<br />
                Av. Tecnológica 123, Innovación<br />
                Correo electrónico: info@safonic.com<br />
                Teléfono: +57 317 628 29 79
              </address>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
