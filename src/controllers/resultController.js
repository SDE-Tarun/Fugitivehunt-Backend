const data = require('../models/data');

const selectCity = (req, res) => {
    const { cop, city } = req.body;
    data.cops[cop].city = city;
    res.json({ message: `Cop ${cop + 1} has selected ${city}` });
};

const selectVehicle = (req, res) => {
    const { cop, vehicle } = req.body;
    data.cops[cop].vehicle = vehicle;
    res.json({ message: `Cop ${cop + 1} has selected ${vehicle}` });
};

const determineResult = (req, res) => {
    const fugitiveCity = data.cities[Math.floor(Math.random() * data.cities.length)].name;
    data.fugitiveLocation = fugitiveCity;

    const successfulCop = data.cops.find(cop => cop.city === fugitiveCity);

    if (successfulCop) {
        res.json({ message: `${successfulCop.name} captured the fugitive in ${fugitiveCity}` });
    } else {
        res.json({ message: `The fugitive escaped from ${fugitiveCity}` });
    }
};

module.exports = { selectCity, selectVehicle, determineResult };