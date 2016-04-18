/**
 * Created by baiji on 2016/4/4.
 */
var user = require('../models/user');

var us = {};

us.save = function (dem, fn) {
    var  customer = new user(dem);
    customer.save(function(err,date){
        fn(err,date);
    })
};
us.list = function(fn){
   user.find(function(err,dat){
       fn(err,dat)
   })
}
module.exports = us;