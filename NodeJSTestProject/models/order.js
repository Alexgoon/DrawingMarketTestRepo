/**
 * Created by Russkov.Alexander on 6/10/2017.
 */

var mongoose = require('../libs/mongoose');
var painting = mongoose.model('Order', {customerId: String, paintingId: String, orderDate: Date, address: {country: String, city: String, street: String, house: Number}});
module.exports = painting;