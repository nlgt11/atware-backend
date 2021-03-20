import express from 'express';
import {upload, like} from '../controllers/pictureController';
import auth from '../middleware/auth';
const router = express.Router();

router.post('/upload', auth, upload);
router.put('/like/:id',auth, like);


export default router;
