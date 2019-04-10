// Application Dependencies
// ===============================================================================

var indexRouter = require('./routes/index');

/* Import Application Dependencies */
var path = require('path');
var express = require('express');
var session = require('express-session');

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const URL = "mongodb+srv://42:42@42-buildthebay-project-7nufr.mongodb.net/test?retryWrites=true";

// Database Name
const dbName = 'restaurants';

const client = new MongoClient(URL, { useNewUrlParser: true });

client.connect(err => {

	console.log("Connected successfully to server");
	const collection = client.db("restaurants").collection("profiles");

  // perform actions on the collection object


  client.close();
});


// Initialize Application Server
// ===============================================================================
var app = express();


// Add MiddleWare
// ===============================================================================

// Set Path to Static HTML Pages
app.use(express.static(path.join(__dirname, 'public/html/')));

// Request Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use 'express-session' to Automatically Create Session Data
app.use(session({
	secret: 'whippersnapper' + Math.floor((Math.random() * 1000000000000) + 1),
	cookie: { secure: true, maxAge: 60000 },
	resave: false,
	saveUninitialized: true,
}));

// Set Created Routes
app.use('/', indexRouter);

// Export
// ===============================================================================

module.exports = app;

