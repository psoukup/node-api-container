var express = require('express');
var bealls = require('./bealls.json');
var router = express.Router();

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// will handle any request that ends in /bealls
router.get('/', function (req, res, next) {
    res.send(bealls);
});

/* 
 * This example was written to demonstrate how the API Platform could be used to
 * resubmit a request if zero records are returned. 
 */
router.get('/catalog', function (req, res) {

    console.log(req.body);
    
    var queryString = req.query.queryString;
    var queryScope = req.query.queryScope;
    
    console.log("queryString: " + queryString);
    console.log("queryScope: " + queryScope);
    
    if (queryString === 'Florida Gator Pants' || queryScope === 'All') {
    
        var response = {
            "recordSetTotal":"1",
            "sequenceId": "12003_-1_1.00000",
            "name": "Florida Gator Pants",
            "uniqueID": "144075",
            "storeID": "10051",
            "seo_token_ntk": "pants",            
            "queryString" : queryString,
            "queryScope": queryScope
            } 
    } else {
        var response = {
            "recordSetTotal": 0
        }
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.send(response);

})

module.exports = router;

