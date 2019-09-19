const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a model define('modelName', {Structure of the Model} )
const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = OrderItem;