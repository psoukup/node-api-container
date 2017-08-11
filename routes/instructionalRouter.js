var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//
/* Because of bug (https://bug.oraclecorp.com/pls/bug/webbug_print.show?c_rptno=24943301)
 /* oracledb will not build in DevCS until the 17.2.3 release. Once that realese 
 * is out add the depenency:
 * "oracledb": "^1.12.2",
 * to package.json.
 */
//var oracledb = require('oracledb');

router.use(cors());

// will handle any request that ends in /instructional
router.get('/', function (req, res, next) {
    var response = [
        "Catalog",
        "Instructors",
        "Students",
        "Support",
        "Blog"
    ];
    res.send(response);
});

// will handle any request that ends in /instructional/instructors
router.get('/instructors', function (req, res, next) {
    var response = [
        "Disciplines",
        "Features",
        "Resources",
        "Purchasing",
        "Getting Started"
    ];
    res.send(response);
});

// will handle any request that ends in /instructional/instructors/disciplines
router.get('/instructors/disciplines', function (req, res, next) {
    var response = [
        "All Mathmatics",
        "Developmental Math",
        "Precalculus",
        "Calculus",
        "Advanced Math",
        "All Mathmatics",
        "Statistics",
        "Physics",
        "Chemistry",
        "Biology",
        "Astronomy"
    ];
    res.send(response);
});

// will handle any request that ends in /instructional/instructors/disciplines/{discipline}
router.get('/instructors/disciplines/:discipline', function (req, res) {

    var discipline = req.params.discipline;
    var relax = ((typeof req.query.relax !== 'undefined') ? req.query.relax : "false");
    
    console.log("discipline: " + discipline);
    console.log("relax: " + relax);

    // Holding off on my node.js implementation until oracledb is supported by DevCS
    //getBooks(discipline.toLowerCase());

    if (discipline.toLowerCase() === 'astronomy' || relax === "true") {

        var response =
                {
                    "recordsFound": 3,
                    "searchTerm": discipline,
                    "relaxed": relax,
                    "results": [
                        {
                            "title": "The Cosmic Perspective, 2nd edition",
                            "authors": [
                                "Bennett",
                                "Donahue",
                                "Schneider",
                                "Voit"
                            ],
                            "publisher": "Baldwin Education",
                            "cover_image": "http://www.webassign.net/bdsvastro/BDSVastr02_cover_sm.jpg"
                        },
                        {
                            "title": "Astronomy Today, 8th edition",
                            "authors": [
                                "Chaisson ",
                                "McMillan"
                            ],
                            "publisher": "Pearson Education",
                            "cover_image": "http://www.webassign.net/chaastrot8/chaastrot8_cover_sm.jpg"
                        },
                        {
                            "title": "Astronomy: A Beginner's Guide to the Universe, 5th edition",
                            "authors": [
                                "Chaisson ",
                                "McMillan"
                            ],
                            "publisher": "Pearson Education",
                            "cover_image": "http://www.webassign.net/bg/bg5_cover_sm.jpg"
                        }
                    ]
                };

    } else {
        var response = 
                {
                    "recordsFound": 0,
                    "searchTerm": discipline,
                    "relaxed": relax
                };                
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(response);

});

// will handle any request that ends in /instructional/headers
router.get('/headers', function (req, res, next) {
    var response = {
        "headers": req.headers
    };
    res.send(response);
});

function getBooks(discipline) {

    oracledb.getConnection({
        user: "DevOps",
        password: "DevOps",
        connectString: "localhost:1521/PDB1.gse00001970.oraclecloud.internal" //.wbrianleonard.oraclecloud.internal"  
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        var sqlString = "SELECT books.title, authors.name, books.publisher, books.cover_image FROM BOOKS JOIN AUTHORS on books.book_id=authors.book_id WHERE books.discipline='" + discipline + "'";
        console.log(sqlString);
        connection.execute(sqlString,
                [],
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        doRelease(connection);
                        return;
                    }
                    console.log(result.metaData);
                    console.log(result.rows);
                    doRelease(connection);
                });
    });
}

function doRelease(connection) {
    connection.release(
            function (err) {
                if (err) {
                    console.error(err.message);
                }
            }
    );
}

module.exports = router;

