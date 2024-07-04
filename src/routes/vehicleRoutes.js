const express = require('express');
const { getVehicles } = require('../controllers/vehiclesController');
const router = express.Router();

router.get('/vehicles', getVehicles);

module.exports = router;