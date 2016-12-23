var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 80;

var decoderRouter = require('./routes/decoderRouter');
app.use('/decoder', decoderRouter);

var beallsRouter = require('./routes/beallsRouter');
app.use('/bealls', beallsRouter);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/messaging', function (req, res) {

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

app.post('/messaging', function (req, res) {

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

// For easy browser testing...
app.get('/platforms/:platformId/domains/:domainId/accounts/:accountId', function (req, res) {

    console.log(req.body);
    
    var platformId = req.params.platformId;
    var domainId = req.params.domainId;
    var accountId = req.params.accountId;
    var clientRequestId = req.query.clientRequestId;

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

app.post('/platforms/:platformId/domains/:domainId/accounts/:accountId', function (req, res) {

    console.log(req.body);
    
    var platformId = req.params.platformId;
    var domainId = req.params.domainId;
    var accountId = req.params.accountId;
    var clientRequestId = req.query.clientRequestId;

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

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
})