/**
 * Created by Russkov.Alexander on 2/12/2017.
 */
//var mongoose = require("mongoose");
//mongoose.connece("mongodb://localhost/DrawingMarketDataBase");
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');

module.exports = mongoose;
