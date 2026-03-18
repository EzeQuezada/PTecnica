import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const SaleProduct = sequelize.define("SaleProduct", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, {
  tableName: "sale_products"
});

export default SaleProduct;