const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const artist = require('../models/artist')

route.get('/artist/:artistId', async(req, res)=>{
    try {
        const foundArtist = await artist.findOne({_id:req.params.artistId});
          if(foundArtist)
          return res.send(foundArtist);  
      } catch (error) {
        return res.send(error);
      }
    
})

module.exports = route