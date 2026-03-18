import { Customer } from "../models/index.js";

export const createCustomer = async (req, res) => {
  try {
    const data = await Customer.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const getCustomers = async (req, res) => {
  const data = await Customer.findAll();
  res.json(data);
};

export const getCustomerById = async (req, res) => {
  const data = await Customer.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  res.json(data);
};

export const updateCustomer = async (req, res) => {
  const data = await Customer.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  await data.update(req.body);
  res.json(data);
};

export const deleteCustomer = async (req, res) => {
  const data = await Customer.findByPk(req.params.id);
  if (!data) return res.status(404).json({ error: "No encontrado" });
  await data.destroy();
  res.json({ message: "Eliminado" });
};