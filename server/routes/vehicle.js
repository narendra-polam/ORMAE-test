const vechicle_tracker = require('../model/vechicle_tracker');
const vechicle_details = require('../model/vechicle_details');

module.exports = {
    dashboard: async function (req, res) {
        try {
            const data = await vechicle_details.find();
            res.status(200).send(data);

        } catch (err) {
            res.send('error ')
        }
    },

    addVehicle: async function (req, res) {
        try {
            const obj = new vechicle_tracker({
                "vehicle_id": req.body.vehicle_id,
                "name": req.body.name,
                "geo_location": req.body.geo_location,
                "state": req.body.state
            });
            const vehicle = await obj.save()

            const data = await vechicle_details.findById(vehicle._id);
            data.vehicle_id = req.body.vehicle_id;
            data.name = req.body.name;
            data.number = req.body.number;
            data.recent_location = req.body.recent_location;
            data.is_active = req.body.is_active;
            data.modem_connection = req.body.modem_connection;

            res.json(await data.save())

        } catch (err) {
            res.send('error ')
        }
    },

    updateVehicle: async function (req, res) {
        try {
            const data = await vechicle_details.findById(req.params.id);
            data.recent_location = req.body.recent_location;
            data.is_active = req.body.is_active;
            data.modem_connection = req.body.modem_connection;

            res.json(await data.save())

        } catch (err) {
            res.send('error ')
        }
    }

}