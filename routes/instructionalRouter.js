var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    //Enable CORS support...
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access-Control-Allow-Headers, Accept");
    next();
});

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

    console.log("discipline: " + discipline);

    if (discipline.toLowerCase() === 'astronomy') {

        var response = [
            {
                "title": "The Cosmic Perspective, 2nd edition",
                "arthor(s)": [
                    "Bennett",
                    "Donahue",
                    "Schneider",
                    "Voit"
                ],
                "publisher": "Pearson Education",
                "cover_image": "http://www.webassign.net/bdsvastro/BDSVastr02_cover_sm.jpg"
            },
            {
                "title": "Astronomy Today, 8th edition",
                "arthor(s)": [
                    "Chaisson ",
                    "McMillan"
                ],
                "publisher": "Pearson Education",
                "cover_image": "http://www.webassign.net/chaastrot8/chaastrot8_cover_sm.jpg"
            },
            {
                "title": "Astronomy: A Beginner's Guide to the Universe, 5th edition",
                "arthor(s)": [
                    "Chaisson ",
                    "McMillan"
                ],
                "publisher": "Pearson Education",
                "cover_image": "http://www.webassign.net/bg/bg5_cover_sm.jpg"
            }
        ];
        
    } else {
        var response = ["Unknown discipline"];
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(response);

});

module.exports = router;

