const Sequelize = require('../lib/database');

const User = Sequelize.define('project', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
});

module.exports = User;