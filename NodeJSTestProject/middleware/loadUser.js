/**
 * Created by Russkov.Alexander on 4/18/2017.
 */

var User = require('../models/user');

module.exports = function(req, res, next){
    req.user = res.locals.user = null;
    if(!req.session.userId) return next();
    //req.user = {username: "testname"};
    //next();
    User.findById(req.session.userId, function(err, user){
        if(err) return next(err);
        req.user = res.locals.user = user;
        next();
    });
};
