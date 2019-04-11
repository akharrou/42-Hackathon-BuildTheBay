
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

router.post('/add', (req, res) => {

	res.end('API under construction...');
});

router.post('/update', (req, res) => {

	console.log(req.params.id);

	res.end('API under construction...');
});

router.post('/delete', (req, res) => {

	console.log(req.params.id);

	res.end('API under construction...');
});

// =============================================================================

module.exports = router;
