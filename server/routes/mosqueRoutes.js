import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addMosque, getAllMosques } from "../controllers/mosqueController.js";

const router = express.Router();

router.route("/").get(getAllMosques);
router.post("/create-mosque", addMosque);
// .delete()
// router.get('/:id', )

export default router;
