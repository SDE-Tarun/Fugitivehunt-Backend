const data = require('../models/data');

const getCities = (req, res) => {
    res.json(data.cities);
};

module.exports = { getCities };