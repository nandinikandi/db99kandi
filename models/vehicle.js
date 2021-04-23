const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
make: {
    type: String,
    minLength: 3,
    maxLength: 10,
    required: [true, 'Vehicle Make is required']
  },
model: {
    type: String,
    minLength: 3,
    required: [true, 'Vehicle Model is required']
  },
year: {
    type: Number,
    min: [1950, 'Too Low'],
    max: [2050, 'Too High']
}
})
module.exports = mongoose.model("Vehicle", vehicleSchema)
