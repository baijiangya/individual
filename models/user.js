var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    name: String,
    pwd: String
});

module.exports = mongoose.model('User', UserSchema);
