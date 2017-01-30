var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.get('/', function (req, res) {

    var clientRequestId = req.query.clientRequestId;

    var response = {
        "platformId": 28380871,
        "domainId": 12520225,
        "owner": "W Brian Leonard",
        "status": "officia dolore cupidatat reprehenderit",
        "activationDate": "November 8, 2016",
        "accountId": -21241144,
        "clientRequestId": clientRequestId
    };

    res.send(response);
});

router.post('/', function (req, res) {

    //var clientRequestId = req.query.clientRequestId;

    console.log(req.body);
    
    var defaultResponse = "Not Specified"
    var platformId = defaultResponse;
    var clientRequestId = defaultResponse;
    var domainId = defaultResponse;
    var accountId = defaultResponse;

    if (typeof req.body.request !== 'undefined') {
        console.log(req.body.request[0]);
        console.log(req.body.request[0].platformId);
        var platformId = req.body.request[0].platformId;
        var clientRequestId = req.body.request[0].clientRequestId;
        var domainId = req.body.request[0].data.domain;
        var accountId = req.body.request[0].data.accountId;
        console.log(platformId, domainId, accountId);
    }

    var response = {
        "platformId": platformId,
        "domainId": domainId,
        "owner": "W Brian Leonard",
        "status": "Active",
        "activationDate": "November 11, 2001",
        "accountId": accountId,
        "clientRequestId": clientRequestId
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(response);

})

module.exports = router;

