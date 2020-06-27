const mongoose = require("mongoose");

const vehicle_details_Schema = new mongoose.Schema({
    vehicle_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    recent_location: {
        type: String,
        required: true
    },
    is_active: {
        type: String,
        required: true
    },
    modem_connection: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('vehicle_details', vehicle_details_Schema);