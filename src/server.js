import express from "express";
import customerRoutes from "./routes/CUS.js";
import productRoutes from "./routes/product.routes.js";
import saleRoutes from "./routes/sale.routes.js";

const app = express();

app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/products", productRoutes);
app.use("/sales", saleRoutes);

export default app;

