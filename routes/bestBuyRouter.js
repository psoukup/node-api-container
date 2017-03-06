var express = require('express');
var request = require('request');
var chalk = require('chalk');
var fileSystem = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');

var router = express.Router();

/*

var records = require('./products_small.json');

var transformStream = JSONStream.stringify();
var outputStream = fileSystem.createWriteStream(__dirname + "/data.json");

transformStream.pipe(outputStream);

records.forEach(transformStream.write);

transformStream.end();

outputStream.on(
        "finish",
        function handleFinish() {
            console.log(chalk.green("JSONStream serializatnion complete!"));
            console.log("------------------------------------------------");
        });

outputStream.on(
        "finish",
        function handleFinish() {
            var transformStream = JSONStream.parse("*");
            var inputStream = fileSystem.createReadStream(__dirname + "/data.json");

            inputStream
                    .pipe(transformStream)

                    .on(
                            "data",
                            function handleRecord(data) {

                                console.log(chalk.red("Record (event):"), data);
                            })

                    .on(
                            "end",
                            function handleEvent() {

                                console.log("----------------------------------------");
                                console.log(chalk.green("JSONstream parsing complete"));
                            });
        });
*/

function readStream() {
    var transformStream = JSONStream.parse("*");
    var inputStream = request('https://raw.githubusercontent.com/BestBuyAPIs/open-data-set/master/products.json', function (error, response, body){});
    
    inputStream
            .pipe(transformStream)

            .on(
                    "data",
                    function handleRecord(data) {

                        console.log(chalk.red("Record (event):"), data.name);
                    })

            .on(
                    "end",
                    function handleEvent() {

                        console.log("----------------------------------------");
                        console.log(chalk.green("JSONstream parsing complete"));
                    });
};





/*
 request({url: 'https://raw.githubusercontent.com/BestBuyAPIs/open-data-set/master/products.json'})
 .pipe(JSONStream.parse('name.*'))
 .pipe(es.mapSync(function (data) {
 console.error(data);
 return data;
 
 }))
 .pipe(process.stdout);
 */

// will handle any request that ends in /bestbuy/products
router.get('/products', function (req, res, next) {
    readStream();
});

module.exports = router;

