
const app = require('express')
const route = app.Router()

const mongoose = require('mongoose')
const spotifyPlaylist = require('../models/spotifyPlaylist')

route.get('/spotifyPlaylist', async(req, res)=>{
    
    try {
        const foundSpotifyPlaylist = await spotifyPlaylist.find();
          if(foundSpotifyPlaylist)
          return res.send(foundSpotifyPlaylist);
        else
            return res.status(404).send("No playlist found")
      } catch (error) {
        return res.status(404).send(error);
      }
    
})

module.exports = route