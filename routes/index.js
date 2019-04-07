var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end(fs.readFileSync('../public/html/index.html', 'utf-8').toString());
});

module.exports = router;
