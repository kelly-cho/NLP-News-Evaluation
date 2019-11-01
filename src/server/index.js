var path = require('path')
var aylien = require('aylien_textapi')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// to store text analysis result from api call
let inputURL = ''

// create environment variable for api keys
const dotenv = require('dotenv')
dotenv.config()

// api set in the .env file
var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
})

const app = express()

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/analyze', function (req, res) {

	// calling api using sdk
	textapi.sentiment({
	  'text': inputURL
	}, function(error, response) {
		if (error === null) {
			res.send(response)
		} else {
			console.log(error)
		}
	})
})

// setup POST route: the first argument being the URL to make a POST to
app.post('/', postData);

function postData(req, res) {
	inputURL = req.body.url
}