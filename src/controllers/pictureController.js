import { Picture, UserPicture} from 'models';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const {JWT_KEY} = process.env;

const getAllPictures = async (req, res) => {
  try {

    const pictures = await Picture.findAll({});
    console.log(pictures)
    return res.send(pictures);
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};

const getLikedPictures = async(req,res) =>{
  try{
    const pictures = await UserPicture.findAll({
      where:{
        userId: req.user.id
      }
    }).map(x=>x['pictureId'])
    return res.send(pictures)
  }
  catch (error) {
    console.log(error)
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};
const upload = async (req, res) => {
  try {
    console.log(req.body.url, req.user.id)
    const url = req.body.url;
    const newPicture = await Picture.create({
      url,
      userId: req.user.id
    })
    res.send(url)
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};
const like = async (req, res) => {
  try {
    const img_id = req.params.id;
    console.log(img_id);
    var isExist =  await UserPicture.findOne({
      where:{
        pictureId: img_id,
        userId: req.user.id,
      }
    })
    if (isExist){
      await UserPicture.destroy({
        where:{
          pictureId: img_id,
          userId: req.user.id,
        }
      })
      return res.status(201).send()
    }
    else{
      const newUserPicture = await UserPicture.create({
        userId: req.user.id,
        pictureId: img_id
      })
      return res.status(200).send()
    }
    
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};
export {getAllPictures, getLikedPictures, upload, like};
