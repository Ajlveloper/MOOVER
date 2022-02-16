import React, { useContext } from "react";
import { ShowContext } from "../../../hooks/ShowContext";
import "./ModalSuccess.css";

const ModalSuccess = () => {
  const { show, setShow } = useContext(ShowContext);

  return (
    <div className={show ? "content-modal show-content-modal" : "content-modal"}>
      <div className={show ? "modal-text show-modal-text" : "modal-text"}>
        <button onClick={() => setShow(!show)} className="modal-button">
          X
        </button>
        <h2>
          <span className="success"> Ha sido Exitosa su solicitud.</span> Le
          pedimos por favor que vea el estado de su solicitud en la sección:
          <br /> <span className="success">"Estado del Paquete"</span>
        </h2>
      </div>
    </div>
  );
};

export default ModalSuccess;
