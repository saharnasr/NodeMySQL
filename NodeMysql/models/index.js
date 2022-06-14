const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(() => {
    console.log('Drop and re-sync db.');
});

module.exports = db;
