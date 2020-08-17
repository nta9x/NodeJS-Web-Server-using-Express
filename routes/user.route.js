var express = require('express');
const userController = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const router = express.Router();
router.get('/', userController.index);
router.get('/create',userController.create);
router.post('/create',validate.postCreate, userController.postCreate);
router.get('/view/:id', userController.views);
router.get('/delete/:id', userController.delete);
router.get('/search',userController.search)
module.exports = router;