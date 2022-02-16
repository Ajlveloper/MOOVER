import React from "react";
import ImageContact from "../../assets/img/contacto.png";
import "./Contacto.css";
const Contacto = () => {
  return (
    <div className="contact">
      <div className="content-info">
        <div>
          <h3>Contacto</h3>
          <p>
            Nuestra sede principal se encuentra en la capital, justo a dos
            calles antes de la estación del metro.
          </p>
          <p>
            <span className="orange">SIN EMBARGO</span> en MOOVER no tenemos límites porque nos
            encontramos en toda LATAM para suplir tus necesidades y las de tus
            familiares
          </p>
          <span className="orange d-block">Corre: moover@info.com</span>
          <span className="orange d-block">Teléfono: 222-345-45-6677</span>
        </div>
      </div>
      <div className="image-contact">
        <span className="circle1 circle">
          <span className="circle2">
            <img src={ImageContact} alt="imagen-contacto" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Contacto;
