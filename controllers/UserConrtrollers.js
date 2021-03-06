const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const userSignup = async (body) => {
  body.password = await bcrypt.hash(body.password, 2);
  const existingUser = await User.findOne({ where: { email: body.email } });
  if (existingUser) return { succes: false };
  const user = await User.create(body);
  const token = user.generateAuthToken();
  return token;
};

const userLogin = async (body) => {
  try {
    const user = await User.findOne({ where: { email: body.email } });
    if(!user)  return { message: 'Invalid Email or Password', success: false };
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) return { message: 'Invalid Email or Password', success: false };
    return { token: user.generateAuthToken(), success: true };
  } catch (err) {
    console.log('Error', err);
  }
};

module.exports = { userSignup, userLogin };
