var express=require('express'),
    router=express.Router(),
    pedicureController=require('../controller/pedicurecontroller'),

    pr= new pedicureController();

router.get('/', pr.getAll.bind(pr));
router.get('/:id', pr.getById.bind(pr));
router.post('/', pr.create.bind(pr));
router.put('/:id', pr.update.bind(pr));
router.delete('/:id', pr.remove.bind(pr));

module.exports=router;