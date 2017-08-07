var router = require("express").Router();


router.get("/", function(req, res, next){
    var Painting = require('../models/painting');
    Painting.findById(req.query.paintingId,function(error, pntg){
        res.render('painting', { painting: pntg });
    });
});

module.exports = router;
