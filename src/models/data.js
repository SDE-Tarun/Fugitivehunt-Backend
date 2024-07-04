const data = {
    cities: [
        { name: 'New York', distance: 60 },
        { name: 'Los Angeles', distance: 50 },
        { name: 'Chicago', distance: 40 },
        { name: 'Singapore', distance: 30 },
        { name: 'London', distance: 20 },
    ],
    vehicles: {
        evCar: { range: 60, count: 2 },
        evBike: { range: 100, count: 1 },
        evSuv: { range: 120, count: 1 }
    },
    fugitiveLocation: null,
    cops: [
        { name: 'Cop 1', city: null, vehicle: null },
        { name: 'Cop 2', city: null, vehicle: null },
        { name: 'Cop 3', city: null, vehicle: null }
    ]
};

module.exports = data;