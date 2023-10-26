const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async(req, res) => {
    const cars = await Car.findAll();
    return res.json(cars);
});

const create = catchError(async(req, res) => {
    const car = await Car.create({
        brand: "Tesla",
        model: "X",
        year: 2022,
        color: "red",
    });
    return res.status(201).json(car);
});

module.exports = {
    getAll,
    create,
}
