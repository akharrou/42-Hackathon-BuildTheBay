
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
	let data = {};
	/* Get All Info of All Restaurants */
	Restaurant.getRestaurants((err, results) => {

		if (err || results == undefined) {
			res.end('Error None Found');
			return ;
		}

<<<<<<< HEAD
		// console.log(results);
		res.json(results);
=======
		if (err)
			throw err;
		// console.log(restaurants);
		data.restaurants = restaurants;
		res.json(data);
>>>>>>> c45c415ef052a0a4723d4e76bc74cbc04b8b6ed7
	});
});

router.get('/restaurant/_id=:_id', (req, res) => {

	var restaurant_ID = req.params._id;

	/* Get Info of Specified Restaurant (queried by ID if it exists) */
	Restaurant.getRestaurantById(restaurant_ID, (err, result) => {

		if (err || result == undefined) {
			res.end('Error Not Found');
			return ;
		}
		// console.log(result);
		res.json(result);
	});
});

router.get('/restaurant/name=:name', (req, res) => {

	var restaurantName = req.params.name;
	console.log(restaurantName)

	/* Get Info of Specified Restaurant (queried by Name if it exists) */
	Restaurant.getRestaurantByName(restaurantName, (err, result) => {

<<<<<<< HEAD
		if (err || result == undefined) {
			res.end('Error Not Found');
			return ;
		}
		// console.log(result);
		res.json(result);
	});
});

router.get('/categories', (req, res) => {
=======
	var categories = [];
	let data = {};
>>>>>>> c45c415ef052a0a4723d4e76bc74cbc04b8b6ed7

	/* Get All Categories */
	Restaurant.getCategories((err, results) => {

		if (err || results == undefined) {
			res.end('Error None Found');
			return ;
		}

		var categories = [];

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
		data.categories = categories;
		res.json(data);
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
