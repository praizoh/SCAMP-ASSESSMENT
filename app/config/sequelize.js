const dbConfig = require('./db.config')

const Sequelize = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()
// const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
//   host: process.env.Host,
//   dialect: dbConfig.dialect,     
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../User/user.model")(sequelize, Sequelize);
db.inventory = require("../Inventory/inventory.model")(sequelize, Sequelize);

module.exports = db;