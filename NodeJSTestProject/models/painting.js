/**
 * Created by Russkov.Alexander on 2/12/2017.
 */

//http://mongoosejs.com/docs/subdocs.html - subdocument

var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;
var childSchema = new Schema({fileName: String});
var painting = mongoose.model('Painting', {fileName: String, tags: [String], additionalImages: [childSchema], authorID: String});
module.exports = painting;