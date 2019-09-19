const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a model define('modelName', {Structure of the Model} )
const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;