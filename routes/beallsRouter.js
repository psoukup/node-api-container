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
    
    var queryString = req.query.queryString;
    var queryScope = req.query.queryScope;
    var minMatch = req.query.minMatch;
    
    minMatch = ((typeof minMatch == 'undefined') ? "0" : minMatch)
    
    console.log("queryString: " + queryString);
    console.log("queryScope: " + queryScope);
    
    if (queryString === 'Florida Gator Pants' || queryScope === 'All' || minMatch.substring(0,1) === '2') {
    
        var response = {
            "recordSetTotalMatches":"1",
            "recordSetTotal": 1,
             "resourceName": "productview",
             "resourceId": "https://qa-api.inc.com/search/resources/store/10151/productview/bySearchTerm/alia%20dunner%20clothing?pageNumber=1&pageSize=10&catalogId=12003",
             "recordSetStartNumber": 0,
             "recordSetComplete": "true",
             "recordSetCount": 0,
             "catalogEntryView": [],
             "metaData": {
               "spellcheck": [
                 "aqua",
                 "all"
               ],
               "price": "1",
            "queryString" : queryString,
            "queryScope": queryScope,
            "minMatch": minMatch
            }
        }         
    } else {
        var response = {
            "recordSetTotal": 0
        }
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.send(response);

})

/* 
 * This example was written to demonstrate how the API Platform could be used to
 * resubmit a request if zero records are returned. 
 */
router.get('/bySearchTerm/:searchTerm', function (req, res) {
 
    var searchTerm = req.params.searchTerm;    
    var minMatch = req.query.minMatch
    
    minMatch = ((typeof minMatch == 'undefined') ? "0" : minMatch)
    
    console.log("searchTerm: " + searchTerm);
    console.log("minMatch: " + minMatch);
    
    if (searchTerm === 'alia dunner pants' || minMatch.substring(0,1) === '2') {
    
        var response = {
            "recordSetTotalMatches":"1",
            "recordSetTotal": 1,
             "resourceName": "productview",
             "resourceId": "https://qa-api.inc.com/search/resources/store/10151/productview/bySearchTerm/alia%20dunner%20clothing?pageNumber=1&pageSize=10&catalogId=12003",
             "recordSetStartNumber": 0,
             "recordSetComplete": "true",
             "recordSetCount": 0,
             "catalogEntryView": [],
             "metaData": {
               "spellcheck": [
                 "aqua",
                 "all"
               ],
               "price": "1",
            "searchTerm" : searchTerm,
            "minMatch": minMatch
            }
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

