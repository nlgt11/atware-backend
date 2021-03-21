import { User, Picture, UserPicture } from 'models';
import gravatar from 'gravatar'
import bcrypt from 'bcrypt';
import axios from 'axios';
import sequelize, { where } from 'sequelize';
import { response } from 'express';
import faker from 'faker';
const createUser = async (req, res) => {
  try {
    const { email, password, name,} = req.body;
    console.log(req.body);
    const avt =   faker.image.imageUrl();
    const newUser = await User.create({
      email,
      password,
      name,
     avatar_url: avt
    });
    return res.send(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'Can not create user, please retry' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});

    return res.send(users);
  } catch (error) {
    return res.status(500).send({ error: 'Internal server error' });
  }
};

const login = async(req, res) =>{
  try{
    const { email, password,} = req.body;
    const saltRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltRounds);
    const user = await User.findAll({
      where: {
        email: email,
        password: passwordHashed
      }
    })
    return res.send(user)
  } catch (error) {
    return res.status(500).send({error: 'Wrong information!'})
  }
}


const infer = async(req,res)=>{
  try{
    const pictureUploaded = await Picture.findAll({
      where:{
        userId: req.user.id,
      }
    }).map(x=>x.toJSON());
    const pictureLiked = await UserPicture.findAll({
      include:[{
        model: Picture
      }],
      where:{
        userId: req.user.id,
      }
    }).map(x=>x.Picture.toJSON())
    const picture = pictureLiked.concat(pictureUploaded.concat(pictureLiked))
    if (picture === []){
      return res.status(500).send({
        error: "You haven't uploaded and liked any picture! Try it!",
      })
    }
    console.log(picture)
    let pathSplit = picture.map(x => x['url'].split("\\"));
    let imgName = pathSplit.map(x=>x[x.length-1]);
    console.log(imgName)
    const response = await axios({
      method:'get',
      url: 'http://127.0.0.1:5000/predict',
      data:{
      "path": "../atware-backend/src/images",
      "listImgNames": imgName,
      "numberOfNeighbor": 4
        }
      })

    const listImageNames = response.data['images'].map(x=> '%'+x);
    
    const listPicture = await Picture.findAll({
      where:{
        url:{
          [sequelize.Op.like]: {[sequelize.Op.any]: listImageNames} 
        } 
      }
    }).map(x=>x['id'])

    // const picWithuser = await UserPicture.findAll({
    //   include: [
    //     model: User
    //   ],
    //   {where: {

    //   }}
    // })
    const listUserLiked = await UserPicture.findAll({
      include: [
        {
          model: User

        },
      ],
      where:{
        pictureId: listPicture
      }
    }).map(x => x.User.toJSON());
    const listUserUpload = await UserPicture.findAll({
      include: [
        {
          model: Picture,
          where:{
            id: listPicture
          }
        },
        {
          model: User,
        }
        
      ],
    }).map(x => x.User.toJSON());
    return res.send(listUserLiked.concat(listUserUpload));
  }catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Error hihi',
    });
  }
};

export { createUser, getAllUsers, login, infer};
