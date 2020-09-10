var express = require('express');
//module project
const shopController = require('../controllers/shop.controller');
const router = express.Router();

router.get('/', shopController.index);
router.get('/detail',shopController.detail);

module.exports = router;