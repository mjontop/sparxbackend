const { Sequelize } = require('sequelize');

// local configuration of mysql
const localhost = new Sequelize({
  host: 'mysql-22277-0.cloudclusters.net',
  dialect: 'mysql',
  database: 'sparxdb',
  username: 'manikant',
  password: '12345678',
});

module.exports = localhost