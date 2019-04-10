// Application Dependencies
// ===============================================================================

/* Import Application Dependencies */
var path = require('path');
var express = require('express');
const session = require('express-session');

/* Create/Import Routes */
var indexRouter = require('./routes/index');


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

// Use 'express-session' to Automatically Create Cookies
var sess_options = {
	secret: 'whippersnapper' + Math.floor((Math.random() * 1000000000000) + 1),
	cookie: { secure: true, maxAge: 60000 },
	resave: false,
	saveUninitialized: true,
};
app.use(session(sess_options));

// Set Created Routes
app.use('/', indexRouter);


// Export
// ===============================================================================

module.exports = app;

