var express = require('express'),
    router = express.Router(),
    userscontroller = require('../controller/userscontroller.js'),
    duc = new userscontroller();

router.get('', duc.getAll.bind(duc));
router.get('/:id', duc.getById.bind(duc));
router.post('', duc.create.bind(duc));
router.put('/:id', duc.update.bind(duc));
router.delete('/:id', duc.remove.bind(duc));

module.exports = router;