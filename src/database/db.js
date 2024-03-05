const Sequelize = require("sequelize");

const DATABASE = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE, {
  dialect: "postgres",
});

module.exports = sequelize;

require("../models/book");

sequelize.sync();
