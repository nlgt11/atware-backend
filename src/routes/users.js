import express from 'express';
import { createUser, getAllUsers, login } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.post('/login', login)

export default router;
