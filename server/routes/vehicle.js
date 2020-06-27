const vehicles = require('../model/vechicle_details');

module.exports = {
    dashboard: async function (req, res) {
        try {
            const data = await vehicles.find();
            res.status(200).send(data);

        } catch (err) {
            res.send('error ')
        }
    },

    updateVehicle: async function (req, res) {
        try {
            const data = await vehicles.findById(req.params.id);
            data.recent_location = req.body.recent_location;
            data.is_active = req.body.is_active;
            data.modem_connection = req.body.modem_connection;

            res.json(await data.save())

        } catch (err) {
            res.send('error ')
        }
    }

}