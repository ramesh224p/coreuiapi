var express = require('express');
var router = express.Router();
var memberController = require('../controller/membercontroller.js');
var mc = new memberController();

router.get('/:id', mc.getById.bind(mc));

module.exports = router;