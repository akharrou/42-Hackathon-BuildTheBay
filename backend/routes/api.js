
/* API ROUTER */
// =============================================================================

/* Dependencies */
const express      = require('express')

/* Creating API Router */
const router       = express.Router();

/* Models */
const Restaurant   = require('../models/restaurant')

// =============================================================================
/* ~ GET Requests ~ */

router.get('/all', (req, res) => {

	Restaurant.getRestaurants((err, restaurants) => {

		if(err)
			throw err;
		console.log(restaurants);
		res.json(restaurants);
	});

	// res.end('API under construction...');
});

router.get('/restaurant/:id', (req, res) => {

	console.log(req.params.id);

	res.end('API under construction...');
});

router.get('/categories', (req, res) => {

	res.end('API under construction...');
});

// =============================================================================
/* ~ POST Requests ~ */

router.post('/authenticate', (req, res) => {

	var login   = req.body.login;
	var passwd  = req.body.passwd;

	console.log(login);
	console.log(passwd);

	res.end('API under construction...');
});

router.post('/update/:field', (req, res) => {

	console.log(req.params.field);

	switch (req.params.field) {

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
});

// =============================================================================

module.exports = router;
