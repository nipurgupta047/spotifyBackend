
const app = require('express')
const route = app.Router()

const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const mongoose = require('mongoose')
const user = require('../models/user')

route.post('/userPlaylist/:playlistId', async(req, res)=>{

    try {
        const username = jwt.verify(req.body.token,JWT_SECRET_KEY).username
        const foundUser = await user.findOne({username:username});
          if(foundUser){
            for (let index = 0; index < foundUser.playlist.length; index++) {
                if(foundUser.playlist[index]._id === req.params.playlistId)
                    return res.send(foundUser.playlist[index])
            }
          }
        else
            {
                return res.send("No match found")
            }
        } catch (error) {
            return res.send(error);
        }

    
})

module.exports = route