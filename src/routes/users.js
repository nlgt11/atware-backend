import express from 'express';
import { createUser, getAllUsers, login, infer } from '../controllers/userController';
import auth from '../middleware/auth';
const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.post('/login', login)
router.get('/friend/infer', auth, infer);

export default router;
