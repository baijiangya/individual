var express = require('express');
var router = express.Router();
var fs = require('fs');
var home = require('../controller/home.js');

/* GET home page. */
router.get('/', home.index);
router.get('/login', home.login);
router.get('/phone', home.phone);
router.get('/text', home.t);
router.all('/sign', home.sign);


//function login() {
//    var deviceAgent = req.headers['useragent'].toLowerCase();
//    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
//    if (agentID) {
//        console.log('手机');
//    } else {
//        console.log('pc');
//    }
//}


module.exports = router;
