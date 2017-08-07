var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("./libs/mongoose");
var index = require('./routes/index');
var users = require('./routes/users');
var gallery = require('./routes/gallery');
var login = require('./routes/login');
var logout = require('./routes/logout');
var profile = require('./routes/profile');
var painting = require('./routes/painting')
var charge = require('./routes/charge')
var connect = require('connect');
//var User = require('../models/user');
//var MongoStore = require("connect-mongo")(express);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var multer = require('multer');



//init paintins
var Painting = require('./models/painting');

//var paintOne = new Painting({
//    fileName: "tmpImg1.jpg",
//    tags: ["tag1", "tag2", "tag3"],
//    additionalImages: [{fileName: "tmpImg1 (2).jpg"}, {fileName: "tmpImg1 (3).jpg"}]
//});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});

//var paintTwo = new Painting({
//    fileName: "tmpImg1 (4).jpg",
//    tags: ["tag1", "tag4", "tag5"],
//    additionalImages: [{fileName: "tmpImg1 (5).jpg"}]
//});
//paintTwo.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (2).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (3).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (4).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (5).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (6).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});
//paintOne = new Painting({path: "http://localhost:3000/images/paintings/tmpImg1 (7).jpg", tag: "Tag1"});
//paintOne.save(function (err) {
//    if (err)
//        console.log(err);
//});

//init paintins

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(session({
    secret: 'foo',
    key: 'sid',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: null
    },
    store: new MongoStore({mongooseConnection: mongoose.connections[0]})
}));


app.use(require('./middleware/loadUser'));
app.use(express.static(path.join(__dirname, 'public')));

//session support
//app.use(express.cookieDecoder());
//app.use(function (req, res, next) {
//    //var err = new Error('Not Found');
//    //err.status = 404;
//    next();
//});

app.use('/public/paintings', express.static('paintings'));

app.use('/', index);
app.use('/users', users);
app.use('/gallery', gallery);
app.use('/login', login);
app.use('/logout', logout);
app.use('/profile', profile);
app.use('/painting', painting);
app.use('/charge', charge);

//stripe
//pp.get("/", function (req, res) {
//    return res.render("index.pug", { keyPublishable: keyPublishable });
//});

//app.post("/charge", function (req, res) {
//    var amount = 500;
//    //TODO: get amount, get product price and compare
//    stripe.customers.create({
//        email: req.body.stripeEmail,
//        source: req.body.stripeToken
//    }).then(function (customer) {
//        return stripe.charges.create({
//            amount: amount,
//            description: "Sample Charge",
//            currency: "usd",
//            customer: customer.id
//        });
//    }).then(function (charge) {
//        return res.render("charge.ejs");
//    });
//});
//stripe


//<image upload>
//var Storage = multer.diskStorage({
//    destination: function (req, file, callback) {
//        callback(null, "./public/images/userAvatars");
//    },
//    filename: function (req, file, callback) {
//        callback(null, file.fieldname + Date.now() + file.originalname);
//    }
//});
//
//var upload = multer({storage: Storage}).array("avatarUploader", 3); //Field name and max count
//
////app.get("/", function (req, res) {
////    res.sendFile(__dirname + "/index.html");
////});
//
//app.post("/api/Upload", function (req, res) {
//    upload(req, res, function (err) {
//        if (err) {
//            return res.end("Couldn't upload image");
//        }
//        if (req.user) {
//            req.user.avatarFileName = req.files[0].filename;
//            req.user.save(function (err, updatedUser) {
//                if (err) return handleError(err);
//            });
//        }
//    });
//});
//</image upload>


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
