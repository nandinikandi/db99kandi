var Vehicle = require('../models/vehicle');
// List of all Vehicles
exports.vehicle_list = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.send(theVehicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Vehicle.
exports.vehicle_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id);
};
// Handle Vehicle create on POST.
exports.vehicle_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle create POST');
};
// Handle Vehicle delete form on DELETE.
exports.vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
};
// Handle Vehicle update form on PUT.
exports.vehicle_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.render('vehicle', { title: 'Vehicle Search Results', results: theVehicles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};