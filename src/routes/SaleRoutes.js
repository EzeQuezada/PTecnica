import express from "express";
import {
  createSale,
  getSales,
  getSaleById,
  deleteSale
} from "../controllers/SaleController";

const router = express.Router();

router.post("/", createSale);
router.get("/", getSales);
router.get("/:id", getSaleById);
router.delete("/:id", deleteSale);

export default router;