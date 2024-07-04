const data = require('../models/data');

const getVehicles = (req, res) => {
    res.json(data.vehicles);
};

module.exports = { getVehicles };