
/* API ROUTER */
// =============================================================================

/* Dependencies */
const express      = require('express');
const sha256       = require('sha256');

/* Creating API Router */
const router       = express.Router();

/* Models */
const Restaurant   = require('../models/restaurant');

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
			res.end('Error: Not Found');
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

	Restaurant.getRestaurantByEmail(req.body.Email, (err, result) => {

		/* Case: Error (1) */
		if (err) {
			res.json({ response: 'Error: Authentication Operation Failed (1)' });
		}

		/* Case: User Doesn't Exist */
		else if (result == undefined) {
				res.json({ response: 'false' });
		}

		/* Case: User Exists */
		else {

			if (req.body.Email == result.Email && sha256(req.body.Passwd) == result.Passwd) {

				/* Case: Authentic User */
				res.json({ response : result })

			} else {

				/* Case: Not Authentic User */
				res.json({ response : 'false' })
			}
		}
	});
});

router.post('/update/:email/:field', (req, res) => {


	Restaurant.updateRestaurant(req, (err, result) => {

		/* Case: Error (1) */
		if (err) {
			res.json({ response: 'Error: Update Operation Failed (1)' });
		}

		/* Case: Update Successful */
		else {
			res.json({ response: 'Update Operation Successful' });
		}
	});
});

// =============================================================================

module.exports = router;
