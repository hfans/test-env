var Sequelize = require('sequelize');
var sequelize = new Sequelize();


sequelize
    .authenticate().then(function (err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });
