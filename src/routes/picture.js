import express from 'express';
import {
  getAllPictures,
  getLikedPictures,
  uploadPic,
  like,
} from '../controllers/pictureController';
import auth from '../middleware/auth';

// const storage = multer.diskStorage({
//   destination: './public/',
//   filename: function (req, file, cb) {
//     cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname));
//   },
// });

// const uploadImg = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// }).single('myfile');

const router = express.Router();

router.get('/', auth, getAllPictures);
router.post('/upload', auth, uploadPic);
router.get('/like/', auth, getLikedPictures);
router.put('/like/:id', auth, like);

export default router;
