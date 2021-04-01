const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const auth = require('../middlewares/auth');

router.post('/', auth, productsController.createProduct);
router.delete('/:productId', auth, productsController.deleteProduct);
router.get('/:productId', productController.getProductById);
router.get('/', productsController.getProducts);

module.exports = router;