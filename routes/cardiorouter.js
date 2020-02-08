var express=require('express'),
    router=express.Router(),
    cardiocontroller=require('../controller/cardiocontroller'),
    dccm= new cardiocontroller();

router.get('/', dccm.getAll.bind(dccm));
router.get('/:id', dccm.getById.bind(dccm));
router.post('/', dccm.create.bind(dccm));
router.put('/:id', dccm.update.bind(dccm));
router.delete('/:id', dccm.remove.bind(dccm));


module.exports=router;