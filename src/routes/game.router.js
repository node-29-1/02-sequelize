const { getAll, create } = require('../controllers/game.controllers');
const express = require('express');

const gameRouter = express.Router();

gameRouter.route("/") // /games
  .get(getAll)
  .post(create)

module.exports = gameRouter;
