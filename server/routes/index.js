'use strict';
const express = require('express');

const {dashboard, addVehicle, updateVehicle} = require('./vehicle');

const router = express.Router();

router.route('/vehicle').post(addVehicle);
router.route('/vehicle/:id').put(updateVehicle);
router.route('/dashboard').get(dashboard);

module.exports = router;