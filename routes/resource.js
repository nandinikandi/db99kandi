var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var vehicle_controller = require('../controllers/vehicle');

/// API ROUTE ///

// GET resources base.
router.get('/resource', api_controller.api);

/// VEHICLE ROUTES ///

// POST request for creating a Vehicle.
router.post('/resource/vehicles', vehicle_controller.vehicle_create_post);

// DELETE request to delete Vehicle.
router.delete('/resource/vehicles/:id', vehicle_controller.vehicle_delete);

// PUT request to update Vehicle.
router.put('/resource/vehicles/:id', vehicle_controller.vehicle_update_put);

// GET request for one Vehicle.
router.get('/resource/vehicles/:id', vehicle_controller.vehicle_detail);

// GET request for list of all Vehicle items.
router.get('/resource/vehicles', vehicle_controller.vehicle_list);

// GET request for one vehicle.
router.get('/vehicles/:id', vehicle_controller.vehicle_detail);

module.exports = router;
