/**
 * Created by Russkov.Alexander on 6/10/2017.
 */

var express = require('express');
var router = express.Router();
const keyPublishable = "pk_test_JyBtr1c3ApkxuOLkakmHntaJ";
const keySecret = "sk_test_t1W0lD6gPg0p9AR4Uc2MAfZm";
var Order = require('../models/order');

const stripe = require("stripe")(keySecret);
/* GET users listing. */
router.post("/", function (req, res) {
    var amount = 500;
    //TODO: get amount, get product price and compare
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(function (customer) {
        return stripe.charges.create({
            amount: amount,
            description: "Sample Charge",
            currency: "usd",
            customer: customer.id
        });
    }).then(function (charge) {
        var order = new Order({customerId: req.user._id});
        order.save(function(err){
            if(err) return next(err);
            return res.render("charge.ejs");
        })
    });
});

module.exports = router;
