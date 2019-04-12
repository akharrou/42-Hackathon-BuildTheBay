
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
		console.log('true')
		res.json({ response: 'true' });
	} else {
		console.log('false')
		res.json({ response: 'false' });
	}
});

router.post('/add', (req, res) => {

	const newRestaurant = new Restaurant({
		_id: new mongoose.Types.ObjectId(),
		Name: req.body.Name,
		Email: req.body.Email,
		Passwd: sha256(req.body.Passwd)
	});

	newRestaurant.save()
	.then(result => {
		console.log(result);
	});
});

router.post('/delete', (req, res) => {

	console.log(req.body.Name);

	Restaurant.removeRestaurant(req.body.Name, (err) => {

		if (err) {
			console.log('Deletion Operation Failed');
			res.end('Deletion Operation Failed');
		} else {
			console.log('Deletion Operation Successful');
		}
	});
});

router.post('/update/:field', (req, res) => {

	var fieldToUpdate = "";

	switch (req.params.field) {

		case 'Name':
			fieldToUpdate = req.body.Name;
			break;

		case 'Address':
			fieldToUpdate = req.body.Address;
			break;

		case 'Website':
			fieldToUpdate = req.body.Website;
			break;

		case 'Description':
			fieldToUpdate = req.body.Description;
			break;

		case 'Hours':
			fieldToUpdate = req.body.Hours;
			break;

		case 'Phone':
			fieldToUpdate = req.body.Phone;
			break;

		case 'Photos':
			fieldToUpdate = req.body.Photos;
			break;

		case 'Cater':
			fieldToUpdate = req.body.Cater;
			break;

		case 'Category':
			fieldToUpdate = req.body.Category;
			break;

		case 'Service':
			fieldToUpdate = req.body.Service;
			break;

		case 'Photo':
			fieldToUpdate = req.body.Photo;
			break;

		case 'Video':
			fieldToUpdate = req.body.Video;
			break;

		default:
			fieldToUpdate = undefined;
			break;
	}

	console.log(`${req.params.field} : ${fieldToUpdate}`);

	res.end('API under construction...')
});

// =============================================================================

module.exports = router;
