import { User } from 'models';
import gravatar from 'gravatar'

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

export { createUser, getAllUsers };
