const express = require("express");
const User = require('../models/UserModel')
const router = express.Router();

router.get('/', async (req, res)=> {
    const users = await User.findAll()
    res.send(users)
})

router.post('/signup', async (req, res)=> {
    
    const users = await User.findAll()
    res.send(users)
})



module.exports = router