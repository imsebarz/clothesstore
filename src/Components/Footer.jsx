import React from "react";
import "../assets/styles/components/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="politics">
          <h3>Políticas</h3>
          <ul>
            <li>Políticas de privacidad</li>
            <li>Políticas de Cambio</li>
            <li>Políticas de envío</li>
            <li>Términos y condiciones</li>
            <li>Rssponsabilidad Social</li>
          </ul>
        </div>
        <div className="aboutus">
          <h3>Sobre Nosotros</h3>
          <ul>
            <li>Encuentra tu tienda</li>
            <li>Contáctanos</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>
        <div className="social">
          <h3>Síguenos en:</h3>
          <ul>
            <li>😀</li>
            <li>😀</li>
            <li>😀</li>
            <li>😀</li>
          </ul>
        </div>
      </div>
      <h4 className="footer-copy">
        Copyrigth Colombia. Todos los derechos reservados
      </h4>
    </footer>
  );
};

export default Footer;
