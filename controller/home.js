var user = require('../db/userdb');
var express = require('express');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
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
    user.list(function (err, da) {
        if (err) {
            console.log(err)
        }
        console.log(da);
        res.json(da);
    });
};
//图片的上传
home.file = function (req, res) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = '../public/upload/'; //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files) {

        if (err) {
            res.locals.error = err;
            res.render('index', { title: '123123' });
            return;
        }
        var extName = '';  //后缀名
        switch (files.fulAvatar.type) {
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', { title: "12123123" });
            return;
        }
        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;

        fs.renameSync(files.fulAvatar.path, newPath);  //重命名
        res.render('index', { title: '12123'});
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