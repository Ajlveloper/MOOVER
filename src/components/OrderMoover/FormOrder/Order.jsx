import React from 'react'

const Order = ({ handleSubmit, handleChangeInput, errors, value }) => {
  const { nombre, apellido, correo, mensaje } = value;

  return (
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
            disabled={nombre && apellido && errors.correo === undefined && mensaje ? false : true}
            className={
              nombre && apellido && errors.correo === undefined && mensaje
                ? "button-submit-order"
                : "errors-desibled"
            }
            type="submit"
          >
            ENVIAR
          </button>
        </form>
      </div>
  )
}

export default Order