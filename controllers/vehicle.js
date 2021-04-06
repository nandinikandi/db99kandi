var Vehicle = require('../models/vehicle');
// List of all Vehicle
exports.vehicle_list = function(req, res) {
res.send('NOT IMPLEMENTED: Vehicle list');
};
// for a specific Vehicle.
exports.vehicle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id);
};
// Handle Vehicle create on POST.
exports.vehicle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Vehicle create POST');
};
// Handle Vehicle delete form on DELETE.
exports.vehicle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
};
// Handle Vehicle update form on PUT.
exports.vehicle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Vehicle update PUT' + req.params.id);
};
