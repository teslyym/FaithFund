import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { addMosque, getAllMosques } from '../controllers/mosqueController.js';


const router = express.Router();

router.route('/')
.get(getAllMosques)
.post(protect, addMosque )
// .delete()
// router.get('/:id', )

export default router;