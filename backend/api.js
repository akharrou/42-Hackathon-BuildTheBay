
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
/* ~ GET Requests ~ */

router.get('/all', (req, res) => {
	res.end('API under construction...');
})

router.get('/restaurant', (req, res) => {
	res.end('API under construction...');
})

router.get('/categories', (req, res) => {
	res.end('API under construction...');
})

// =============================================================================
/* ~ POST Requests ~ */

router.post('/authenticate', (req, res) => {

	var login   = req.params.login;
	var passwd  = req.params.passwd;

	console.log(login);
	console.log(passwd);

	res.end('API under construction...');
})

router.post('/update/:field', (req, res) => {

	switch (req.query.field) {

		case 'name':
			/* update name */
			break;

		case 'address':
			/* update address */
			break;

		case 'website':
			/* update website */
			break;

		case 'description':
			/* update description */
			break;

		case 'hours':
			/* update hours */
			break;

		case 'phone':
			/* update phone */
			break;

		case 'photos':
			/* update photos */
			break;

		case 'cater':
			/* update cater */
			break;

		case 'service':
			/* update service */
			break;
	}

	res.end('API under construction...')
})

// =============================================================================

module.exports = router;
