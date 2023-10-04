
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const artist = require('../models/artist')

route.post('/search/artist', async(req, res)=>{
    
    try {
        const foundArtist = await artist.find({ artistName:  { $regex: `(?i)${req.body.searchValue}(?-i)` }});
          if(foundArtist)
          return res.send(foundArtist);  
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route