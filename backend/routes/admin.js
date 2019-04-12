
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

	console.log(req.body.object);

	// switch (req.params.field) {

	// 	case 'name':
	// 		/* update name */
	// 		break;

	// 	case 'address':
	// 		/* update address */
	// 		break;

	// 	case 'website':
	// 		/* update website */
	// 		break;

	// 	case 'description':
	// 		/* update description */
	// 		break;

	// 	case 'hours':
	// 		/* update hours */
	// 		break;

	// 	case 'phone':
	// 		/* update phone */
	// 		break;

	// 	case 'photos':
	// 		/* update photos */
	// 		break;

	// 	case 'cater':
	// 		/* update cater */
	// 		break;

	// 	case 'service':
	// 		/* update service */
	// 		break;
	// }

	res.end('API under construction...')
});

// =============================================================================

module.exports = router;
