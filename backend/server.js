#!/usr/bin/env node

// ===============================================================================

/* Private Constants */
const PORT         = process.env.PORT;
const LOCALHOST    = process.env.LOCALIP;

const DB_USER      = '42';
const DB_PWD       = '42';
const DB_URI       = `mongodb+srv://${DB_USER}:${DB_PWD}@42-buildthebay-project-7nufr.mongodb.net/btb`;

/* Dependencies */
const express      = require('express');
const mongoose     = require('mongoose');

/* Routers */
const apiRouter    = require('./routes/api');
const adminRouter  = require('./routes/admin');

// ===============================================================================

/* Connect to Mongoose */
mongoose.connect(DB_URI, { useNewUrlParser: true });
mongoose.connection;

// ===============================================================================

// Initialize App Server
var app = express();

/* App Server Configurations */
app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use( '/api',   apiRouter   );
app.use( '/admin', adminRouter );

// ===============================================================================

/* Deploy App Server */
app.listen(PORT, () => {
	console.log("Server Status: [LIVE]");
	console.log(`Server running at 'http://${LOCALHOST}:${PORT}/'`);
});

// ===============================================================================

module.exports = app;
