import express from 'express';
import {login, authenticate } from '../controllers/authController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/', login);
router.get('/', auth, authenticate);

export default router;
