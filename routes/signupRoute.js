const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

const bycrypt = require('bcrypt')
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)


router.post('/signup', async(req, res)=>{
    const newUser = new user(req.body);
    try {
        const username = await user.findOne({username:newUser.username});
          if(username)
          return res.send("Email Already Registered");
  
      } catch (error) {
        return res.send(error);
      }
  
    try {
        newUser._id = uuid.v4()
        const hashedPassword = await bycrypt.hash(req.body.password, SALT_ROUNDS)
        newUser.password = hashedPassword
        await newUser.save()
        return res.send("You are registered")
      } catch (error) {
        return res.send('Could not register');
      } 
  
  })

module.exports = router

