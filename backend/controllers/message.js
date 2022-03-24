// const Usuario = require('../models/usuario'); Se puede importar tambien así
const { Message } = require('../models');

const getMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await Message.findById(id);
        res.json(message);
    } catch (error) {
        console.log(error);
        // return res.status(400).json({ msg: 'Error al buscar el id del mensaje' })
        
    }

}



const postMessage = async (req, res) => {

    const { ...message } = req.body

    const newMessage = new Message({...message, estado: true});

    await newMessage.save();

    res.status(201).json(newMessage);
}


module.exports = {
    getMessage,
    postMessage
}