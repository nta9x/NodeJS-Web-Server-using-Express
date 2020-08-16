var express = require('express');
//module project
const authController = require('../controllers/login.controller');
const router = express.Router();

router.get('/login', authController.login);
router.post('/login', authController.postLogin);

module.exports = router;