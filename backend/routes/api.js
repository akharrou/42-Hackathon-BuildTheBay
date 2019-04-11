
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

	/* Get All Info of All Restaurants */
	Restaurant.getRestaurants((err, restaurants) => {

		if (err)
			throw err;
		// console.log(restaurants);
		res.json(restaurants);
	});
});

router.get('/restaurant/:id', (req, res) => {

	var restaurant_ID = req.params.id;

	/* Get Info of Only the Specified Restaurant (if it exists) */
	Restaurant.getRestaurants((err, results) => {

		if (err)
			throw err;
		for (var i in results) {
			if (results[i]['_id'] == restaurant_ID) {
				// console.log(results[i]
				res.json(results[i]);
				break;
			}
		}
		res.json('Error Not Found');
	});
});

router.get('/categories', (req, res) => {

	var categories = [];

	/* Get All Categories */
	Restaurant.getRestaurants((err, results) => {

		if (err)
			throw err;
		for (var i in results) {

			j = 0;
			exists = false;
			if (results[i]['Category'] == '')
				exists = true;
			while (exists == false && categories.length > j) {
				if (results[i]['Category'] == categories[j])
					exists = true;
				++j;
			}
			if (exists == false)
				categories.push(results[i]['Category']);
		}
		// console.log(categories);
		res.json(categories);
	});
});

// =============================================================================
/* ~ POST Requests ~ */

router.post('/authenticate', (req, res) => {

	var login   = req.body.login;
	var passwd  = req.body.passwd;

	console.log(login);
	console.log(passwd);

	// if (auth(login, passwd) == true) {
	// 	res.end(true);
	// } else {
	// 	res.end(false);
	// }

	res.end('API under construction...')
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
