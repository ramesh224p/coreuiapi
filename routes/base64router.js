var express = require('express'),
    router = express.Router(),
    basecontroller = require('../controller/base64controller'),
    b64c = new basecontroller();

router.post('/', b64c.create.bind(b64c));

module.exports = router;