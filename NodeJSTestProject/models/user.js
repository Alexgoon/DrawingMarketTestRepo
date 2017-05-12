/**
 * Created by Russkov.Alexander on 4/18/2017.
 */
var mongoose = require('../libs/mongoose');
var painting = mongoose.model('User', {username: String, password: String, avatarFileName: String});
module.exports = painting;
