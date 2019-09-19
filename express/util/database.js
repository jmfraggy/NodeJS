// Documentation of Sequelize: https://sequelize.org/master/manual/getting-started.html
const Sequelize = require('sequelize/index');

const sequelize = new Sequelize('node-complete', 'root', 'fragoso44', {
    dialect: 'mysql', 
    host: 'localhost'
}); // Fully configured sequelize environment

module.exports = sequelize;

