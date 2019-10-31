var path = require('path');
var aylien = require('aylien_textapi');

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

// create environment variable for api keys
const dotenv = require('dotenv');
dotenv.config();

// api set in the .env file
var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
})

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/', function (req, res) {
    // res.send(mockAPIResponse)

	// calling api using sdk
	textapi.sentiment({
	  'text': 'i love this book'
	}, function(error, response) {
		if (error === null) {
			res.send(response);
		}
	})

})

// setup POST route: the first argument being the URL to make a POST to
app.post('/post', postData);

function postData(req, res) {
	console.log(req.body.test);
}