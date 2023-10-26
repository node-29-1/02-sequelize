const express = require('express');
const router = express.Router();
const gameRouter = require('./game.router');
const carRouter = require('./car.router');

// colocar las rutas aquí
router.use('/games', gameRouter);
router.use('/cars', carRouter);

module.exports = router;
