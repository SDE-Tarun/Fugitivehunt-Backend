const express = require('express');
const { selectCity, selectVehicle, determineResult } = require('../controllers/resultController');
const router = express.Router();

router.post('/select-city', selectCity);
router.post('/select-vehicle', selectVehicle);
router.get('/result', determineResult);

module.exports = router;