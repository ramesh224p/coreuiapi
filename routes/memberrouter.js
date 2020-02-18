var express = require('express'),
    router = express.Router(),
    memberController = require('../controller/membercontroller.js'),
    mc = new memberController();

router.get('/:id', mc.getById.bind(mc));

module.exports = router;