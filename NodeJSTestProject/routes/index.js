var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//router.get('/echo', function(req, res, next){
//  var urlParsed = url.parse(req.url, true);
//  console.log(urlParsed);
//  if (urlParsed.pathname == "/echo" && urlParsed.query.message) {
//    res.end(urlParsed.query.message);
//  }
//  res.end("Invalid request");
//})



module.exports = router;
