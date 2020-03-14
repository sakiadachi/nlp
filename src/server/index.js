const dotenv = require('dotenv');
dotenv.config();


// Require the Aylien npm package
var AYLIENTextAPI = require("aylien_textapi")

// set aylien API credentials
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
var filename = path.basename('../dist/index.html')
console.log(filename)

const express = require('express')

const app = express()

// Initialize the main project folder
app.use(express.static('dist'))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// designates what port the app will listen to for incoming requests
const port = 8080;

// if we are inside a test, this shouldn't run
// TODO only run when not testing
app.listen(port, function() {
    console.log(`App listening on port ${port}!`)
})

console.log(__dirname)

// POST ROUTE
app.post('/classify', addData);

function sendData(req, res) {
    res.send(projectData)
}


/*
 checkBodyUrl({}) == false
 checkBodyUrl({url: "hello"}) == true
 */
function checkBodyUrl(body) {
    return body.url !== undefined;
}

function addData(req, res) {
    if (!checkBodyUrl(req.body)) {
        res.status(400).end();
        return;
    }

    textapi.classify({
            url: req.body.url
        },
        function(error, response) {
            if (error) {
                console.error("Something bad has happened", error);
                res.status(500).end();
                return;
            }
            res.json(response);
            console.log(response)
        }
    );
};

module.exports = {
    checkBodyUrl
};