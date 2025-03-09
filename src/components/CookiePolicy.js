import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../style-sheet/CookiePolicy.css';

const CookiePolicy = () => {
  // Animaciones para los elementos de la página
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Política de Cookies | Safonic Colombia</title>
        <meta name="description" content="Política de cookies de Safonic Colombia. Conoce cómo utilizamos las cookies y tecnologías similares en nuestro sitio web." />
      </Helmet>

      <section className="cookie-policy-section">
        <div className="container">
          <motion.div 
            className="cookie-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Política de Cookies</h1>
            <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>

          <motion.div 
            className="cookie-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="cookie-section">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o móvil) cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</p>
              <p>Las cookies permiten que un sitio web reconozca su dispositivo y recuerde información sobre su visita, como sus preferencias de idioma, tamaño de fuente y otras configuraciones. Esto puede facilitar su próxima visita y hacer que el sitio le resulte más útil.</p>
            </div>

            <div className="cookie-section">
              <h2>2. ¿Cómo utilizamos las cookies?</h2>
              <p>En Safonic Colombia utilizamos cookies y tecnologías similares para diversos fines, incluyendo:</p>
              <ul>
                <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico del sitio web. Le permiten navegar por el sitio y utilizar sus funciones, como acceder a áreas seguras. Sin estas cookies, no podríamos proporcionar los servicios que usted solicita.</li>
                <li><strong>Cookies de rendimiento:</strong> Recopilan información sobre cómo los visitantes utilizan nuestro sitio web, por ejemplo, qué páginas visitan con más frecuencia y si reciben mensajes de error. Estas cookies no recopilan información que identifique a un visitante específico. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Solo se utilizan para mejorar el funcionamiento de nuestro sitio web.</li>
                <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que usted realiza (como su nombre de usuario, idioma o la región en la que se encuentra) y proporciona funciones mejoradas y más personales. Estas cookies también pueden utilizarse para recordar los cambios que ha realizado en el tamaño del texto, fuentes y otras partes de las páginas web que puede personalizar.</li>
                <li><strong>Cookies de publicidad:</strong> Se utilizan para entregar anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio, así como para ayudar a medir la efectividad de las campañas publicitarias. Suelen ser colocadas por redes publicitarias con nuestro permiso. Recuerdan que ha visitado un sitio web y esta información se comparte con otras organizaciones, como los anunciantes.</li>
              </ul>
            </div>

            <div className="cookie-section">
              <h2>3. Cookies de terceros</h2>
              <p>Además de nuestras propias cookies (cookies de origen), podemos utilizar diversas cookies de terceros para informar sobre las estadísticas de uso del sitio, entregar anuncios en y a través del sitio, y así sucesivamente. Estas cookies pueden incluir:</p>
              <ul>
                <li><strong>Cookies analíticas:</strong> Utilizamos servicios como Google Analytics para comprender cómo los visitantes interactúan con nuestro sitio. Estas cookies nos ayudan a mejorar nuestro sitio web y su experiencia.</li>
                <li><strong>Cookies de redes sociales:</strong> Permiten compartir contenido de nuestro sitio en plataformas de redes sociales como Facebook, Twitter e Instagram. Estas cookies no están bajo nuestro control. Por favor, consulte las respectivas políticas de privacidad de estas redes sociales para saber cómo funcionan sus cookies.</li>
                <li><strong>Cookies publicitarias:</strong> Utilizadas por agencias de publicidad para mostrar anuncios relevantes basados en sus intereses y comportamiento de navegación.</li>
              </ul>
            </div>

            <div className="cookie-section">
              <h2>4. Control y gestión de cookies</h2>
              <p>Usted puede decidir si acepta o rechaza las cookies. La mayoría de los navegadores web aceptan cookies automáticamente, pero usted puede modificar la configuración de su navegador para rechazar cookies si lo prefiere. Sin embargo, si elige rechazar las cookies, es posible que no pueda utilizar todas las funcionalidades interactivas de nuestro sitio web.</p>
              <p>Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.</p>
              <p>A continuación, le proporcionamos enlaces a las instrucciones para gestionar las cookies en los navegadores más comunes:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </div>

            <div className="cookie-section">
              <h2>5. Cookies que utilizamos</h2>
              <p>A continuación, se muestra una lista detallada de las cookies que utilizamos en nuestro sitio web:</p>
              
              <div className="cookie-table-container">
                <table className="cookie-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Proveedor</th>
                      <th>Propósito</th>
                      <th>Caducidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_ga</td>
                      <td>Google Analytics</td>
                      <td>Registra un identificador único que se utiliza para generar datos estadísticos sobre cómo el visitante utiliza el sitio web.</td>
                      <td>2 años</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Google Analytics</td>
                      <td>Registra un identificador único que se utiliza para generar datos estadísticos sobre cómo el visitante utiliza el sitio web.</td>
                      <td>24 horas</td>
                    </tr>
                    <tr>
                      <td>_gat</td>
                      <td>Google Analytics</td>
                      <td>Se utiliza para limitar la velocidad de solicitud.</td>
                      <td>1 minuto</td>
                    </tr>
                    <tr>
                      <td>session_id</td>
                      <td>Safonic Colombia</td>
                      <td>Mantiene el estado de la sesión del usuario a través de las solicitudes de página.</td>
                      <td>Sesión</td>
                    </tr>
                    <tr>
                      <td>user_preferences</td>
                      <td>Safonic Colombia</td>
                      <td>Almacena las preferencias del usuario para personalizar la experiencia.</td>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <td>cart_items</td>
                      <td>Safonic Colombia</td>
                      <td>Almacena los artículos en el carrito de compras del usuario.</td>
                      <td>30 días</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="cookie-section">
              <h2>6. Cambios en nuestra Política de Cookies</h2>
              <p>Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, le recomendamos que revise esta Política de Cookies regularmente para estar informado sobre nuestro uso de cookies y tecnologías relacionadas.</p>
              <p>La fecha en la parte superior de esta Política de Cookies indica cuándo se actualizó por última vez.</p>
            </div>

            <div className="cookie-section">
              <h2>7. Contacto</h2>
              <p>Si tiene alguna pregunta sobre nuestro uso de cookies o esta Política de Cookies, contáctenos en:</p>
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

export default CookiePolicy; 