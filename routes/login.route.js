var express = require('express');
//module project
const db = require('../db');
const UserController = require('../controllers/login.controller');
const router = express.Router();

router.get('auth/login', UserController.login);
module.exports = router;