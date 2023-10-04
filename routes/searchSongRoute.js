
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const song = require('../models/song')

route.post('/search/song', async(req, res)=>{
    try {
        const foundSong = await song.find({ songName: { $regex: `(?i)${req.body.searchValue}(?-i)` } });
          if(foundSong)
          return res.send(foundSong);  
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route