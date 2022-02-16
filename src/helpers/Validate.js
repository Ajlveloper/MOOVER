const expresiones = {
    text: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos y requiere solo 20 caracteres como max.
    correo: /\S+@\S+\.\S+/,  // Letras y espacios, pueden llevar acentos y requiere solo 20 caracteres como max.
}

export const validate = (input) => {
    let errors = {};


    /* Verificacion del nombre__________ */
    if (!input.nombre) {
        errors.nombre = 'Es requerido su nombre';
    } else if (!expresiones.text.test(input.nombre)) {
        errors.nombre = 'Solo se permiten letras y un maximo de 20 caracteres';
    }

    /* Verificacion del apellido________ */
    else if (!input.apellido) {
        errors.apellido = 'Es requerido su apellido';
    } else if (!expresiones.text.test(input.apellido)) {
        errors.apellido = 'Solo se permiten letras y un maximo de 20 caracteres';
    }


    /* Verificacion del correo__________ */
    else if (!input.correo) {
        errors.correo = 'Es requerido su correo'
    } else if (!expresiones.correo.test(input.correo)) {
        errors.correo = 'Debe ingresar su correo correctamente por favor';
    } 


    /* Verificacion del mensaje__________ */
    else if (!input.mensaje) {
        errors.mensaje = 'El mensaje es requerido';
    }

    return errors;

}