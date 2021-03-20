import express from 'express';
import {login, authenticate } from '../controllers/authController';

const router = express.Router();

router.post('/', login);
router.get('/', auth, authenticate);

export default router;
