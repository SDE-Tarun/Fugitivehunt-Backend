const express = require('express');
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const resultRoutes = require('./routes/resultRoutes');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api', cityRoutes);
app.use('/api', vehicleRoutes);
app.use('/api', resultRoutes);

module.exports = app;