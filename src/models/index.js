import Customer from "./CustomerModel.js";
import Product from "./ProductModel.js";
import Sale from "./SaleModel.js";
import SaleProduct from "./SaleProduct.js";

// Cliente - Venta (1 a muchos)
Customer.hasMany(Sale, { foreignKey: "customerId" });
Sale.belongsTo(Customer, { foreignKey: "customerId" });

// Venta - Producto (muchos a muchos)
Sale.belongsToMany(Product, {
  through: SaleProduct,
  foreignKey: "saleId"
});

Product.belongsToMany(Sale, {
  through: SaleProduct,
  foreignKey: "productId"
});

export {
  Customer,
  Product,
  Sale,
  SaleProduct
};