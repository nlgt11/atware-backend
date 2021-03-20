import { User } from 'models';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const {JWT_KEY} = process.env;
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user === null) {
      return res.status(400).send({ error: 'Invalid credentials!' });
    }
    const isValidCredential = await bcrypt.compare(password, user.password);

    if (!isValidCredential) {
      return res.status(400).send({ error: 'Invalid credentials!' });
    }

    // if (!user.isActivated) {
    //   return res
    //     .status(403)
    //     .send({ error: 'The user account is not activated yet' });
    // }

    const payload = { user: { id: user.id, name: user.name } };
    const token = await jwt.sign(payload, JWT_KEY);
    return res.status(200).send({ token });
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: 'Auth failed',
    });
  }
};

const authenticate = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    return res.json(user);
  } catch (error) {
    return res.status(500).send({
      error: 'Internal server error!',
    });
  }
};

export {login, authenticate};
