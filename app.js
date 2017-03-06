var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;

var beallsRouter = require('./routes/beallsRouter');
app.use('/bealls', beallsRouter);

var bestBuyRouter = require('./routes/bestBuyRouter');
app.use('/bestbuy', bestBuyRouter);

var decoderRouter = require('./routes/decoderRouter');
app.use('/decoder', decoderRouter);

var instructionalRouter = require('./routes/instructionalRouter');
app.use('/instructional', instructionalRouter);

var messagingRouter = require('./routes/messagingRouter');
app.use('/messaging', messagingRouter);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World!');
});

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