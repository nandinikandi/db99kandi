var express = require('express');
var router = express.Router();

/* GET vehicle page. */
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results for Vehicle' });
});

module.exports = router;
