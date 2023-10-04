const app = require('express')
const router = app.Router()

const mongoose = require('mongoose')
const user = require('../models/user')

const uuid = require('uuid')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

router.post('/isLoggedIn', async(req, res)=>{
    const token = req.body.token;
  try {
    const user = jwt.verify(token,JWT_SECRET_KEY)
    return res.send(user.username)
  } catch (error) {
    return res.send('')
  }
  
  })

module.exports = router

