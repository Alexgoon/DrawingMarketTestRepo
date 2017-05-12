/**
 * Created by Russkov.Alexander on 2/12/2017.
 */
var mongoose = require('../libs/mongoose');
var painting = mongoose.model('Painting', {path: String, tag: String});
module.exports = painting;