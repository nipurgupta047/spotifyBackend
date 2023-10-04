
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const song = require('../models/song')

route.get('/song/:songId', async(req, res)=>{
  
    try {
        const foundSong = await song.findOne({_id:req.params.songId});
          if(foundSong)
          return res.send(foundSong);  
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route