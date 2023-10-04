
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

route.post('/changePassword', async(req, res)=>{
    const {username, password, newPassword} = req.body
    try {
        const update = await user.updateOne({username:username, password:password}, {password:newPassword});
          if(update.modifiedCount === 1)
          return res.send("Changed Password Succesfully");
          else
          return res.send('No Match Found')
  
      } catch (error) {
        return res.send(error);
      }
})

module.exports = route