import { User } from 'models';
import gravatar from 'gravatar'
import bcrypt from 'bcrypt'
const createUser = async (req, res) => {
  try {
    const { email, password, name,} = req.body;
    console.log(req.body);
    const avt =   gravatar.url(email);
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

export { createUser, getAllUsers, login };
