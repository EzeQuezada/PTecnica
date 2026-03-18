
import { Product } from "../models/index.js";

export const createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const getProducts = async (req, res) => {
  const data = await Product.findAll();
  res.json(data);
};

export const getProductById = async (req, res) => {
  const data = await Product.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  res.json(data);
};

export const updateProduct = async (req, res) => {
  const data = await Product.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  await data.update(req.body);
  res.json(data);
};

export const deleteProduct = async (req, res) => {
  const data = await Product.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  await data.destroy();
  res.json({ message: "Eliminado" });
};