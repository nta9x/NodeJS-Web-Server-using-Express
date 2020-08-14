var express = require('express');
//module project
const db = require('../db');
const UserController = require('../controllers/login.controller');
const checkLogin = require('../validate/checkLogin')
const router = express.Router();

router.get('/login', UserController.login);
router.post('/login', UserController.postLogin);

module.exports = router;