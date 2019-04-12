
/* ADMIN ROUTER */
// =============================================================================

/* Dependencies */
const express      = require('express');
const mongoose     = require('mongoose');
const sha256       = require('sha256');

/* Creating ADMIN Router */
const router       = express.Router();

/* Models */
const Restaurant   = require('../models/restaurant')

// =============================================================================
/* ~ POSTS Requests ~ */

router.post('/login', (req, res) => {

	if ( req.body.Login   ==  process.env.ADMIN_LOGIN  &&
		 req.body.Passwd  ==  process.env.ADMIN_PWD     )
	{

		/* Case: User Authentic */
		res.json({ response: 'true' });

	} else {

		/* Case: User Not Authentic */
		res.json({ response: 'false' });
	}
});

router.post('/add', (req, res) => {

	var restaurantEmail = req.body.Email;

	Restaurant.getRestaurantByEmail(restaurantEmail, (err, result) => {

		/* Case: Error (1) */
		if (err) {
			res.json({ response: 'Error: Add Operation Failed (1)' });
		}

		/* Case: User Already Exists */
		else if (result != undefined) {
			res.json({ response: 'User already exists' });
		}

		/* Case: Possible to Create User */
		else {
			const newRestaurant = new Restaurant({
				_id: new mongoose.Types.ObjectId(),
				Name: req.body.Name,
				Email: req.body.Email,
				Passwd: sha256(req.body.Passwd)
			});

			try {
				newRestaurant.save()
				.then(result => {
					console.log(result);
				});
			}

			/* Case: Error (2) : Adding User */
			catch (err) {
				res.json({ response: 'Error: Add Operation Failed (2)' });
			}

			/* Case: Successful Add Opteration */
			res.json({ response : 'Add Operation Succesful' })
		}
	});
});

router.post('/delete', (req, res) => {

	Restaurant.removeRestaurant(req.body.Name, (err, result) => {

		/* Case: Error */
		if (err) {
			res.json({ response: 'Error: Delete Operation Failed (1)' });
		}

		/* Case: User Doesn't Exist */
		else if (result.deletedCount == 0) {
			res.json({ response: 'User does not exist' });
		}

		/* Case: Successful Delete Opteration */
		else {
			res.json({ response: 'Delete Operation Successful' });
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
