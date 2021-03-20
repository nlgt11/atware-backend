import express from 'express';
import {getAllPictures, getLikedPictures ,upload, like} from '../controllers/pictureController';
import auth from '../middleware/auth';
const router = express.Router();

router.get('/', auth, getAllPictures);
router.post('/upload', auth, upload);
router.get('/like/',auth, getLikedPictures);
router.put('/like/:id',auth, like);


export default router;
