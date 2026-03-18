const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sale = sequelize.define("Sale", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.FLOAT
  }
});

module.exports = Sale;