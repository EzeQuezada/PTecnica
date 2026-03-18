import { Sale, Product, Customer } from "../models/index.js";

export const createSale = async (req, res) => {
  try {
    const { customerId, products } = req.body;

    const customer = await Customer.findByPk(customerId);
    if (!customer) return res.status(400).json({ error: "Cliente inválido" });

    let total = 0;

    const sale = await Sale.create({ customerId, total: 0 });

    for (const item of products) {
      const product = await Product.findByPk(item.id);
      if (!product) {
        return res.status(400).json({ error: "Producto no existe" });
      }

      const subtotal = product.price * item.quantity;
      total += subtotal;

      await sale.addProduct(product, {
        through: {
          quantity: item.quantity,
          price: product.price
        }
      });
    }

    await sale.update({ total });

    res.status(201).json(sale);

  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const getSales = async (req, res) => {
  const data = await Sale.findAll({
    include: [
      { model: Customer },
      { model: Product }
    ]
  });
  res.json(data);
};

export const getSaleById = async (req, res) => {
  const data = await Sale.findByPk(req.params.id, {
    include: [Customer, Product]
  });
  if (!data) return res.status(404).json({ error: "No encontrado" });
  res.json(data);
};

export const deleteSale = async (req, res) => {
  const data = await Sale.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  await data.destroy();
  res.json({ message: "Eliminado" });
};