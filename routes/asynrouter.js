var express=require('express'),
    router=express.Router(),
    asynController=require('../controller/asyncontroller'),
    asc= new asynController();

router.get('/', asc.getAll.bind(asc));
router.get('/:id', asc.getById.bind(asc));
router.post('/', asc.create.bind(asc));
router.put('/:id', asc.update.bind(asc));
router.delete('/:id', asc.remove.bind(asc));

module.exports=router;