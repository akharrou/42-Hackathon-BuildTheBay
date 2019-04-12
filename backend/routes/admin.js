
/* ADMIN ROUTER */
// =============================================================================

/* Dependencies */
const express  = require('express')

/* Creating ADMIN Router */
const router   = express.Router();

// =============================================================================
/* ~ POSTS Requests ~ */

router.post('/login', (req, res) => {

	var login   = req.body.login;
	var passwd  = req.body.passwd;

	console.log(login);
	console.log(passwd);

	if ( login   ===  process.env.ADMIN_LOGIN  &&
		 passwd  ===  process.env.ADMIN_PWD     )
	{
		res.end(true);
	} else {
		res.end(false);
	}
});

router.post('/add', (req, res) => {

	// Name
	// Address
	// Phone
	// Description
	// Website
	// Cater
	// Ratings
	// Hours
	// Category
	// Service
	// Distance
	// Lat
	// Lng

	var login   = req.body.login;
	var passwd  = req.body.passwd;

	console.log(login);
	console.log(passwd);

	res.end('API under construction...');
});

router.post('/delete', (req, res) => {

/* Delete Restaurant Entry */

	console.log(req.params.id);

	res.end('API under construction...');
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
	}

	res.end('API under construction...')
});

// =============================================================================

module.exports = router;
