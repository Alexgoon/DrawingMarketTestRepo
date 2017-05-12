/**
 * Created by Russkov.Alexander on 5/9/2017.
 */
var express = require('express');
var router = express.Router();
var url = require('url');
var User = require('../models/user');
var multer = require('multer');

router.get('/*', function (req, res, next) {
    if (req.url.startsWith("/images") || req.url.startsWith("/javascripts") || req.url.startsWith("/stylesheets")) {
        next();
        return;
    }
    var urlUserName = req.url.slice(1);
    User.findOne({username: urlUserName}, function (error, user) {
        if (error) next(error);
        res.render('profile', {profileUser: user});
    });
});
//router.get('/*', function (req, res, next) {
//    next();
//});
//router.get('/', function (req, res, next) {
//    res.render('profile', {profileUser: req.user});
//});

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/images/userAvatars");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + Date.now() + file.originalname);
    }
});

var upload = multer({storage: Storage}).array("avatarUploader", 3); //Field name and max count

//app.get("/", function (req, res) {
//    res.sendFile(__dirname + "/index.html");
//});

router.post("/api/Upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Couldn't upload image");
        }
        if (req.user) {
            var newAvatarFileName = req.files[0].filename;
            req.user.avatarFileName = newAvatarFileName;
            req.user.save(function (err, updatedUser) {
                if (err) return handleError(err);
                res.send(newAvatarFileName);
            });
        }
    });
});

module.exports = router;
