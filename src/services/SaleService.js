
import { Sale, Product } from "../models/index.js";

export const createSale = async (data) => {

  const { customerId, products } = data;

  let total = 0;

  // 🔹 buscar productos y calcular total
  const productList = await Promise.all(
    products.map(async (item) => {
      const product = await Product.findByPk(item.id);

      if (!product) {
        throw new Error("Producto no encontrado");
      }

      const subtotal = product.price * item.quantity;
      total += subtotal;

      return {
        product,
        quantity: item.quantity,
        price: product.price
      };
    })
  );

  // 🔹 crear venta
  const sale = await Sale.create({
    customerId,
    total
  });

  // 🔹 relación muchos a muchos
  for (const item of productList) {
    await sale.addProduct(item.product, {
      through: {
        quantity: item.quantity,
        price: item.price
      }
    });
  }

  return sale;
};