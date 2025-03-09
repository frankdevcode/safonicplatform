import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../style-sheet/TermsAndConditions.css';

const TermsAndConditions = () => {
  // Animaciones para los elementos de la página
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Safonic Colombia</title>
        <meta name="description" content="Términos y condiciones de Safonic Colombia. Conoce las reglas y políticas que rigen el uso de nuestros servicios y productos." />
      </Helmet>

      <section className="terms-section">
        <div className="container">
          <motion.div 
            className="terms-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Términos y Condiciones</h1>
            <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>

          <motion.div 
            className="terms-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="terms-section">
              <h2>1. Aceptación de los Términos</h2>
              <p>Al acceder y utilizar el sitio web de Safonic Colombia (en adelante, "el Sitio"), usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestro sitio web ni nuestros servicios.</p>
              <p>Estos términos se aplican a todos los usuarios del Sitio, incluyendo, sin limitación, a los usuarios que son navegadores, vendedores, clientes, comerciantes y/o contribuidores de contenido.</p>
            </div>

            <div className="terms-section">
              <h2>2. Uso del Sitio</h2>
              <p>Usted acepta utilizar el Sitio solo para propósitos legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del Sitio por parte de cualquier tercero.</p>
              <p>Conductas prohibidas incluyen, pero no se limitan a:</p>
              <ul>
                <li>Conducta que constituya un delito, que dé lugar a responsabilidad civil o que de otra manera viole cualquier ley local, estatal, nacional o internacional.</li>
                <li>Uso de dispositivos, software o rutinas que interfieran con el funcionamiento adecuado del Sitio.</li>
                <li>Intentos de descifrar, descompilar, desensamblar o realizar ingeniería inversa de cualquier software que comprenda o de cualquier manera forme parte del Sitio.</li>
                <li>Recopilación o almacenamiento de datos personales sobre otros usuarios sin su consentimiento expreso.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Productos y Servicios</h2>
              <p>Todos los productos y servicios ofrecidos a través del Sitio están sujetos a disponibilidad. Las descripciones de los productos y servicios están sujetas a cambios sin previo aviso.</p>
              <p>Nos reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos. Todas las descripciones de productos o precios de productos están sujetos a cambios en cualquier momento sin previo aviso, a nuestra sola discreción.</p>
              <p>Nos reservamos el derecho de descontinuar cualquier producto en cualquier momento. Cualquier oferta de producto o servicio hecha en este sitio es nula donde esté prohibida.</p>
            </div>

            <div className="terms-section">
              <h2>4. Precisión de la Información</h2>
              <p>Nos esforzamos por proporcionar información precisa y actualizada en nuestro Sitio. Sin embargo, no garantizamos que toda la información sea precisa, completa o actualizada. El material en este Sitio se proporciona solo para información general y no debe ser utilizado como base única para tomar decisiones sin consultar fuentes de información primarias, más precisas, completas o oportunas.</p>
              <p>Cualquier confianza en el material de este Sitio es bajo su propio riesgo. Este Sitio puede contener cierta información histórica, que no es necesariamente actual y se proporciona solo para su referencia.</p>
            </div>

            <div className="terms-section">
              <h2>5. Propiedad Intelectual</h2>
              <p>El Sitio y todo su contenido, características y funcionalidad (incluyendo pero no limitado a toda la información, software, texto, pantallas, imágenes, video y audio, y el diseño, selección y disposición de los mismos), son propiedad de Safonic Colombia, sus licenciantes u otros proveedores de dicho material y están protegidos por leyes colombianas e internacionales de derechos de autor, marca registrada, patente, secreto comercial y otras leyes de propiedad intelectual o derechos de propiedad.</p>
              <p>Estos Términos y Condiciones le permiten usar el Sitio solo para su uso personal, no comercial. No debe reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, ejecutar públicamente, republicar, descargar, almacenar o transmitir cualquier material de nuestro Sitio, excepto lo siguiente:</p>
              <ul>
                <li>Su computadora puede almacenar temporalmente copias de dichos materiales en la memoria RAM incidental a su acceso y visualización de esos materiales.</li>
                <li>Puede almacenar archivos que son automáticamente almacenados en caché por su navegador web para mejorar la visualización.</li>
                <li>Puede imprimir o descargar una copia de un número razonable de páginas del Sitio para su uso personal, no comercial y no para su posterior reproducción, publicación o distribución.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Compras y Pagos</h2>
              <p>Al realizar una compra a través de nuestro Sitio, usted garantiza que:</p>
              <ul>
                <li>Está legalmente capacitado para celebrar contratos vinculantes.</li>
                <li>Toda la información que proporciona durante el proceso de compra es verdadera, precisa, actual y completa.</li>
              </ul>
              <p>Los precios de nuestros productos están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar o discontinuar cualquier producto sin previo aviso.</p>
              <p>No garantizamos que la calidad de cualquier producto, servicio, información u otro material comprado u obtenido por usted cumplirá con sus expectativas, o que cualquier error en el Servicio será corregido.</p>
            </div>

            <div className="terms-section">
              <h2>7. Política de Devoluciones y Reembolsos</h2>
              <p>Nuestra política de devoluciones y reembolsos se aplica a todas las compras realizadas a través del Sitio. Para ser elegible para una devolución, su artículo debe estar sin usar y en las mismas condiciones en que lo recibió. También debe estar en el embalaje original.</p>
              <p>Para iniciar una devolución, contáctenos con los detalles de su compra. Si su devolución es aceptada, le enviaremos instrucciones sobre cómo y dónde enviar su paquete. Los artículos devueltos a nosotros sin obtener primero una autorización no serán aceptados.</p>
              <p>Puede solicitar un reembolso completo dentro de los 30 días posteriores a la recepción de su pedido si no está satisfecho con su compra. Una vez que recibamos e inspeccionemos el artículo devuelto, le notificaremos si se aprueba o rechaza su reembolso.</p>
            </div>

            <div className="terms-section">
              <h2>8. Limitación de Responsabilidad</h2>
              <p>En ningún caso Safonic Colombia, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de ganancias, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de:</p>
              <ul>
                <li>Su acceso o uso o incapacidad para acceder o usar el Sitio.</li>
                <li>Cualquier conducta o contenido de terceros en el Sitio.</li>
                <li>Cualquier contenido obtenido del Sitio.</li>
                <li>Acceso no autorizado, uso o alteración de sus transmisiones o contenido.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>9. Indemnización</h2>
              <p>Usted acepta indemnizar, defender y mantener indemne a Safonic Colombia y sus licenciantes, proveedores de servicios, empleados, agentes, funcionarios, directores y contratistas (las "Partes Indemnizadas") de y contra cualquier reclamo, responsabilidad, daño, juicio, premio, pérdida, costo, gasto o tarifa (incluyendo honorarios razonables de abogados) que surjan de o estén relacionados con su violación de estos Términos y Condiciones.</p>
            </div>

            <div className="terms-section">
              <h2>10. Ley Aplicable</h2>
              <p>Estos Términos y Condiciones y cualquier disputa o reclamo que surja de, o esté relacionado con ellos, estará regido e interpretado de acuerdo con las leyes de Colombia, sin dar efecto a ninguna disposición de conflicto de leyes.</p>
              <p>Cualquier acción legal o procedimiento que surja bajo estos Términos y Condiciones será llevado exclusivamente en los tribunales ubicados en Colombia, y las partes consienten irrevocablemente a la jurisdicción personal y el lugar en dichos tribunales.</p>
            </div>

            <div className="terms-section">
              <h2>11. Cambios a los Términos y Condiciones</h2>
              <p>Podemos revisar y actualizar estos Términos y Condiciones de vez en cuando a nuestra sola discreción. Todos los cambios son efectivos inmediatamente cuando los publicamos, y se aplican a todo acceso y uso del Sitio a partir de entonces.</p>
              <p>Su uso continuado del Sitio después de la publicación de los Términos y Condiciones revisados significa que acepta y está de acuerdo con los cambios. Se espera que verifique esta página con frecuencia para que esté al tanto de cualquier cambio, ya que son vinculantes para usted.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contacto</h2>
              <p>Todas las preguntas, comentarios y solicitudes con respecto a estos Términos y Condiciones deben dirigirse a:</p>
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

export default TermsAndConditions;
