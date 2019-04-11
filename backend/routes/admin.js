
/* ADMIN ROUTER */
// =============================================================================

/* Dependencies */
const express  = require('express')

/* Creating ADMIN Router */
const router   = express.Router();

// =============================================================================
/* ~ GET Requests ~ */

router.get('/login', (req, res) => {

	res.end('API under construction...');
});

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



	res.end('API under construction...');
});

router.post('/update', (req, res) => {

	console.log(req.params.id);

	res.end('API under construction...');
});

router.post('/delete', (req, res) => {

/* Delete Restaurant Entry */

	console.log(req.params.id);

	res.end('API under construction...');
});

// =============================================================================

module.exports = router;
