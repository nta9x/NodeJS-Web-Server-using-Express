var express = require('express');
//module project
const authController = require('../controllers/logout.controlle');
const router = express.Router();

router.get('/logout', authController.logout);

module.exports = router;