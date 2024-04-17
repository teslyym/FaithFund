import express from 'express';
import {authenticateUser, registerUser} from "../controllers/userController.js"


const router = express.Router();

router.route('/').post(registerUser)
router.post('/login', authenticateUser)

export default router;