const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a model define('modelName', {Structure of the Model} )
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;