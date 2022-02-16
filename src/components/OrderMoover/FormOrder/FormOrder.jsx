import React from "react";
import useForm from "../../../hooks/useForm";

const FormOrder = () => {
  const { handleChangeInput, value } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
  });

  const { nombre, apellido, correo, mensaje } = value;

  return (
    <div className="content-form">
      <form className="form-order-moover">
          <h3 className="title-order">MOOVER</h3>
        <div>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChangeInput}
            onKeyDown={handleChangeInput}
            onBlur={handleChangeInput}
            autoComplete='off'
            placeholder="Nombre Completo"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="apellido"
            value={apellido}
            onChange={handleChangeInput}
            onKeyDown={handleChangeInput}
            onBlur={handleChangeInput}
            autoComplete='off'
            placeholder="Apellido Completo"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="correo"
            value={correo}
            onChange={handleChangeInput}
            onKeyDown={handleChangeInput}
            onBlur={handleChangeInput}
            autoComplete='off'
            placeholder="correo: ejemplo@correo.com"
            required
          />
        </div>

        <div>
            <textarea type="text"
            name="mensaje"
            value={mensaje}
            onChange={handleChangeInput}
            onKeyDown={handleChangeInput}
            onBlur={handleChangeInput}
            autoComplete='off'
            placeholder="Deja tu solicitud con un mensaje por favor" cols="30" rows="10"
            required
            >
            
            </textarea>
        </div>

        <button className="button-submit-order" type="submit">ENVIAR</button>

      </form>
    </div>
  );
};

export default FormOrder;
