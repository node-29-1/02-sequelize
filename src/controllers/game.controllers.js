const catchError = require('../utils/catchError');
const Game = require('../models/Game');

const getAll = catchError(async(req, res) => {
    const games = await Game.findAll();
    return res.json(games);
});

module.exports = {
    getAll
}
