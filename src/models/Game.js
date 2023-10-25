const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const Game = sequelize.define('game', {
  // Definimos las columnas aquí
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }
});

module.exports = Game;
