import { User } from 'models';

const createUser = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    console.log(req.body);
    const newUser = await User.create({
      email,
      password,
      fullname,
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
