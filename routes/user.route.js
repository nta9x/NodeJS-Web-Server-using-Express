var express = require('express');
const shotid = require('shortid');
//module project
const db = require('../db');
const UserController = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const router = express.Router();

router.get('/', UserController.index);
router.get('/create',UserController.create);
router.post('/create',validate.postCreate, UserController.postCreate);
router.get('/:id', UserController.views);
router.get('/delete/:id', UserController.delete);

module.exports = router;