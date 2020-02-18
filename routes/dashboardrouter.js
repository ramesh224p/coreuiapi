var express = require('express'),
    router = express.Router(),
    dashboardcontroller = require('../controller/dashboardcontroller.js'),
    dcr = new dashboardcontroller();


router.get('/', dcr.get.bind(dcr));

module.exports = router;