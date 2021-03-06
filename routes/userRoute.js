const express = require('express');
const { userLogin, userSignup } = require('../controllers/UserConrtrollers');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.post('/login', async (req, res) => {
  try {
    const user = await userLogin(req.body);
    return res.send(user);
  } catch (err) {
    console.log('Error ', err);
  }
});

module.exports = router;
