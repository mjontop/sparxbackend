const express = require('express');
const { userLogin, userSignup } = require('../controllers/UserConrtrollers');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.post('/signuppvt', async (req, res) => {
  const user = await userSignup(req.body);
  return res.send(user);
});

router.post('/login', async (req, res) => {
  const user = await userLogin(req.body);
  return res.send(user);
});

module.exports = router;
