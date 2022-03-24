const { request, response } = require("express");
const { ObjectId } = require('mongoose').Types;


const validaName = (req = request, res = response, next) => {

    const { nombre, apellido, correo, mensaje } = req.body;

    if (!nombre || !apellido) return res.status(400).json({ msg: 'Son obligatorios el nombre y apellido / verificar por favor' });

    if (!correo || !mensaje) return res.status(400).json({ msg: 'Son obligatorios el correo y mensaje / verificar por favor' });

    next();

}

const validaId = (req = request, res = response, next) => {
    const { id } = req.params;

    const idVerify = ObjectId.isValid(id);
    if(!idVerify) return res.status(400).json({ msg: `El id ${id} no es permitido` });
    // if (!id) return res.status(400).json({ msg: 'Es obligatorio enviar el id del mensaje' });

    next();
}





module.exports = {
    validaName,
    validaId
}