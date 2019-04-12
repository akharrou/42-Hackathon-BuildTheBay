
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
	Restaurant.getRestaurants((err, results) => {

		if (err || results == undefined) {
			res.end('Error None Found');
			return ;
		}
		res.json({ restaurants: results });
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
		res.json({ restaurant: result });
	});
});

router.get('/restaurant/name=:name', (req, res) => {

	var restaurantName = req.params.name;

	/* Get Info of Specified Restaurant (queried by Name if it exists) */
	Restaurant.getRestaurantByName(restaurantName, (err, result) => {

		if (err || result == undefined) {
			res.end('Error Not Found');
			return ;
		}
		res.json({ restaurant: result });
	});
});

router.get('/categories', (req, res) => {

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
		res.json({ categories: categories });
	});
});

// =============================================================================
/* ~ POST Requests ~ */

router.post('/login', (req, res) => {

	console.log(req.body.Email);
	console.log(req.body.Passwd);

	res.json({ response : 'true' });
	// res.json({ response : 'false' });

	// if (Restaurant.auth(req.body.Email, req.body.Passwd) == true) {
	// 	res.json({ response : 'true'});
	// } else {
	// 	res.json({ response : 'false'});
	// }
});

router.post('/update/:field', (req, res) => {

	console.log(req.params.field);

	switch (req.params.field) {

		case 'Name':
			console.log(req.body.Name);
			/* update name */
			break;

		case 'Address':
			console.log(req.body.Address);
			/* update address */
			break;

		case 'Website':
			console.log(req.body.Website);
			/* update website */
			break;

		case 'Description':
			console.log(req.body.Description);
			/* update description */
			break;

		case 'Hours':
			console.log(req.body.Hours);
			/* update hours */
			break;

		case 'Phone':
			console.log(req.body.Phone);
			/* update phone */
			break;

		case 'Photos':
			console.log(req.body.Photos);
			/* update photos */
			break;

		case 'Cater':
			console.log(req.body.Cater);
			/* update cater */
			break;

		case 'Service':
			console.log(req.body.Service);
			/* update service */
			break;

		case 'Media':
			console.log(req.body.Media);
			/* update service */
			break;

	};

	res.end('API under construction...')
});

// =============================================================================

module.exports = router;
