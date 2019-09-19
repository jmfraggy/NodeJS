const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a model define('modelName', {Structure of the Model} )
const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;