var express = require('express'),
    router = express.Router();

router.use('/login', require('./loginrouter'));

router.use('/users', require('./usersrouter'));

router.use('/pedicuretotal', require('./pedicurerouter'));

router.use('/strengthtotal', require('./strengthrouter'));

router.use('/member', require('./memberrouter'));

router.use('/dashboard', require('./dashboardrouter'));

router.use('/uploads', require('./uploadrouter'));

router.use('/baseupload', require('./base64router'));

router.use('/totalusers', require('./totalusersrouter'));

router.use('/forgotpass', require('./forgotpassrouter'));

router.use('/defaultpass', require('./defaultpassrouter'));

module.exports = router;