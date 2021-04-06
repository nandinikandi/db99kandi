const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
make: String,
model: String,
year: Number
})
module.exports = mongoose.model("Vehicle", vehicleSchema)
