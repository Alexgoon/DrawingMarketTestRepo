/**
 * Created by Russkov.Alexander on 4/30/2017.
 */
var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.post('/', function(req, res, next) {
    req.session.destroy();
    res.send({redirect: '/login'});
});

module.exports = router;
