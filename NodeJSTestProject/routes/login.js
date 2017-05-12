/**
 * Created by Russkov.Alexander on 4/17/2017.
 */

var express = require('express');
var router = express.Router();
var url = require('url');
var User = require('../models/user');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/', function (req, res, next) {
    var username = req.body.username.toLowerCase();
    var password = req.body.password;
    User.findOne({username: username}, function (err, user) {
        if (user) {
            if (user.password == password) {
                req.session.userId = user._id;
                res.redirect('/gallery');

            }
            else {
                res.render('error');
                //forbidden
            }
        }
        else{
            var user = new User({username: username, password: password});
            user.save(function(err){
                if(err) return next(err);
                req.session.userId = user._id;
                res.redirect('/gallery');
            })
        }
    })

});

module.exports = router;
