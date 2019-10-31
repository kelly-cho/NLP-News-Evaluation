var path = require('path')
var aylien = require('aylien_textapi')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// create environment variable for api keys
const dotenv = require('dotenv')
dotenv.config()

// api set in the .env file
var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
})

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// calling api using sdk
textapi.sentiment({
  'url': 'https://elemental.medium.com/fecal-transplant-death-mystery-solved-d99f24b8656f'
}, function(error, response) {
	if (error === null) {
		console.log(response)
	}
})