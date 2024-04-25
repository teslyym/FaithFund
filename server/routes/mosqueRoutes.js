import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addMosque,
  getAllMosques,
  getMosqueById,
} from "../controllers/mosqueController.js";

const router = express.Router();

router.route("/").get(getAllMosques);
router.post("/create-mosque", addMosque);
router.get("/:id", getMosqueById);

export default router;
