const mongoose = require("mongoose");

const vehicle_tracking_Schema = new mongoose.Schema({
    vehicle_id: {
        type: String,
        required: true,
        unique : true
    },
    name: {
        type: String,
        required: true
    },
    geo_location: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('vehicle_tracker', vehicle_tracking_Schema);