var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    var Painting = require('../models/painting');
    Painting.find({tag: req.query.tag},function(error, pntgs){
        res.render('gallery', { paintings: pntgs });
    });

});

module.exports = router;
