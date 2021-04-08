const { ObjectId } = require('mongoose').Types;
const Mensaje = require('../models/Mensaje');

exports.crearMensaje = async (req, res) => {
    try {
        const mensaje = new Mensaje({
            ...req.body,
            createdAt: Date.now(),
            creador: req.usuario.id,
        });
        await mensaje.save();
        res.send(mensaje);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al enviar mensaje.');
    }
};

exports.obtenerMensajes = async (req, res) => {
    const mensajes = await Mensaje.find().select('-__v').populate('creador', 'nombre -_id');
    res.send(mensajes);
};

exports.obtenerMensaje = async (req, res) => {
    try {
        const { mensajeId } = req.params;
        if (!ObjectId.isValid(mensajeId)) {
            return res.status(400).send('Id no valido');
        }
        const mensaje = await Meme.findById(mensajeId);
        if (!mensaje) {
            return res.status(404).send('Mensaje no encontrado.');
        }
        res.send(mensaje);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar el mensaje.');
    }
};

exports.eliminarMensaje = async (req, res) => {
    try {
        const { mensajeId } = req.params;
        if (!ObjectId.isValid(mensajeId)) {
            return res.status(400).send('Id no valido');
        }

        const mensaje = await Meme.findById(mensajeId);

        if (!mensaje) {
            return res.status(404).send('Mensaje no encontrado');
        }

        if (mensaje.creador.equals(req.usuario.id)) {
            return res.status(403).send('No tiene permisos para borrar este mensaje');
        }

        await mensaje.remove();
        res.send('Mensajemensaje eliminado');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar mensaje');
    }
};

//cambiar todo lo que diga meme por mensaje 
//Ejecutar en postman con metodos get y post 