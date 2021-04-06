var express = require('express');

const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();

/* GET vehicle page. */
router.get('/', vehicle_controlers.vehicle_view_all_Page );

// router.get('/', function(req, res, next) {
//   res.render('vehicle', { title: 'Search Results for Vehicle' });
// });

module.exports = router;
