import { Picture, UserPicture } from 'models';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: './public/',
  filename: function (req, file, cb) {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single('myfile');

const uploadPic = async (req, res) => {
  upload(req, res, async () => {
    console.log('Request ---', req.body);
    console.log('Request file ---', req.file); //Here you get file.

    const newPic = await Picture.create({
      userId: req.user.id,
      url: req.file.path,
    });

    return res.send({ message: 'uploaded successfully' });
  });
};

const getAllPictures = async (req, res) => {
  try {
    const pictures = await Picture.findAll({});
    console.log(pictures);
    return res.send(pictures);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};

const getLikedPictures = async (req, res) => {
  try {
    const pictures = await UserPicture.findAll({
      where: {
        userId: req.user.id,
      },
    }).map((x) => x['pictureId']);
    return res.send(pictures);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};

const like = async (req, res) => {
  try {
    const img_id = req.params.id;
    console.log(img_id);
    var isExist = await UserPicture.findOne({
      where: {
        pictureId: img_id,
        userId: req.user.id,
      },
    });
    if (isExist) {
      await UserPicture.destroy({
        where: {
          pictureId: img_id,
          userId: req.user.id,
        },
      });
      return res.status(201).send();
    } else {
      const newUserPicture = await UserPicture.create({
        userId: req.user.id,
        pictureId: img_id,
      });
      return res.status(200).send();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};
export { getAllPictures, getLikedPictures, uploadPic, like };
