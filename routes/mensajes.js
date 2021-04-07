const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');
const auth = require('../middlewares/auth');

router.post('/', auth, mensajeController.crearMensaje);
router.delete('/:mensajeId', auth, mensajeController.eliminarMensaje);
router.get('/:mensajeId', mensajeController.obtenerMensaje);
router.get('/', mensajeController.obtenerMensajes);

module.exports = router;