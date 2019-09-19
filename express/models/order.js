const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a model define('modelName', {Structure of the Model} )
const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Order;