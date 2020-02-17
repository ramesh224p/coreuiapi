var express = require('express'),
    router = express.Router(),
    totaluserscontroller = require('../controller/totaluserscontroller'),
    tccm = new totaluserscontroller();

router.get('/', tccm.getAll.bind(tccm));
router.get('/:id', tccm.getById.bind(tccm));
router.post('/', tccm.create.bind(tccm));
router.put('/:id', tccm.update.bind(tccm));
router.delete('/:id', tccm.remove.bind(tccm));


module.exports = router;