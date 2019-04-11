
// =============================================================================

/* Private Constants */
const DB_USER  = '42';
const DB_PWD   = '42';

/* Dependencies */
const express  = require('express')

/* Connection to Database */
const URI      = `mongodb+srv://${DB_USER}:${DB_PWD}@42-buildthebay-project-7nufr.mongodb.net/test?retryWrites=true`;
const DB       = require('mongoose').connect(URI, { useNewUrlParser: true });

/* Create API Router */
const router   = express.Router();

// =============================================================================

router.get('/all', (req, res) => {
	res.end('Hello World !')
})

router.get('/base', (req, res) => {
	res.end('Hello World !')
})

router.get('/authenticate', (req, res) => {
	res.end('Hello World !')
})

router.get('/update/:field', (req, res) => {
	res.end('Hello World !')
})

// =============================================================================

module.exports = router;
