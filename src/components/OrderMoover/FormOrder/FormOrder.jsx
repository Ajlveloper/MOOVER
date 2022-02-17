import React, { useContext } from "react";
import { ShowContext } from "../../../hooks/ShowContext";
import useForm from "../../../hooks/useForm";
import ModalSuccess from "../Modal-Success/ModalSuccess";
import "./FormOrder.css";
import axios from "axios";

const FormOrder = () => {
  const { handleChangeInput, value, reset, errors } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
    estado: false,
  });

  const { show, setShow } = useContext(ShowContext);

  const { nombre, apellido, correo, mensaje } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("api/order", value);

    localStorage.setItem("Orden", JSON.stringify(data));

    setShow(!show);

    reset();
  };

  return (
    <>
      <div className="content-form">
        <form onSubmit={handleSubmit} className="form-order-moover">
          <h3 className="title-order">MOOVER</h3>
          <div>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleChangeInput}
              onKeyDown={handleChangeInput}
              onBlur={handleChangeInput}
              autoComplete="off"
              placeholder="Nombre Completo"
              required
            />
          </div>
          {errors.nombre && <span className="error">{errors.nombre}</span>}

          <div>
            <input
              type="text"
              name="apellido"
              value={apellido}
              onChange={handleChangeInput}
              onKeyDown={handleChangeInput}
              onBlur={handleChangeInput}
              autoComplete="off"
              placeholder="Apellido Completo"
              required
            />
          </div>
          {errors.apellido && <span className="error">{errors.apellido}</span>}

          <div>
            <input
              type="text"
              name="correo"
              value={correo}
              onChange={handleChangeInput}
              onKeyDown={handleChangeInput}
              onBlur={handleChangeInput}
              autoComplete="off"
              placeholder="correo: ejemplo@correo.com"
              required
            />
          </div>
          {errors.correo && <span className="error">{errors.correo}</span>}

          <div>
            <textarea
              type="text"
              name="mensaje"
              value={mensaje}
              onChange={handleChangeInput}
              onKeyDown={handleChangeInput}
              onBlur={handleChangeInput}
              autoComplete="off"
              placeholder="Deja tu solicitud con un mensaje por favor"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}

          <button
            disabled={nombre && apellido && correo && mensaje && false}
            className={
              nombre && apellido && correo && mensaje
                ? "button-submit-order"
                : "errors-desibled"
            }
            type="submit"
          >
            ENVIAR
          </button>
        </form>
      </div>
      {show && <ModalSuccess />}
    </>
  );
};

export default FormOrder;
