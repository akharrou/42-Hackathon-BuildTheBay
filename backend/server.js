#!/usr/bin/env node

// ===============================================================================

/* Private Constants */
const PORT       = process.env.PORT;
const LOCALHOST  = process.env.LOCALIP;

/* Dependencies */
const express    = require('express');
const apiRouter  = require('./api');

// ===============================================================================

// Initialize App Server
var app = express();

/* App Server Configurations */
app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

// ===============================================================================

/* Deploy App Server */
app.listen(PORT, () => {
	console.log("Server Status: [LIVE]");
	console.log(`Server running at 'http://${LOCALHOST}:${PORT}/'`);
});

// ===============================================================================

module.exports = app;
