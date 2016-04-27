//exports.login = function (req, res) {
//    res.render('index', {'title': '首页'});
//};
var user = require('../db/userdb');


var home = {};
//首页的加载
home.index = function (req, res) {
    res.render('index', {'title': '首页'});
};
home.sign = function (req, res) {
    var us = ({
        name: req.body.name,
        pwd: req.body.pwd
    });
    ////user.save(us, function (err, da) {
    ////    if (err) {
    ////        console.log(err)
    ////    }
    ////    console.log('存储的值');
    ////    console.log(da)
    ////});
    user.list(function (err, da) {
        if (err) {
            console.log(err)
        }
        res.json(da);
    });
};
home.login = function (req, res) {
    res.render('login', {'title': '用户登录'});
};
home.ring = function (req, res) {
    res.render('login', {'title': '用户登录'});
};
home.phone = function (req, res) {
    res.render('phone', {'title': '手机页面'});
};
home.t = function (req, res) {
    res.render('text', {'title': '手机页面'});
};
module.exports = home;