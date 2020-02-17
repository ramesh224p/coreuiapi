var express = require('express'),
    router = express.Router(),
    strengthController = require('../controller/strengthcontroller'),

    tc = new strengthController();

router.get('/', tc.getAll.bind(tc));
router.get('/:id', tc.getById.bind(tc));
router.post('/', tc.create.bind(tc));
router.put('/:id', tc.update.bind(tc));
router.delete('/:id', tc.remove.bind(tc));


module.exports = router;
