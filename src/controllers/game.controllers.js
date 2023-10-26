const catchError = require('../utils/catchError');
const Game = require('../models/Game');

const getAll = catchError(async(req, res) => {
    const games = await Game.findAll();
    return res.json(games);
});

const create = catchError(async(req, res) => {
    const { name, price } = req.body;
    const game = await Game.create({
        name: name,
        price: price,
    });
    return res.status(201).json(game);
});

module.exports = {
    getAll,
    create,
}
