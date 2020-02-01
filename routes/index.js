var express=require('express');
var router=express.Router();

router.use('/login', require('./loginrouter'));

router.use('/users', require('./usersrouter'));

router.use('/play', require('./playrouter'));

router.use('/totals', require('./totalrouter'));

router.use('/member', require('./memberrouter'));

module.exports=router;