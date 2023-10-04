const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

router.post('/login', async(req, res)=>{
    const loginUser = req.body;
    try {
        const fetchedUser = await user.findOne({username:loginUser.username});
          if(fetchedUser)
            {
              bcrypt.compare(loginUser.password, fetchedUser.password, function(err, result) {
                if (err) {  return res.send('Incorrect Username/Password1')}
          
                if(result === false)
                return res.send('Incorrect Username/Password')
                
                const token = jwt.sign({
                  username: loginUser.username
                }, JWT_SECRET_KEY)
                return res.json({status: 'logged', data:token})
    
            });
             
            }
          else
            return res.send('Incorrect email or/and password')
        
  
      } catch (error) {
        return res.send('Could not log in. Please try again');
      }
  
  })

module.exports = router

