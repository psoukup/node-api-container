var express = require('express');
var bealls = require('./bealls.json');
var router = express.Router();

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// will handle any request that ends in /decoder
router.get('/', function (req, res, next) {
    res.send(bealls);
});

module.exports = router;

