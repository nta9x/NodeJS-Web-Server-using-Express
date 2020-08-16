var express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');


router.get('/', productController.index);
router.get('/create',productController.create);
router.post('/create', productController.postCreate);
router.get('/view/:id', productController.views);
router.get('/delete/:id', productController.delete);
router.get('/search',productController.search)
module.exports = router;