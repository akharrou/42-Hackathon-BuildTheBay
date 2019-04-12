
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

	var name    = req.body.Name;
	var email   = req.body.Email;
	var passwd  = req.body.Passwd;

	console.log(name);
	console.log(email);
	console.log(passwd);

	Restaurant.addRestaurant(name, email, passwd, (err, result) => {

		if (err) {
			console.log('Adding Operation Failed');
		} else {
			console.log('Adding Operation Succesful');
			console.log(result);
		}
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

		case 'Media':
			fieldToUpdate = req.body.Media;
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
